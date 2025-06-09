const pool = require('../config/db');

class Animal
{
    static async create(animal) 
    {
        const {nome, data_nasc, comportamento, estado_saude, porte, status, descricao, foto, id_doador, id_especie, id_raca} = animal;
        const res = await pool.query
        (
            'INSERT INTO animal (nome, data_nasc, comportamento, estado_saude, porte, status, descricao, foto, id_doador, id_especie, id_raca) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
            [nome, data_nasc, comportamento, estado_saude, porte, status, descricao, foto, id_doador, id_especie, id_raca]
        );
        return res.rows[0];
    }
}

module.exports = Animal;