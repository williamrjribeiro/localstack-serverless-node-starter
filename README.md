# Serverless Node.js Starter [![Seed Status](https://api.seed.run/serverless-stack/serverless-nodejs-starter/stages/prod/build_badge)](https://console.seed.run/serverless-stack/serverless-nodejs-starter)

A Serverless starter that adds ES6, TypeScript, serverless-offline, linting, environment variables, and unit test support. Part of the [Serverless Stack](http://serverless-stack.com) guide.

[Serverless Node.js Starter](https://github.com/AnomalyInnovations/serverless-nodejs-starter) uses the [serverless-bundle](https://github.com/AnomalyInnovations/serverless-bundle) plugin and the [serverless-offline](https://github.com/dherault/serverless-offline) plugin. It supports:

- **Generating optimized Lambda packages with Webpack**
- **Using ES6 or TypeScript in your handler functions**
- **Run API Gateway locally**
  - Use `npm run start:offline`
- **Support for unit tests**
  - Run `npm test` to run your tests
- **Sourcemaps for proper error messages**
  - Error message show the correct line numbers
  - Works in production with CloudWatch
- **Lint your code with ESLint**
- **Add environment variables for your stages**
- **No need to manage Webpack or Babel configs**

---

### Requirements

- [Docker](https://www.docker.com/products/docker-desktop)
- [LocalStack](https://localstack.cloud/docs/getting-started/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

To create a new Serverless project.

```bash
$ serverless install --url https://github.com/williamrjribeiro/serverless-project-starter --name my-project
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

### Usage

To run the sample `hello` function on your local machine:

```bash
$ npm run hello
```

To simulate API Gateway locally using [serverless-offline](https://github.com/dherault/serverless-offline):

```bash
$ npm run start:offline
```

Deploy your project to **LocalStack**:

```bash
$ docker compose up
$ npm start
```

**Docker Engine must already be running.** Navigate to https://app.localstack.cloud/resources/gateway and copy the `Endpoint URL` and access it. It should be similar to http://localhost:4566/restapis/bh10i0f6vj/local/_user_request_/hello. Add `?fail=true` to the URL so you can test errors.

Deploy a single function:

```bash
$ npm run sls -- deploy function --function hello
```

Deploy to a `stage` called `stg` in AWS:

```bash
$ npm run deploy stg
```

#### Running Tests

Run your tests using:

```bash
$ npm test
```

We use Jest to run our tests. You can read more about setting up your tests [here](https://facebook.github.io/jest/docs/en/getting-started.html#content).

#### Environment Variables

To add environment variables to your project

1. Rename `env.example` to `.env`.
1. Add environment variables for your local stage to `.env`.
1. To use [LocalStack Pro Features](https://localstack.cloud/pricing/), update `LOCALSTACK_API_KEY` value with your API key.
1. Make sure to **not commit** your `.env`.

#### TypeScript

If [serverless-bundle](https://github.com/AnomalyInnovations/serverless-bundle) detects a `tsconfig.json` in your service root, it'll compile it using TypeScript. We have a separate starter for TypeScript here, [**Serverless TypeScript Starter**](https://github.com/AnomalyInnovations/serverless-typescript-starter).

#### Linting

We use [ESLint](https://eslint.org) to lint your code via [serverless-bundle](https://github.com/AnomalyInnovations/serverless-bundle).

You can turn this off by adding the following to your `serverless.yml`.

```yaml
custom:
  bundle:
    linting: false
```

To [override the default config](https://eslint.org/docs/user-guide/configuring), add a `.eslintrc.json` file. To ignore ESLint for specific files, add it to a `.eslintignore` file.

### Support

- Open a [new issue](https://github.com/AnomalyInnovations/serverless-nodejs-starter/issues/new) if you've found a bug or have some suggestions.
- Or submit a pull request!

---

This repo is maintained by [Serverless Stack](https://serverless-stack.com).
