package com.bigoviw887.modulo.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.LinkedList;
import java.util.List;
import javax.annotation.processing.Generated;
import lombok.Data;

/** ... */
@Generated(value = "com.exocoding.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@Data
@Entity
@Table
public class Role extends AbstractEntity {

  @Column(nullable = false)
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  protected Long idRole;

  // relationship between role and UserRole
  @OneToMany(
      mappedBy = "role",
      cascade = {CascadeType.PERSIST},
      fetch = FetchType.LAZY,
      orphanRemoval = true)
  protected List<UserRole> userRole = new LinkedList<>();

  // relationship between role and RolePermission
  @OneToMany(mappedBy = "role", fetch = FetchType.LAZY, orphanRemoval = true)
  protected List<RolePermission> rolePermission = new LinkedList<>();

  @Column(nullable = false)
  protected String name;

  public void addRolePermission(RolePermission rolePermission) {
    this.rolePermission.add(rolePermission);
    rolePermission.setRole(this);
  }

  public void addUserRole(UserRole userRole) {
    this.userRole.add(userRole);
    userRole.setRole(this);
  }

  public void removeRolePermission(RolePermission rolePermission) {
    this.rolePermission.remove(rolePermission);
    rolePermission.setRole(null);
  }

  public void removeUserRole(UserRole userRole) {
    this.userRole.remove(userRole);
    userRole.setRole(null);
  }

  public void setRolePermission(List<RolePermission> rolePermission) {
    if (this.rolePermission != null) {
      this.rolePermission.forEach(z -> z.setRole(null));
    }
    if (rolePermission != null) {
      rolePermission.forEach(z -> z.setRole(this));
    }
    this.rolePermission = rolePermission;
  }

  public void setUserRole(List<UserRole> userRole) {
    if (this.userRole != null) {
      this.userRole.forEach(z -> z.setRole(null));
    }
    if (userRole != null) {
      userRole.forEach(z -> z.setRole(this));
    }
    this.userRole = userRole;
  }
}