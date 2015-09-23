var mysql      = require('mysql');
var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'real_db',
   port     : '3307',
   socket   : 'tmp/mysql.sock'
});

function get_territories_with_playerID() {
    connection.query('select players.p_id, territoryID_to_territory_name.t_name from players join playerID_to_territoryID on players.p_id = playerID_to_territoryID.p_id join territoryID_to_territory_name on playerID_to_territoryID.t_id = territoryID_to_territory_name.t_id', function(err, rows, fields){
        if(!err) {
            console.log(rows);
        }
        else {
            console.log("ERROR: ", err);
        }
    });
}

function get_infrantry_number_with_territory_name(territory_name) {
    connection.query('select territoryID_to_territory_name.t_name, territoryID_to_infrantry.infrantry_number from territoryID_to_territory_name join territoryID_to_infrantry where territoryID_to_territory_name.t_id = territoryID_to_infrantry.t_id AND territoryID_to_territory_name.t_name = ' + "'"+territory_name+"'", function(err, rows, fields){
        if(!err) {
            console.log(rows);
            //console.log(fields);
        }
        else {
            console.log("ERROR: ", err);
        }
    });
}

function add_troop_to_territory(territory_name) {

}

function subtract_troop_to_territory(territory_name) {

}

function change_owned_territory(playerID1, playerID2, territory_name) {

}
/*
function get_infrantry_from_territory(territory) {
    connection.query('SELECT * from territoryID_to where id = ' + "'"+territory+"'", function(err, rows, fields) {
    if(!err) {
        //console.log("The number of infrantries are: ", rows[0].infrantry);
        console.log(rows);
    }
    else {
        console.log('ERROR!', err);
    }
    });
}
*/


/*
select territoryID_to_territory_name.t_name, territoryID_to_infrantry.infrantry_number from territoryID_to_territory_name join territoryID_to_infrantry on territoryID_to_territory_name.t_id = territoryID_to_infrantry.t_id;
select territoryID_to_territory_name.t_name, territoryID_to_infrantry.infrantry_number from territoryID_to_territory_name join territoryID_to_infrantry where territoryID_to_territory_name.t_id = territoryID_to_infrantry.t_id AND territoryID_to_territory_name.t_id = 1;

*/
get_territories_with_playerID();
//get_infrantry_number_with_territory_name('Paris');
connection.end();

