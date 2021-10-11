# LocalStack Serverless Node.js Starter

Easily bootstrap a new NodeJS Serverless application and test it with LocalStack. It includes many useful features:

- Generating optimized Lambda packages with Webpack
- Using ES6 or TypeScript in your handler functions
- Run API Gateway locally
  - Use `npm run start:offline`
- Support for unit tests
  - Run `npm test` to run your tests
- Sourcemaps for proper error messages
  - Error message show the correct line numbers
  - Works in production with CloudWatch
- Lint your code with ESLint
- Add environment variables for your stages
  - With `.env.{stage}` files
- No need to manage Webpack or Babel configs 🙌

---

## Requirements

- [Docker](https://www.docker.com/products/docker-desktop)
- [LocalStack](https://localstack.cloud/docs/getting-started/installation/)
- [NodeJS v14](https://nodejs.org/en/download/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

## Installation

To create a new Serverless project.

```bash
$ npx serverless install --name my-project --url https://github.com/williamrjribeiro/localstack-serverless-node-starter
```

Enter the new directory

```bash
$ cd my-project
```

Install the Node.js packages. Use Node `v14` preferably since it's the runtime version used in AWS.

```bash
$ nvm use # run this only if you already have NVM in your machine
$ npm install
```

## Usage

### To just run a function

To run the sample `hello` function on your local machine:

```bash
$ npm run hello
```

### To simulate API Gateway offline

```bash
$ npm run start:offline
```

It uses [serverless-offline](https://github.com/dherault/serverless-offline).

### Deploy to LocalStack

First **start Docker Engine** and then:

```bash
$ docker compose up
$ npm start
```

Navigate to https://app.localstack.cloud/resources/gateway and copy the `Endpoint URL` and access it. It should be similar to http://localhost:4566/restapis/bh10i0f6vj/local/_user_request_/hello. Add `?fail=true` to the URL so you can test errors.

#### Deploy a single function:

```bash
$ npm run sls -- deploy function --function hello
```

### Deploy to AWS

To deploy to a real `stage` called `stg` in AWS:

```bash
$ npm run deploy stg
```

### To run tests

```bash
$ npm test
```

We use [Jest](https://facebook.github.io/jest/docs/en/getting-started.html#content) to run the tests.

## Environment Variables

To add environment variables to your project

1. Rename `env.example` to `.env`.
1. Add environment variables for your local stage to `.env`.
1. To use [LocalStack Pro Features](https://localstack.cloud/pricing/), update `LOCALSTACK_API_KEY` value with your API key.
1. Make sure to **not commit** your `.env`.

## TypeScript

If [serverless-bundle](https://github.com/AnomalyInnovations/serverless-bundle) detects a `tsconfig.json` in your service root, it'll compile it using TypeScript. We have a separate starter for TypeScript here, [**Serverless TypeScript Starter**](https://github.com/AnomalyInnovations/serverless-typescript-starter).

## Linting

We use [ESLint](https://eslint.org) to lint your code via [serverless-bundle](https://github.com/AnomalyInnovations/serverless-bundle).

You can turn this off by adding the following to your `serverless.yml`.

```yaml
custom:
  bundle:
    linting: false
```

To [override the default config](https://eslint.org/docs/user-guide/configuring), add a `.eslintrc.json` file. To ignore ESLint for specific files, add it to a `.eslintignore` file.

## Inspired by Serverless Stack

You can find more about it in their [website](http://serverless-stack.com) and the original [Serverless Node.js Starter](https://github.com/AnomalyInnovations/serverless-nodejs-starter)
