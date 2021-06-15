const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const stockRoutes = require('./routers/stockRoutes');

const app = express();

// middelware

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3001"
}))
app.use((req, res, next) => {

  next();
});

// routes

app.use('/api/v1/stocks', stockRoutes);

// app.all('*', (req, res, next) => {
//   next(new AppError(`can not find ${req.originalUrl} on this server !`, 404));
// });

//   start server
module.exports = app;
