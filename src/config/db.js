require('dotenv').config();
const { Pool} = require('pg');

const pool = new Pool ({
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME 
});

const initDatabase =  async () => {
    // const db = await pool.connect();
    // const client = await pool.connect();
    // try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                descricao TEXT NOT NULL,
                ano_inicio INT NOT NULL,
                ano_fim INT
            );
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS experiencias (
            id INT PRIMARY KEY,
            titulo VARCHAR(255) NOT NULL,
            link VARCHAR(255) NOT NULL,
            imagem VARCHAR(255) NOT NULL
        );
    `);	

    await pool.query(`
        CREATE TABLE IF NOT EXISTS portfolio (
            id SERIAL PRIMARY KEY,
            titulo VARCHAR(255) NOT NULL,
            link VARCHAR(255) NOT NULL,
            imagem VARCHAR(255) NOT NULL
        );
    `);
    
    await pool.query(`
        CREATE TABLE IF NOT EXISTS informacoes (
            id SERIAL PRIMARY KEY,
            foto VARCHAR(255) NOT NULL,
            nome VARCHAR(255) NOT NULL,
            cargo VARCHAR(255) NOT NULL,
            resumo TEXT NOT NULL
            
        );
    `);

     await pool.query(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INT PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );

        // INSERT INTO usuarios (id, email, password)
        // VALUES (1, 'teste@email.com', 'teste@123');

        // UPDATE usuarios SET 
        // (email, password) = (''teste@email.com','teste@123') 
        // WHERE id = 1;
     `);

    console.log('Banco de dados inicializado com sucesso');
    
// } catch (error) {
//     console.log(error);
// } finally {
//     db.release();
}

module.exports = { pool, initDatabase };
