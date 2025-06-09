CREATE DATABASE deumatchnopet;

CREATE TABLE login (
	id_login INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	email_login TEXT UNIQUE NOT NULL,
	senha TEXT NOT NULL
);

CREATE TABLE doador (
	id_doador INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	nome TEXT NOT NULL,
	telefone TEXT NOT NULL,
	cep TEXT NOT NULL,
	numero TEXT NOT NULL,
	email_contato TEXT NOT NULL,
	foto TEXT NULL,
	id_login INT NOT NULL REFERENCES login(id_login) ON DELETE CASCADE
);

CREATE TABLE especie (
	id_especie INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	nome_especie TEXT UNIQUE NOT NULL
);

CREATE TABLE raca (
	id_raca INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	nome_raca TEXT UNIQUE NOT NULL
);

CREATE TYPE status_animal AS ENUM 
('disponivel', 'indisponivel');

CREATE TABLE animal (
	id_animal INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	nome TEXT NOT NULL,
	data_nasc DATE NOT NULL,
	comportamento TEXT NOT NULL,
	estado_saude TEXT NOT NULL,
	porte TEXT NOT NULL,
	status status_animal NOT NULL,
	descricao TEXT NOT NULL,
	foto TEXT NOT NULL,
	id_doador INT NOT NULL REFERENCES doador(id_doador) ON DELETE CASCADE,
	id_especie INT NOT NULL REFERENCES especie(id_especie) ON DELETE CASCADE,
	id_raca INT NOT NULL REFERENCES raca(id_raca) ON DELETE CASCADE
);



