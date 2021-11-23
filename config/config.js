const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {}
}
const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue) {
    return stringValue;
});

const databaseConfig = {
    'host': '192.168.1.19',
    'port': 5432,
    'database': 'delivery_db',
    'user': 'postgres',
    'password': 'LaClaveEs7*4=28'
};

const db = pgp(databaseConfig)

module.exports = db;