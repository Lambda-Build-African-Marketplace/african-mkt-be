
exports.up = function(knex) {
    return knex.schema
      .createTable('user', tbl => {
          tbl.increments('id')
          tbl
              .string('username').unique()
          tbl
              .string('password').notNullable()
          tbl
              .string('email').notNullable().unique()
          tbl
              .string('about')
          tbl
              .string('store_name').unique()
      })
      .createTable('category', tbl => {
        tbl.increments('id')
        tbl
            .string('type').notNullable().unique()
    })
      .createTable('item', tbl => {
          tbl.increments('id')
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
              .integer('category_id')
              .unsigned()
              .references('id')
              .inTable('category')
              .onDelete('SET NULL')
              .onUpdate('CASCADE')
      })
      .createTable('user_item', tbl => {
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
          tbl.primary(['item_id', 'user_id'])
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('user_item')
      .dropTableIfExists('item')
      .dropTableIfExists('category')
      .dropTableIfExists('user')
  };
  