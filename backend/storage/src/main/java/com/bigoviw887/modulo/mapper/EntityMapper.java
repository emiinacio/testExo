package com.bigoviw887.modulo.mapper;

import com.bigoviw887.modulo.model.AbstractEntity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import javax.annotation.processing.Generated;
import org.mapstruct.TargetType;
import org.springframework.stereotype.Component;

@Generated(value = "com.exocoding.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@Component
public abstract class EntityMapper {

  @PersistenceContext private EntityManager entityManager;

  /**
   * Searches the persistence context for an entity with a given Id. If none is found, then a proxy
   * for the given entity is returned.
   *
   * @param id Id of entity class.
   * @param type Type of entity class.
   * @return the entity object.
   */
  public <T extends AbstractEntity> T entityFromId(Object id, @TargetType Class<T> type) {
    if (id == null) {
      return null;
    }
    T entity = entityManager.find(type, id);
    if (entity != null) {
      return entity;
    }
    return entityManager.getReference(type, id);
  }
}
