const pool = require('../config/db.js');

class Raca
{
    static async criar(raca) 
    {
        const {nomeRaca} = raca;
        const res = await pool.query
        (
            'INSERT INTO raca (nomeRaca) VALUES ($1) RETURNING *',
            [nomeRaca]
        );
        return res.rows[0];
    }
    
}