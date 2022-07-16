# heroku-test

## Requirements

* [Node.JS LTS](https://nodejs.org/es/)
* [Heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)
* [Deploy](https://devcenter.heroku.com/articles/deploying-nodejs)

### Quick Start

After clone the project, install dependencies:

```bash
npm install
```

Create your own environment variables (.env):

```env
DOMAIN=localhost
```

### Deploy to Heroku

```bash
heroku login
heroku git:remote -a <PROJECT-NAME>
git push heroku <CURRENT-BRANCH>
```

### Config env in heroku dashboard

* In app's Settings tab in the Heroku Dashboard, add the key and value, [check here](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard)