package com.example.demo.Entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
@Data
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    @JsonBackReference
    private Category category;

    private String name;
    private BigDecimal price;
    private String explanation;

    // getters and setters
}