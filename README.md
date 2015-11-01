The app is currently hosted on http://calm-earth-7787.herokuapp.com/main

For setup need heroku tool-belt

    1. Initialize the git repo by cloning the app
    2. Login in
    3. Enter heroku git:remote -a calm-earth-7787
    4. To add changed files use the same git commands
    5. To push git push heroku master

For error checking use 'heroku logs'

To install local mongodb follow the instruction in this video:

    https://www.youtube.com/watch?v=AhMdrlgI0Bc

To use local database for testing perform the following:

In the terminal enter this command:

    export NODE_ENV = local

In addition change the following line in index.js:

    'mongodb://localhost:27017/local'

To be:

    'mongodb://localhost:27017/your_database_here'

Lastly enter the following command to start the server

    heroku local web
