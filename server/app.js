// Joseph P. Pasaoa
// App Build Review
//

/* HELPERS */
const log = console.log;

/* MODULE INITS */
const express = require('express');
  const app = express();
  const port = 9090;
const cors = require('cors');

const vegetableRouter = require('./routes/vegetablesRT');

app.use('/inventory/vegetables', vegetableRouter);

/*
  /inventory/vegetable
  /inventory/vegetable/<veg_id>

  /inventory/bread
  /inventory/bread/<bread_id>
*/

app.get('/inventory', (req, res, next) => {
    res.send('Hi hi.');
}) 

app.listen(port, () => {
    log(`JoeyServer is serving on port ${port}. Zug zug.`);
})
