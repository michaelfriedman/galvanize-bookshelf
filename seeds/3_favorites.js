/* eslint-disable strict */

'use strict';

// eslint-disable-next-line func-names
exports.seed = function (knex) {
  return knex('favorites').del()
  // eslint-disable-next-line arrow-body-style
    .then(() => {
      return knex('favorites').insert([{
        id: 1,
        book_id: 1,
        user_id: 1,
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC'),
      }]);
    })
    // eslint-disable-next-line arrow-body-style
    .then(() => {
      return knex.raw(
        // eslint-disable-next-line comma-dangle
        "SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites));"
      );
    });
};
