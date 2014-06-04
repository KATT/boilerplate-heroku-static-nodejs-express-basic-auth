# Static Heroku node.js app with Basic Auth

Boilerplate code for static web app hosted with node.js on Heroku.

Default username/password is `USERNAME`/`PASSWORD`. (Change this in `server.js`.)

## Create your Heroku dyno:

```sh
heroku create
git push heroku master
heroku ps:scale web=1
heroku open
```

## Rename it to something appropiate

```sh
heroku apps:rename NEWNAME
heroku open
```
