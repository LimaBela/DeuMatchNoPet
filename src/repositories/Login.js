const pool = require('../config/db.js');

class Login
{
    static async create(login) 
    {
        const {emailLogin, senha} = login;
        const res = await pool.query
        (
            'INSERT INTO login (emailLogin, senha) VALUES ($1, $2) RETURNING *',
            [emailLogin, senha]
        );
        return res.rows[0];
    }

    static async read(login) 
    {
        const {emailLogin} = login;
        const res = await pool.query
        (
            'SELECT * FROM login WHERE emailLogin = $1',[emailLogin]
        );
        return res.rows[0];
    }
    
}

module.exports = Login;