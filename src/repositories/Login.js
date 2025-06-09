const pool = require('../config/db.js');

class Login
{
    static async create(login) 
    {
        const {email_login, senha} = login;
        const res = await pool.query
        (
            'INSERT INTO login (email_login, senha) VALUES ($1, $2) RETURNING *',[email_login, senha]
        );
        return res.rows[0];
    }

    static async read(email_login) 
    {
        const res = await pool.query
        (
            'SELECT id_login, senha FROM login WHERE email_login = $1',[email_login]
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

module.exports = Login;