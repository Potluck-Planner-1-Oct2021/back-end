exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{ username: 'ehsan', password: '1234', email: 'ehsan@gmail.com' }]);
    });
};
