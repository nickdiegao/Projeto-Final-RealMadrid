package br.com.crud.projetorealmadrid.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.crud.projetorealmadrid.Model.UserModel;

public interface UserRepositories extends JpaRepository<UserModel, Long>{
    
}
