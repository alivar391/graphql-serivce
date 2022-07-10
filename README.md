### RSSchool NodeJS Graphql Service task implementation

## Description

Imagine we have a couple of microservices that are created for the service Musicify, a new wikipedia for Music. We need to provide a comfortable and convenient service for our users to manage and retrieve data for different entities.

## Installation

1. Clone/download repo (git clone https://github.com/alivar391/graphql-serivce.git)
2. Go to the `develop` branch (cd graphql-serivce)
3. `npm install` (npm i)
4. copy and rename .env.example to .env

For correct working you should have downloaded and launched microservices and database.
if you don't have them check link below:
https://github.com/rolling-scopes-school/node-graphql-service

## Usage

**Development**

`npm run start:dev`

**Production**

`npm run start`

### Server will start at PORT in .env file. By default 3000

#### You can try queries and mutations in playground

GraphQL link: localhost:**3000**/graphql (**3000** is your PORT)

To make it easier to check the task, I created a query.txt file in the root directory. Its contents can be copied to the playground and uncommented to perform the necessary queries and mutations. **All id's are for my database, you will have other id's**. After creating a user and login, you need to add a token in the playground below in `HTTP HEADERS` the following form
`{ "Authorization": "Bearer token" }`

#### for example:

`{ "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNhMDZiNTJiOWM3N2ZhMDRlMGU1ZWEiLCJmaXJzdE5hbWUiOiJhbGl2YXIzOTEiLCJsYXN0TmFtZSI6Imxhc3QgbmFtZSIsImVtYWlsIjoiMTIzQG1haWwuY29tIiwiaWF0IjoxNjU3NDA3NDg3fQ.Gk31HcmiHhmJ3JKb76Jg1bBxiJzIS5doeUMkkEMfLes" }`

After it you can uncomment one query or mutation and use it.

For example, at first you can create Genre,
then create Band with id Genres,
then create Artist with id Band,
then update Band with artist id,
then create track with Artist id, Band id, Genre id,
then create Album with Artist id, Band id, Track id, Genre id,
then update Track with Album id
something like that...

Have fun
If you have any questions about app or check you can write me Discord: Alivar391#9131
