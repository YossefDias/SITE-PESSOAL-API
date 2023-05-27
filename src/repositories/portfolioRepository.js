const { pool } = require('../config/db');

exports.getPortfolio = async () => {
    const result = await pool.query('SELECT * FROM portfolio');
    return result.rows;
}

exports.getProjetoById = async (id) => {
    const result = await pool.query('SELECT * FROM portfolio WHERE id = $1', [id]);
    return result.rows[0];
}

exports.createProjeto = async (projeto) => {
    const result = await pool.query(`
        INSERT INTO portfolio (titulo, descricao, link, imagem)
        VALUES ($1, $2, $3, $4)
        RETURNING *    
    `, [projeto.titulo, projeto.link, projeto.imagem]);
    return result.rows[0];    
}

exports.updateProjeto = async (id,projeto) => {
    const result = await pool.query(`
        UPDATE portfolio
        SET titulo = $1, link = $2, imagem = $3
        WHERE id = $4
        RETURNING *
        
        `, [projeto.titulo, projeto.link, projeto.imagem, id]);
        return result.rows [0];
}

exports.deleteProjeto = async (id) => {
    await pool.query('DELETE FROM portfolio WHERE id = $1', [id]);
}