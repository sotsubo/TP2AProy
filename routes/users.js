var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Listado de usuarios');
});

router.get('/:id', (req, res)=>{
  res.send('Un usuario: ' + req.params.id);
});

router.post('/', (req, res) => {
  res.send('Usuario creado');
});

router.put('/:id', (req, res) => {
  res.send('Usuario modificado');
});

router.delete('/:id', (req, res) => {
  res.send('Usuario eliminado');
});
module.exports = router;
