```sh
git init
git add .
git commit -m "init"
heroku create
heroku apps:rename NEWNAME
git push heroku master
heroku ps:scale web=1
heroku open
```