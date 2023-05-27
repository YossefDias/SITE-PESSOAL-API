const { pool } = require('../config/db');

exports.getAllExperiencias = async () => {
    // const db = await pool.connect();
    // try {
        const result = await pool.query('SELECT * FROM experiencias');
        return result.rows;
    // } catch (error) {
    //     console.log(error);
    //     return [];
    // } finally {
    //     db.release();
    // }
}

exports.getAllExperienciaById = async (id) => {
    const result = await pool.query('SELECT * FROM experiencias WHERE id =$1',[id]);
    return result.rows[0];
}

exports.createExperiencia = async (experiencia) => {
    const result = await pool.query(`
    INSERT INTO experiencias (titulo,tipo, descricao, ano_inicio,ano_fim)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `,

    [experiencia.titulo,experiencia.tipo,experiencia.descricao,experiencia.ano_inicio,experiencia.ano_fim]);
    return result.rowns[0];
}

exports.updateExperiencia = async (id,experiencia) => {
    const result = await pool.query(`
    UPDATE experiencias
    SET titulo = $1, tipo = $2, descricao = $3, ano_inicio = $4, ano_fim = $5
    WHERE id = $6
    RETURNING *
    `,
    [experiencia.titulo, experiencia.tipo, experiencia.descricao, experiencia.ano_inicio, experiencia.ano_fim]);
    return  result.rowns[0];
    
}

exports.deleteExperiencia = async (id) => {
    await pool.query('DELETE FROM experiencias WHERE id = $1', [id]);
}

