const pool = require('../config/db');

class Raca
{
    static async create(raca) 
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

module.exports = Raca;