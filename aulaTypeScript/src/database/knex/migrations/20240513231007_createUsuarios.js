/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('usuarios', (table) => {
        table.increments('id');
        // será obrigatório que o usuário passe os campo nome, email e senha;
        table.text('nome').notNullable();
        table.text('email').notNullable();
        table.text('senha').notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    }).then(() => {
        console.log('Criando tabela de Usuários')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('usuarios')
    .then(() => {
        console.log('Deletado tabela de usuários')
    })
};
