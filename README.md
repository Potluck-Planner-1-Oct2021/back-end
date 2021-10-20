#### Endpoints
- ` https://potluckaapi.herokuapp.com


Authentication will be implemented using JSON Web Tokens.

### user endpoints

- to register a new account requires the following:

  - [1] username
  - [2] password

- to sign/login into account requires the following:

  - [1] username
  - [2] password

- [ ] to register a new account use `[POST] method` to the following address
- ` https://potluckaapi.herokuapp.com/api/users/register`
  example : on postman => Select Body - chose raw and change where it said text to JSON

```
{
    "username":"tomm",
    "password":"123123"
}
```

### a successful respose will look like this ,depending on entering email since email is not required

```
{
    "username": "tomm"
}
```

- [ ] to sign in to the created account use `[POST] method` to the following address
- ` https://potluckaapi.herokuapp.com/api/auth/login`

### a successful respose will send bad a token and respose will look like the following:

```
  {
    "message": "welcome tomm!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6ImppbSIsImlhdCI6MTYzNDcxMTgxNiwiZXhwIjoxNjM0Nzk4MjE2fQ.0uSh0MFO62mAtO4yffRO3WsbEVpnrmL-jRgEmkXFN6c"
}
```

## to search for specific user `

- [ ] `[GET] /api/users/ username`

- Returns an array of users as the body of the response.
- - exmaple: http://localhost:5000/api/users/ehsan
```
[
   "ehsan"
]
```




### potluck endpoints
this will require token to be sent to the backend 


[ ] `[GET] /api/potlucks`
will return an array of potlucks
http://localhost:5000/api/potlucks
```
[
    {
        "potluck_id": 1,
        "potluck_name": "rowValue1",
        "date": "2021-09-30T07:00:00.000Z",
        "time": "12:00:00",
        "location": "U.S.A",
        "user_id": 1
    },
    {
        "potluck_id": 2,
        "potluck_name": "rowValue2",
        "date": "2021-10-30T07:00:00.000Z",
        "time": "13:00:00",
        "location": "U.S.A",
        "user_id": 1
    },
]
```
[ ] `[GET] /api/potluck /:potluck_id`

- - Returns a object containing single putlock of given id
```
http://localhost:5000/api/potlucks/1
{
    "potluck_id": 1,
    "potluck_name": "rowValue1",
    "date": "2021-09-30T07:00:00.000Z",
    "time": "12:00:00",
    "location": "U.S.A",
    "foods": [
        {
            "food_name": "spaghetti"
        },
        {
            "food_name": "hamberger"
        }
    ],
    "guests": [
        {
            "username": "ehsan",
            "food_name": "spaghetti",
            "accepted": false,
            "guest_id": 1,
            "potluck_food_id": 1
        },
        {
            "username": "ehsan",
            "food_name": "hamberger",
            "accepted": false,
            "guest_id": 2,
            "potluck_food_id": 2
        }
    ]
}
```



- [ ] `[POST] /api/potlucks/`
the token needs to be sent to the sever fo this to work
  - Returns the newly created project as the body of the response.

```
postman example ==>
http://localhost:5000/api/potlucks/
{
    "potluck_name": "rowValue2",
        "date": "2021-10-30T07:00:00.000Z",
        "time": "13:00:00",
        "location": "U.S.A",
         "guests": ["guest 1", "guest 2"],
        "foods": ["food 1", "foood 2"]
        
}

```

```
 response would be
{
    "potluck_name": "rowValue2",
    "date": "2021-10-30T07:00:00.000Z",
    "time": "13:00:00",
    "location": "U.S.A",
    "potluck_id": 5,
    "user_id": 3
}
```

`[DELETE] /api/potlucks /:potluck_id`

- Will delete a putlock with given id and will return
- the deleted putlock as the response


```
exmaple on post man    ===> http://localhost:5000/api/potlucks/1
{
    "potluck_name": "rowValue2",
        "date": "2021-10-30T07:00:00.000Z",
        "time": "13:00:00",
        "location": "U.S.A",
         "guests": ["guest 1", "guest 2"],
        "foods": ["food 1", "foood 2"]
        
}
```

```
response
{
    "potluck_id": 4,
    "potluck_name": "rowValue2",
    "date": "2021-10-30T07:00:00.000Z",
    "time": "13:00:00",
    "location": "U.S.A",
    "user_id": 3
}

```

### foods endpoints 


`[GET] /api/foods`
will return a list (array) of all the available foods
example:  http://localhost:5000/api/foods/

```
response

[
    {
        "food_id": 1,
        "food_name": "spaghetti"
    },
    {
        "food_id": 2,
        "food_name": "hamberger"
    }
]
```





`[GET] /api/foods/foodName`

will return a list (array) of a single food that have been serched 
 if the food does not exist, it will return empty array
-- example: http://localhost:5000/api/foods/spaghetti
```
response

[
    {
        "food_id": 1,
        "food_name": "spaghetti"
    }
]
```



### guests endpoints 
still workin on it 
`[put] /api/guests/guest_id`

for now it returns 

```
{
    "message": "guest does not exist"
}
```


#### Users table

| field    | data type        | metadata                                      |
| :------- | :--------------- | :-------------------------------------------- |
| user_id  | unsigned integer | primary key, auto-increments, generated by db |
| username | string           | required, unique                              |
| password | string           | required                                      |


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
| user_id         | integer          | required                     |
| accepted        | boolean          | defaultTo(false)             |
