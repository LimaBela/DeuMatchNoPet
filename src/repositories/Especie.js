const pool = require('../config/db.js');

class Especie
{
    static async create(especie) 
    {
        const {nome_especie} = especie;
        const res = await pool.query
        (
            'INSERT INTO especie (nome_especie) VALUES ($1) RETURNING *',
            [nome_especie]
        );
        return res.rows[0];
    }

    static async readById(id_especie) 
    {
        const res = await pool.query
        (
            'SELECT * FROM especie WHERE id_especie = $1',[id_especie]
        );
        return res.rows[0];
    }

    static async readByName(nome_especie) 
    {
        const res = await pool.query
        (
            'SELECT * FROM especie WHERE nome_especie ILIKE $1',[nome_especie]
        );
        return res.rows[0];
    }

    static async read()
    {
        const res = await pool.query
        (
            'SELECT * FROM especie'
        );
        return res.rows;
    }
}

module.exports = Especie;