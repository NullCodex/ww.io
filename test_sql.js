var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/local';

var updateName = function(db, callback) {
    db.collection('war').updateOne(
        {"playerName" : "1"},
        {
            $set: {"playerName": 2}
        }, function(err, results) {
            console.log(results);
            callback();
        });
};

var changeTerritory = function(db, player1, player2, territoryName, callback) {
    db.collection('war').updateOne (
        {"playerName": player1},
        {
            $push: {"territories" : territoryName}
        });

    db.collection('war').updateOne (
        {"playerName": player2},
        {
            $pull: {"territories.countryName":territoryName}
        });
}

var updateArmy = function (db, playerName, territoryName, number, callback) {
    db.collection('war').updateOne(
        {"playerName": playerName , "territories.countryName": territoryName},
        {
            $inc: {"territories.soldier": number}
        }
    );
}



mongodb.connect(uri, {server: {auto_reconnect: true}}, function(err, db) {
  if(err) {
    console.log("Database could not load!");
  } else {
      updateName(db, function() {
      db.close();
  });
  }

});

