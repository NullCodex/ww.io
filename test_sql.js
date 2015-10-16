var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/local';

var updateName = function(db, callback) {
    db.collection('war').updateOne(
        {"playerName" : "player1"},
        {
            $set: {"playerName": "Jameson"}
        }, function(err, results) {
            console.log(results);
            callback();
        });
};

var changeTerritory = function(db, player1, player2, territoryName, callback) {
    var territoryJSON = {};
    territoryJSON["countryName"] = territoryName;
    territoryJSON["soldiers"] = 0;
    territoryJSON["tanks"] = 0;

    var removeJSON = {};
    removeJSON["countryName"] = territoryName;

    db.collection('war').updateOne (
        {"playerName": player1},
        {
            $push: {"territories" : territoryJSON}
        }, function(err, result) {
            db.collection('war').updateOne (
                {"playerName": player2},
                {
                    $pull: {'territories' : removeJSON}
                }, function (err, results) {
                    callback();
                });
        });


}

var updateArmy = function (db, searchJSON, updateJSON, callback) {
    console.log("asdasda");
    db.collection('war').updateOne (
        searchJSON,
        {
            $inc: updateJSON
        }, function(err, results) {
            callback();
        });
}



mongodb.connect(uri, {server: {auto_reconnect: true}}, function(err, db) {
  if(err) {
    console.log("Database could not load!");
  } else {
    /*
        var searchJSON = {};
        searchJSON["territories.countryName"] = "China";
        var updateJSON = {};
        updateJSON["territories.$.soldiers"] = 2;
        console.log(searchJSON);
        console.log(updateJSON);
        db.close();
    */
    /*
        var searchJSON = {};
        searchJSON["territories.countryName"] = "China";
        var updateJSON = {};
        updateJSON["territories.$.soldiers"] = 2;

        updateArmy(db, searchJSON, updateJSON, function() {
        db.close();
    });
    */
    /*
    updateName(db, function() {
        db.close();
    });
*/
    changeTerritory(db, "player2", "player1", "China", function () {
        db.close();
    })
  }

});

