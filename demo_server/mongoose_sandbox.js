const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {});

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    online: Boolean
});

const User = mongoose.model('User', userSchema);

const user1 = new User({name: 'Satan', password: '666', online: true});
console.log(user1.name);

userSchema.methods.status = function () {
    if(online){
        console.log("User is online");
    }
    else{
        console.log("User is offline");
    }
}

user1.status();