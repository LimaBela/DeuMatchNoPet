const pool = require('../config/db');

class Animal
{
    static async create(animal) 
    {
        const {nome, dataNasc, comportamento, estadoSaude, porte, status, descricao, foto, doador_id, nomeEspecie, nomeRaca} = animal;
        const res = await pool.query
        (
            'INSERT INTO animal (nome, dataNasc, comportamento, estadoSaude, porte, status, descricao, foto, doador_id, nomeEspecie, nomeRaca) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
            [nome, dataNasc, comportamento, estadoSaude, porte, status, descricao, foto, doador_id, nomeEspecie, nomeRaca]
        );
        return res.rows[0];
    }
    
}

module.exports = Animal;