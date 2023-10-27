const mongoose = require('mongoose');

const connectDB = async () => {
  const con = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`🔌 MongoDB Connected 🔌

Host: ${con.connection.host}
DB Name: ${con.connection.name}
DB User: ${con.connection.user}
`);
};

module.exports = connectDB;
