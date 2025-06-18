const pool = require('../config/db');

class Raca
{
    static async create(raca) 
    {
        const {nome_raca} = raca;
        const res = await pool.query
        (
            'INSERT INTO raca (nome_raca) VALUES ($1) RETURNING *',
            [nome_raca]
        );
        return res.rows[0];
    }

     static async readById(id_raca) 
    {
        const res = await pool.query
        (
            'SELECT * FROM raca WHERE id_raca = $1',[id_raca]
        );
        return res.rows[0];
    }

    static async readByName(nome_raca) 
    {
        const res = await pool.query
        (
            'SELECT * FROM raca WHERE nome_raca ILIKE $1',[nome_raca]
        );
        return res.rows[0];
    }

    static async read()
    {
        const res = await pool.query
        (
            'SELECT * FROM raca'
        );
        return res.rows;
    }
}

module.exports = Raca;