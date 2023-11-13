## Description

Medical Appointment System

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

## Folder Structure

```js
+-- dist // Source build
+-- src
|   +-- config // Environment Configuration
|   +-- entity // TypeORM Entities
|   +-- auth // Authentication
|   +-- common // App
|   |   +-- constants // Constant value and Enum
|   |   +-- controllers // Nest Controllers
|   |   +-- dto // DTO (Data Transfer Object) Schema, Validation
|   |   +-- guards // Nest Guards
|   |   +-- interfaces // TypeScript Interfaces
|   |   +-- middleware // Nest Middleware
|   |   +-- modules // Nest Modules
|   |   +-- services // Nest Services
|   |   +-- * // models, repositories, services...
|   +-- shared // Shared Nest Modules above
+-- test // Jest testing
+-- typings // Modules and global type definitions

```

## License

Nest is [MIT licensed](LICENSE).
