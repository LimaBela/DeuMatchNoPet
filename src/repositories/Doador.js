const pool = require('../config/db');

class Doador
{
    static async create(doador) 
    {
        const {nome, cep, numero, telefone, emailContato, foto, emailLogin} = doador;
        const res = await pool.query
        (
            'INSERT INTO doador (nome, cep, numero, telefone, emailContato, foto, emailLogin) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [nome, cep, numero, telefone, emailContato, foto, emailLogin]
        );
        return res.rows[0];
    }
    
}

module.exports = Doador;