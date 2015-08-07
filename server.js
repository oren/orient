var OrientDB = require('orientjs');

var server = OrientDB({
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: '0r13ntDB'
});

var db = server.use('GratefulDeadConcerts');

db.query('select from V', {}).then(function (results){
    console.log(results);
});
