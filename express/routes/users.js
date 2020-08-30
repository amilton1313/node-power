var express = require('express');
var router = express.Router();

const usuarios = [
  {uid: 1, nome: "amilton jose rocha", username: "amilton"},
  {uid: 2, nome: "pedro cabral", username: "pedro"},
  {uid: 3, nome: "maria joaquina", username: "maria"},
  {uid: 4, nome: "sergio camarao", username: "sergio"},
  {uid: 9, nome: "cabral peixoto", username: "cabral"}
]

router.get('/', function(req, res, next) {
  if (req.token.scopes.includes("admin")) {

    res.send({ usuarios })
  } else {
    res.send({ msg: "Usuário sem permissão" }) 
  }
});

router.get('/:id', (req, res) => {
  const resultado = usuarios.find(u => parseInt(req.params.id) === u.uid)
  console.log('res ', resultado)
  if (!resultado) {
    res.status(404).json({msg: "Usuário não encontrado"})
  } else {
    res.status(201).json(resultado) 
  }

})

module.exports = router;
