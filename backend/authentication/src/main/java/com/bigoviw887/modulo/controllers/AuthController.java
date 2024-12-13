package com.bigoviw887.modulo.controllers;

import com.bigoviw887.modulo.dto.AccountDto;
import com.bigoviw887.modulo.dto.UserRegisterDto;
import com.bigoviw887.modulo.mapper.AccountMapper;
import com.bigoviw887.modulo.mapper.UserLoginMapper;
import com.bigoviw887.modulo.mapper.UserRegisterMapper;
import com.bigoviw887.modulo.schema.AccountSchema;
import com.bigoviw887.modulo.schema.UserRegisterSchema;
import com.bigoviw887.modulo.services.AuthService;
import javax.annotation.processing.Generated;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/** User Authentication */
@Generated(value = "com.exocoding.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@RestController
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class AuthController {
  @Autowired private AccountMapper accountMapper;
  private final AuthService authService;
  private final UserLoginMapper userLoginMapper;
  private final UserRegisterMapper userRegisterMapper;

  @PostMapping(path = "/signup")
  protected void signup(@RequestBody UserRegisterSchema userSignup) {
    UserRegisterDto user = userRegisterMapper.schemaToDto(userSignup);
    authService.createUser(user);
  }

  @GetMapping(path = "/account")
  protected AccountSchema account() {
    AccountDto accountDto = authService.getCurrentUser();
    return accountMapper.dtoToSchema(accountDto);
  }

  @PostMapping(path = "/roles")
  @PreAuthorize("'superadmin' == authentication.principal.username")
  protected void createRoles(@RequestParam("role") String roleName) {
    authService.createRole(roleName);
  }

  @PutMapping(path = "/user/{userId}/roles")
  @PreAuthorize("'superadmin' == authentication.principal.username")
  protected void updateUserRole(
      @PathVariable("userId") Long userId, @RequestParam("role") String roleName) {
    authService.updateUserRoles(userId, roleName);
  }

  @DeleteMapping(path = "/user/{userId}/roles")
  @PreAuthorize("'superadmin' == authentication.principal.username")
  protected void deleteUserRole(
      @PathVariable("userId") Long userId, @RequestParam("role") String roleName) {
    authService.removeUserRoles(userId, roleName);
  }
}
