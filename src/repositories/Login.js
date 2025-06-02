const pool = require('../config/db.js');

class Login
{
    static async criar(login) 
    {
        const {emailLogin, senha} = login;
        const res = await pool.query
        (
            'INSERT INTO login (emailLogin, senha) VALUES ($1, $2) RETURNING *',
            [emailLogin, senha]
        );
        return res.rows[0];
    }
    
}