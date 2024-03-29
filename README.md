<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="./logos/nestjs-logo.svg" width="100" alt="Nest Logo"/></a>
  <a href="https://nodejs.org/en/" target="blank"><img src="./logos/node-logo.webp" width="100" alt="Nodejs logo"/></a>
  <a href="https://graphql.org/" target="blank"><img src="./logos/graphql-logo.png" width="100" alt="GraphQl logo"/></a>
  <a href="https://typeorm.io/" target="blank"><img src="./logos/typeorm-logo.png" width="100" alt="Typeorm logo"/></a>
  <a href="https://www.sqlite.org/index.html" target="blank"><img src="./logos/sqlite-logo.png" width="100" alt="Sqlite logo"/></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Nestjs project with GraphQL CRUD operations and class validation.

## Stack

* [@nestjs 9.0.0](https://github.com/nestjs/nest)
* [Graphql 16.6.0](https://docs.nestjs.com/graphql/quick-start)
   * Code First
   * Apollo Driver
* [Typeorm](https://typeorm.io/)
* [Class-validator 0.13.2](https://github.com/typestack/class-validator)
* [Sqlite3](https://www.sqlite.org/index.html)

### Create Owner and Schema

![Create an owner and Schema](./screenshots/createOwner-Schema.png)

### Create Pet

![Create a pet](./screenshots/createPet.png)

### Query All Pets

![Query all pets](./screenshots/queryPets.png)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

[MIT licensed](LICENSE).
