package com.bigoviw887.modulo.repos;

import com.bigoviw887.modulo.model.UserRole;
import java.util.List;
import java.util.Optional;
import javax.annotation.processing.Generated;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Generated(value = "com.exocoding.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@Repository
public interface UserRoleRepository
    extends JpaRepository<UserRole, Long>, JpaSpecificationExecutor<UserRole> {

  void deleteByRole(Long idRoleFk);

  void deleteByUser(Long idUserFk);

  List<UserRole> findByRole(Long idRoleFk);

  List<UserRole> findByUser(Long idUserFk);

  Optional<UserRole> findByRole_Name(String name);

  Optional<UserRole> findByRole_NameAndUser_IdUser(String name, Long idUser);
}
