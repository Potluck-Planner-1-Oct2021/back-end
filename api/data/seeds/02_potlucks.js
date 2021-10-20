
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('potlucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('potlucks').insert([
        {
          potluck_name: 'rowValue1',
          date: '9-30-2021',
          time: '12:00:00',
          user_id: 1,
          location: 'U.S.A'
        },
        {
          potluck_name: 'rowValue2',
          date: '10-30-2021',
          time: '13:00:00',
          user_id: 1,
          location: 'U.S.A'
        },
        {
          potluck_name: 'rowValue3',
          date: '10-30-2021',
          time: '13:00:00',
          user_id: 1,
          location: 'U.S.A'
        }
      ]);
    });
};
