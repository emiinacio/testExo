package com.bigoviw887.modulo.repos;

import com.bigoviw887.modulo.model.Products;
import javax.annotation.processing.Generated;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Generated(value = "com.exocoding.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@Repository
public interface ProductsRepository
    extends JpaRepository<Products, Long>, JpaSpecificationExecutor<Products> {}
