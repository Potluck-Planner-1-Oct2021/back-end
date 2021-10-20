exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        { username: 'ehsan', password: '1234', email: 'ehsan@gmail.com' },
        { username: 'tom', password: '1234', email: 'tom@gmail.com' },
      ]);
    });
};


