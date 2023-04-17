const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const contactFormRoutes = require('./routes/contactFormRoutes');
const scheduleCabFormRoutes = require('./routes/scheduleCabFormRoutes');
const userLoginRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/error');
const areaFormRouter = require("./routes/areaFormRouter");

const cors = require("cors");
// To handle uncaught promise rejections and log them with winston, manually throw exception.
process.on('unhandledRejection', (ex) => { // here, ex = unhandles rejection exception
  throw ex;
});


mongoose.connect("mongodb://database:27017/bookmycab",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log('Connected to the DB :)');
  })
  .catch((err) => {
    console.log('Error connecting to db:', err);
  });

  
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
})
app.use(cors());
app.use('/api/ContactForms', contactFormRoutes);
app.use('/api/scheduleCabForm', scheduleCabFormRoutes);
app.use('/api/user', userLoginRoutes);
app.use(errorMiddleware);
app.use("/api/areaDetails",areaFormRouter);
module.exports = app;
