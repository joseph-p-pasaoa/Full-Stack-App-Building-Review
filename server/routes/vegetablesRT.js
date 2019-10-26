// Joseph P. Pasaoa
// Vegaetables Route | App Build Review
//

/* HELPERS */
const log = console.log;

/* MODULES INIT */
const express = require('express');
  const router = express.Router();

router.get("/", (req, res) => {
    res.send('This should show all veggies in the inventory');
});


module.exports = router;
