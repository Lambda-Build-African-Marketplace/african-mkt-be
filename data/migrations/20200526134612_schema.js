
exports.up = function(knex) {
    return knex.schema
      .createTable('user', tbl => {
          tbl.increments()
          tbl
              .string('username').unique().notNullable()
          tbl
              .string('password').notNullable()
          tbl
              .string('email').notNullable().unique()
          tbl
              .string('about')
          tbl
              .string('store_name').notNullable()
      })
      .createTable('item', tbl => {
          tbl.increments()
          tbl
              .string('name').notNullable()
          tbl
              .string('description')
          tbl
              .string('city')
          tbl
              .string('country')
          tbl
              .float('price').notNullable()
          tbl
              .string('photo_url').defaultTo('https://um-insight.net/downloads/2294/download/africa-outline-hi.png?cb=c3ae26612c9e50a57beca7f3ed64950a&w=540&h=')

          tbl.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now())

          tbl
              .integer('user_id')
              .notNullable()
              .unsigned()
              .references('id')
              .inTable('user')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
      })
      .createTable('user_item', tbl => {
          tbl.increments()
          tbl.integer('item_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('item')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
          tbl.integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('user')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
          tbl.unique(['user_id', 'item_id'])
      })
      .createTable('category', tbl => {
          tbl.increments()
          tbl
              .string('type').notNullable()
          tbl
              .integer('item_id')
              .notNullable()
              .unsigned()
              .references('id')
              .inTable('item')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('category')
      .dropTableIfExists('user_item')
      .dropTableIfExists('item')
      .dropTableIfExists('user')
  };
  