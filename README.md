# CRUD NodeJS

A simple sample [nodeJS](https://nodejs.org/en/) application, using as [Express](http://expressjs.com), [Passport](http://www.passportjs.org) and [MariaDB](https://mariadb.org/).

## Requires

- Node (>= v8.10.0)
- NPM (>= 3.5.2)
- Sequelize Cli (>= 4.0.0)

## Running Docker for database container
Creating a [Docker](https://www.docker.com/) container image for [MariaDB], clone the repository [dokcer-mariadb](https://github.com/eduardomesquita/docker)

### Quickstart

Install sequelize-cli globally with:
```bash
npm install -g sequelize-cli
```
Install node dependencies:
```bash
npm install
```

## Configure Migration

Create database crud-node in mariadb and run:
```bash
sequelize  db:migrate --migrations-path db/migrations/ --config config/database.json 
```
Create admin user to access with passport
```bash
sequelize  db:seed:all --seeders-path  db/seeders --config config/database.json 
```

## Run
```bash
npm start
```

## Testing
Open your favorite browser:
```bash
http://localhost:3000/
```

Login:
```bash
User: admin
password: 123
```

