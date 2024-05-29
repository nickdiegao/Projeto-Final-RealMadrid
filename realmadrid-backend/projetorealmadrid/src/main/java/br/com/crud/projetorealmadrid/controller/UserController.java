package br.com.crud.projetorealmadrid.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.crud.projetorealmadrid.Model.UserModel;
import br.com.crud.projetorealmadrid.repositories.UserRepositories;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/bd")
public class UserController {
    @Autowired
    UserRepositories userRepositories;

    @PostMapping(path = "/usuarios")
    public ResponseEntity<UserModel> criarUsuario(
        @RequestBody UserModel usuario) {
            UserModel _UserModel = userRepositories.save(usuario);
            return new ResponseEntity<>(_UserModel, HttpStatus.CREATED);
        }
}
