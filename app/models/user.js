
const Users = {};

module.exports = {
    findOneOrCreate(email, user, cb) {
        Users[email] = user;
        cb(null, Users[email]);
    },
    findOne(email, cb) {
        console.log(email, 'deserialize');
        if (!Users[email]) {
            return cb(new Error('not found'));
        }
        cb(null, Users[email]);
    },
    validate(email, password, cb) {
        if (!Users[email]) {
            return cb(null, false);
        }
        if (Users[email].password === password){
            return cb(null, Users[email]);
        }
        return cb(null, false);
    }
}