## Documentation - goals-tracker-api

base url - [https://radiant-cove-36457.herokuapp.com/](https://radiant-cove-36457.herokuapp.com/)

## API Reference

#### Register a new user

```http
  POST /api/user
```
The body should contain

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your username |
| `name` | `string` | **Required**. Your name |
| `password` | `string` | **Required**. Your password |

#### Login

```http
  POST /api/user/login
```
The body should contain

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your username|
| `password` | `string` | **Required**. Your password |

#### GET GOAL(PRIVATE)
Get all the goals of the logged in user

```http
  GET /api/goals
```

#### POST GOAL(PRIVATE)

Post goal the database
```http
  POST /api/goals
```
The body should contain

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. Goal|

#### PUT GOAL(PRIVATE)

update a goal in the database
```http
  PUT /api/goals/:id
```
The body should contain

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. Goal|

#### Delete GOAL(PRIVATE)

delete a goal in the database
```http
  DELETE /api/goals/:id
```