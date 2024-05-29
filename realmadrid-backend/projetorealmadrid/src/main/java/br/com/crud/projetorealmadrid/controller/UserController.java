package br.com.crud.projetorealmadrid.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    
    @GetMapping("/listar")
    public ResponseEntity<List<UserModel>> getAllUsuarios(@RequestParam(required = false) String param) {
        List<UserModel> usuarios = userRepositories.findAll();
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteUsuario(@PathVariable("id") long id){
        userRepositories.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/pegar/{id}")
    public ResponseEntity getUsuario(@PathVariable("id") long id) {
        Optional<UserModel> usuario = userRepositories.findById(id);
        return new ResponseEntity<>(usuario, HttpStatus.OK);
    }
}
