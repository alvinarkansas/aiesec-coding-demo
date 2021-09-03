# aiesec-coding-demo
This repository is dedicated for AIESEC's Back To The Future: Setting Your Path in Web Development brief coding demo.

<br>

## Prerequisites

Make sure you have these installed in your machine.

- Any text editor (I'm using Visual Studio Code) - https://code.visualstudio.com/download
- NodeJS - https://nodejs.org/en/download/
- NPM - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- PostgreSQL - https://www.postgresql.org/download/
- pgAdmin - https://www.pgadmin.org/download/
- Sequelize CLI - https://www.npmjs.com/package/sequelize-cli
- Git - https://git-scm.com/downloads
- Nodemon - https://www.npmjs.com/package/nodemon




<br>

## Clone the repository

After configuring your username and password for git for the first time, go to the directory where you want to locate the project. Then clone the repo.

```bash
git clone https://github.com/alvinarkansas/aiesec-coding-demo.git
```

Get inside the repository

```bash
cd aiesec-coding-demo
```

Open in Visual Studio Code

```bash
code .
```

<br>

## Setup Database

Move to `server` directory

```bash
cd server
```

Install all dependency packages

```bash
npm install
```

Once you've installed pgAdmin and configured PostgreSQL, open pgAdmin and create a database. You might want to change `username`, `password`, and `database` inside `config.json` based on your setup.

Create model for Merchant. Sequelize will locate `migrations` directory, it is not there yet so make one

```bash
mkdir migrations
```

Then you can create the table

 ```bash
sequelize model:generate --name Merchant --attributes name:string,category:string,avg_rating:float,is_currently_promo:boolean,distance:float,thumbnail_url:string
 ```

The generated file needs to be migrated. 

```bash
sequelize db:migrate
```

Populate database with dummy data

```bash
sequelize db:seed:all
```

Take a look at pgAdmin, on the left sidebar select`Databases > aiesec-coding-demo > Schemas > public > Tables` then click "View Data" icon on the upper navigation bar. Your Merchant table should be filled with dummy data by now.

<br>

## Next steps

You can continue developing backend and frontend code. To see the final result, please go to https://github.com/alvinarkansas/aiesec-coding-demo-finished


<br>

## Run Server

To start the server, go to the server directory

```bash
cd server
```

then run

```bash
npm run dev
```

You should see the log that says `listening to port 3001`

<br>

## Run Client

To run a development server for the client, go to the directory

```bash
cd client
```

then run

```bash
npm run start
```

It will automatically open a new tab in your browser.

