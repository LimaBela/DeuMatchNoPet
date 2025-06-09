const pool = require('../config/db');

class Doador
{
    static async create(doador) 
    {
        const {nome, cep, numero, telefone, email_contato, foto, id_login} = doador;
        const res = await pool.query
        (
            'INSERT INTO doador (nome, cep, numero, telefone, email_contato, foto, id_login) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [nome, cep, numero, telefone, email_contato, foto, id_login]
        );
        return res.rows[0];
    }
    
    static async readById(id_doador) 
    {
        const res = await pool.query
        (
            'SELECT * FROM doador WHERE id_doador = $1',[id_doador]
        );
        return res.rows[0];
    }

    static async readByName(nome) 
    {
        const res = await pool.query
        (
            'SELECT * FROM doador WHERE nome ILIKE $1',[nome]
        );
        return res.rows[0];
    }

    static async update(login)
    {
        const {email_antigo, email_login, senha} = login;
        const res = await pool.query
        (
            'UPDATE login SET email_login = $2, senha = $3 WHERE email_login = $1', [email_antigo, email_login, senha]
        );
        return res.rowCount > 0;
    }

    static async delete(email_login)
    {
        const res = await pool.query
        (
            'DELETE FROM login WHERE email_login = $1',[email_login]
        );
        return res.rowCount > 0;
    }
}

module.exports = Doador;