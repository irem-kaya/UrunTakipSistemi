package com.example.demo.Controller;

import com.example.demo.Entity.Product;
import com.example.demo.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();
        logger.info("Retrieved products: {}", products);
        return products;
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        Product product = productRepository.findById(id).orElse(null);
        logger.info("Retrieved product by id {}: {}", id, product);
        return product;
    }
}