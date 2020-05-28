const express = require('express');
const router = express.Router();
const dataInventors = require('../data/inventor');
const chalk = require('chalk');

/* GET inventors listing. */
router.get('/', async function(req, res, next) {
  //res.send('Listado de inventores');
  let inventors = await dataInventors.getIventors();
  res.send(inventors);
});

router.get('/:id', async (req, res)=>{
  //res.send('Un inventor: ' + req.params.id);
  let inventor = await dataInventors.getInventor(req.params.id);
  res.send(inventor);
});

router.post('/', async (req, res) => {
    
  let inventor = {
    _id: req.body._id,
    first: req.body.first,
    last: req.body.last,
    year: req.body.year
  };
  console.log(chalk.green(inventor._id));

  let result = await dataInventors.pushInventor(
    inventor
  ).catch((error)=>{console.log(chalk.red(error))});

  res.send(result);
});

router.put('/:id', async (req, res) => {
  let result = await dataInventors.updateInventor(
    {
      _id: req.params.id,
      first: req.body.first,
      last: req.body.last,
      year: req.body.year
    }
  ).catch((error)=>{console.log(chalk.red(error))});

  res.send(result);
});

router.delete('/:id', async (req, res) => {
  let result = await dataInventors.deleteInventor(req.params.id);
  res.send(result);
});


module.exports = router;