package com.bigoviw887.modulo.repos;

import com.bigoviw887.modulo.model.Role;
import java.util.Optional;
import javax.annotation.processing.Generated;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Generated(value = "com.exocoding.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@Repository
public interface RoleRepository extends JpaRepository<Role, Long>, JpaSpecificationExecutor<Role> {

  boolean existsByName(String name);

  Optional<Role> findByName(String name);
}
