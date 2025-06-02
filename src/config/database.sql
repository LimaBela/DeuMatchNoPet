CREATE DATABASE deumatchnopet;

CREATE TABLE doador (
	idDoador INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	nome TEXT NOT NULL,
	telefone TEXT NOT NULL,
	CEP TEXT NOT NULL,
	numero TEXT NOT NULL,
	email TEXT NOT NULL,
	foto TEXT NULL
	emailLogin INT REFERENCES login(emailLogin)
);

CREATE TABLE login (
	emailLogin TEXT PRIMARY KEY NOT NULL,
	senha TEXT NOT NULL,
);

CREATE TABLE especie (
	nomeEspecie TEXT PRIMARY KEY NOT NULL
);

CREATE TABLE raca (
	nomeRaca TEXT PRIMARY KEY NOT NULL
);

CREATE TYPE status_animal AS ENUM 
('disponivel', 'indisponivel');

CREATE TABLE animal (
	idAnimal INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	nome TEXT NOT NULL,
	dataNasc DATE NOT NULL,
	comportamento TEXT NOT NULL,
	estadoSaude TEXT NOT NULL,
	porte TEXT NOT NULL,
	status status_animal NOT NULL,
	descricao TEXT NOT NULL,
	foto TEXT NOT NULL,
	doador_id INT REFERENCES doador(idDoador),
	nomeEspecie TEXT REFERENCES especie(nomeEspecie),
	nomeRaca TEXT REFERENCES raca(nomeRaca)
);



