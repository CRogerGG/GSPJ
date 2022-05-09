CREATE DATABASE dbjudicialdr

CREATE TABLE persona (
    id_persona int NOT NULL AUTO_INCREMENT,
    nombre varchar(100) NOT NULL,
    apaterno varchar(50) NOT NULL,
    amaterno varchar(50) NOT NULL,
    domicilio varchar(100) NOT NULL,
    ciudad varchar(50) NOT NULL,
    estado varchar(50) NOT NULL,
    fecha_nacimiento date NOT NULL,
    tel_fijo int(10),
    tel_celular int(10),
    email varchar(100),
    curp varchar(18),
    nacionalidad varchar(50),
     PRIMARY KEY(id_persona)
);

CREATE TABLE cliente (
    id int NOT NULL AUTO_INCREMENT,
    id_persona int NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_persona) REFERENCES persona(id_persona)
);

CREATE TABLE adversario (
    id int NOT NULL AUTO_INCREMENT,
    id_persona int NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_persona) REFERENCES persona(id_persona)
);

CREATE TABLE abogado (
    id int NOT NULL AUTO_INCREMENT,
    id_persona int NOT NULL,
    categoria varchar(50),
    PRIMARY KEY(id),
    FOREIGN KEY(id_persona) REFERENCES persona(id_persona)
);

CREATE TABLE usuario (
    id_usuario int NOT NULL AUTO_INCREMENT,
    login varchar(100) NOT NULL UNIQUE,
    pass varchar(100) NOT NULL,
    tipo_usuario tinyint NOT NULL,
    estado tinyint NOT NULL,
    id_persona int NOT NULL,
    PRIMARY KEY(id_usuario),
    FOREIGN KEY(id_persona) REFERENCES abogado(id_persona)
);

CREATE TABLE expediente (
    folio varchar(100) NOT NULL UNIQUE,
    estado tinyint NOT NULL,
    exp_relacionado varchar(100),
    PRIMARY KEY(folio)
);

CREATE TABLE tiene (
    id int NOT NULL AUTO_INCREMENT,
    folio varchar(100) NOT NULL,
    id_persona int NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(folio) REFERENCES expediente(folio),
    FOREIGN KEY(id_persona) REFERENCES cliente(id_persona)
);

CREATE TABLE caso (
    id_caso int NOT NULL AUTO_INCREMENT,
    asunto varchar(100) NOT NULL,
    apoderado varchar(200) NOT NULL,
    descripcion text NOT NULL,
    PRIMARY KEY(id_caso)
);

CREATE TABLE enfrenta (
    id int NOT NULL AUTO_INCREMENT,
    id_caso int NOT NULL,
    id_persona int NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_caso) REFERENCES caso(id_caso),
    FOREIGN KEY(id_persona) REFERENCES adversario(id_persona)
);

CREATE TABLE incluye (
    id int NOT NULL AUTO_INCREMENT,
    fecha_inicial date NOT NULL,
    fecha_cierre date,
    motivo_cierre text,
    folio varchar(100) NOT NULL,
    id_caso int NOT NULL,
    FOREIGN KEY(folio) REFERENCES expediente(folio),
    FOREIGN KEY(id_caso) REFERENCES caso(id_caso)
);

CREATE TABLE penal (
    id int NOT NULL AUTO_INCREMENT,
    id_caso int NOT NULL,
    mesa varchar(100),
    agencia varchar(100),
    PRIMARY KEY(id),
    FOREIGN KEY(id_caso) REFERENCES caso(id_caso)
);

CREATE TABLE civil (
    id int NOT NULL AUTO_INCREMENT,
    id_caso int NOT NULL,
    tipo_proceso varchar(100),
    juzgado varchar(100),
    PRIMARY KEY(id),
    FOREIGN KEY(id_caso) REFERENCES caso(id_caso)
);

CREATE TABLE acto (
    id_acto int NOT NULL AUTO_INCREMENT,
    fecha datetime NOT NULL,
    tipo varchar(100) NOT NULL,
    descripcion text NOT NULL,
    id_penal int,
    id_civil int,
    PRIMARY KEY(id_acto)
);

CREATE TABLE documento (
    id_documento int NOT NULL AUTO_INCREMENT,
    ruta varchar(255) NOT NULL,
    id_acto int NOT NULL,
    FOREIGN KEY(id_acto) REFERENCES acto(id_acto)
);

CREATE TABLE consta (
    id_consta int NOT NULL AUTO_INCREMENT,
    id int NOT NULL,
    id_acto int NOT NULL,
    FOREIGN KEY(id) REFERENCES penal(id),
    FOREIGN KEY(id_acto) REFERENCES acto(id_acto)
);

CREATE TABLE contiene (
    id_contiene int NOT NULL AUTO_INCREMENT,
    id int NOT NULL,
    id_acto int NOT NULL,
    FOREIGN KEY(id) REFERENCES civil(id),
    FOREIGN KEY(id_acto) REFERENCES acto(id_acto)
);