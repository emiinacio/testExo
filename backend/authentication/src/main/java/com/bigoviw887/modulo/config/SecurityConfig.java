package com.bigoviw887.modulo.config;

import com.bigoviw887.modulo.filter.AuthEntryPointJwt;
import com.bigoviw887.modulo.filter.JwtAuthorizationFilter;
import com.bigoviw887.modulo.filter.LoginFilter;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import javax.annotation.processing.Generated;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;

@Generated(value = "com.exocoding.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {
  private final AuthEntryPointJwt unauthorizedHandler;

  public static final String[] URLS_WITHOUT_AUTHENTICATION = {
    "/assets/{id}", "/signup", "/assets/{id}", "/assets"
  };

  @Bean
  public LoginFilter loginFilter() {
    LoginFilter authenticationFilter = new LoginFilter();
    authenticationFilter.setAuthenticationFailureHandler(this::loginFailureHandler);
    authenticationFilter.setRequiresAuthenticationRequestMatcher(
        new AntPathRequestMatcher("/login", "POST"));
    return authenticationFilter;
  }

  @Bean
  public JwtAuthorizationFilter jwtAuthorizationFilter() {
    return new JwtAuthorizationFilter();
  }

  @Bean
  public PasswordEncoder encoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  public AuthenticationManager authenticationManager(
      AuthenticationConfiguration authenticationConfiguration) throws Exception {
    return authenticationConfiguration.getAuthenticationManager();
  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
        .exceptionHandling()
        .authenticationEntryPoint(unauthorizedHandler)
        .and()
        .authorizeHttpRequests()
        .requestMatchers(URLS_WITHOUT_AUTHENTICATION)
        .permitAll()
        .anyRequest()
        .authenticated()
        .and()
        .logout()
        .deleteCookies("token")
        .clearAuthentication(true)
        .logoutSuccessHandler(new HttpStatusReturningLogoutSuccessHandler(HttpStatus.OK))
        .permitAll();

    // CORS
    http.cors().and().csrf().disable();
    http.cors()
        .configurationSource(
            request -> {
              CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
              configuration.setAllowedOriginPatterns(
                  Arrays.asList("http://127.0.0.1:3000", "http://localhost:3000"));
              configuration.setAllowedMethods(List.of("*"));
              configuration.setAllowedHeaders(List.of("*"));
              configuration.setAllowCredentials(true);
              return configuration;
            });

    // Filters for authentication
    http.addFilterBefore(loginFilter(), UsernamePasswordAuthenticationFilter.class);
    http.addFilterBefore(jwtAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);

    return http.build();
  }

  private void loginFailureHandler(
      HttpServletRequest request, HttpServletResponse response, AuthenticationException exception)
      throws IOException {
    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
    response.setContentType("application/json");
    response.setCharacterEncoding("UTF-8");

    String message = "";

    ObjectMapper mapper = new ObjectMapper().registerModule(new JavaTimeModule());
    mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);

    if (exception instanceof BadCredentialsException) {
      message = "Bad credentials";
    } else if (exception instanceof DisabledException) {
      message = "User isn't enable";
    } else if (exception instanceof AuthenticationCredentialsNotFoundException) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
      message = mapper.readTree(exception.getMessage()).toString();
    } else {
      message = exception.getMessage();
    }
    response.setContentLength(message.length());
    response.getOutputStream().write(message.getBytes());
  }
}