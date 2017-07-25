# mongodb-crud
Untuk latihan membuat crud dengan mongodb

# REST API
List of basic routes:

| Route                | HTTP   | Description                         |
|----------------------|:------:|------------------------------------:|
| ```/api/books```     | GET    | Get all the books                   |
| ```/api/books/:id``` | GET    | Get a single book                   |
| ```/api/books```     | POST   | Create a new book                   |
| ```/api/books/:id``` | DELETE | Delete specified book               |
| ```/api/books/:id``` | PUT    | Update specified book with new info |

# USAGE
```
npm init
npm install --save express
npm install --save body-parser
npm install --save mongodb
```
Access the website API via http://localhost:3000/api
