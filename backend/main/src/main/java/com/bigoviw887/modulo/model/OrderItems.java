package com.bigoviw887.modulo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import javax.annotation.processing.Generated;
import lombok.Data;

/** Order_Items */
@Generated(value = "com.exocoding.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@Data
@Entity
@Table(name = "Order_Items")
public class OrderItems extends AbstractEntity {

  @Column(name = "order_item_id", nullable = false)
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  protected Long orderItemId;

  // products_order_items
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "product_id", referencedColumnName = "product_id", nullable = false)
  protected Products products;

  // orders_order_items
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "order_id", referencedColumnName = "order_id", nullable = false)
  protected Orders orders;

  @Column(nullable = false)
  protected Integer quantity;
}