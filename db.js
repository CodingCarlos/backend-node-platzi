const db = require('mongoose');

db.Promise = global.Promise;

// 'mongodb://user:user1234@ds255107.mlab.com:55107/telegrom'
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
    });
    console.log('[db] Conectada con éxito');
}

module.exports = connect;
