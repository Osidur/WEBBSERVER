const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webshop', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

const itemSchema = new mongoose.Schema({
  name: String,
  size: Number,
  age: Number
});

const Item = mongoose.model('Item', itemSchema);

exports.storeItem = (name, size, age) => {
    var item = new Item({
        name: name, 
        size: size, 
        age: age 
       })
   
     item.save(()=>{
       console.log("Successfully saved item in database!")
     })
}