#### Endpoints

Authentication will be implemented using JSON Web Tokens.

- to register a new account requires the following:
  - [1] username
  - [2] password
  - [3] email
- to sign/login into account requires the following:

  - [1] username
  - [2] password

- [ ] to register a new account use `[POST] method` to the following address
- ` https://potluckaapi.herokuapp.com/api/auth/register`
- [ ] to sign in to the created account use `[POST] method` to the following address
- ` https://potluckaapi.herokuapp.com/api/auth/login`

- [ ] to see all the users use `[GET]` to the following address you will get an array with all the users and thier information in it
- ` https://potluckaapi.herokuapp.com/api/users`

#### Users table

| field    | data type        | metadata                                      |
| :------- | :--------------- | :-------------------------------------------- |
| user_id  | unsigned integer | primary key, auto-increments, generated by db |
| username | string           | required, unique                              |
| password | string           | required                                      |
| email    | string           | not required ,unique                          |

#### potlucks table

| field        | data type        | metadata                                      |
| :----------- | :--------------- | :-------------------------------------------- |
| potluck_id   | unsigned integer | primary key, auto-increments, generated by db |
| potluck_name | string           | required                                      |
| date         | date             | required                                      |
| time         | time             | required                                      |
| location     | string           | required                                      |
| user_id      | integer          | required                                      |

#### foods table

| field     | data type        | metadata                                      |
| :-------- | :--------------- | :-------------------------------------------- |
| food_id   | unsigned integer | primary key, auto-increments, generated by db |
| food_name | string           | required                                      |

#### potluck_foods table

| field           | data type        | metadata                     |
| :-------------- | :--------------- | :--------------------------- |
| potluck_food_id | unsigned integer | primary key, generated by db |
| potluck_id      | integer          | required                     |
| food_id         | integer          | required                     |

#### guests table

| field           | data type        | metadata                     |
| :-------------- | :--------------- | :--------------------------- |
| guest_id        | unsigned integer | primary key, generated by db |
| potluck_id      | integer          | required                     |
| potluck_food_id | integer          | required                     |
| user_id         | integer          | not required ,unique         |
| accepted        | boolean          | defaultTo(false)             |
