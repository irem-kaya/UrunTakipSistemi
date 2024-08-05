package com.example.demo.Entity;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String username;
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;
    private String password;

}