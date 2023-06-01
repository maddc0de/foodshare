const express = require('express');
const path = require("path"); // built-in module for working with file/directory paths
const logger = require("morgan"); // logs incoming requests to the conosle

// const foodHeroesRouter = require("./routes/foodHeroes");
// const foodRescuersRouter = require("./routes/foodRescuers");
// const donationsRouter = require("./routes/donations");

const app = express();

// setup for receiving JSON and accessing requests
app.use(express.json());

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

// route setup
// app.use("/foodHeroes", foodHeroesRouter);
// app.use("/foodRescuers", foodRescuersRouter);
// app.use("/donations", donationsRouter);

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // respond with details of the error
  res.status(err.status || 500).json({ message: 'server error' });
});

module.exports = app;