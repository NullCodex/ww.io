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

To use the local mongodb use the following code:

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/my_database_name';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // do some work here with the database.

    //Close connection
    db.close();
  }
});
    db.close();
  }
});
