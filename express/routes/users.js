var express = require('express');
var router = express.Router();

const { Usuario, Scope } = require('../api/models')

router.get('/', async function(req, res, next) {
  if (req.token.scopes.includes("admin")) {

    try {
      const usuarios = await Usuario.findAll({
        attributes: [
          'id',
          'nome',
          'username',
          'scope_id',
          'senha'
        ]
      })
      res.send({ usuarios })
    } catch(e) {
      console.log('ERROR', e)
      res.status(500).json({msg: "Erro de sistema"})
    }
  } else {
    res.send({ msg: "Usuário sem permissão" }) 
  }
});

router.get('/:id', async (req, res) => {

  const id = parseInt(req.params.id)

  
  try {
    const usuarios = await Usuario.findOne({
      where: { id },
      attributes: [
        'id',
        'nome',
        'username',
        'scope_id',
        'senha'
      ],
      raw: true
    })
    res.send({ usuarios })
  } catch(e) {
    console.log('ERROR', e)
    res.status(500).json({msg: "Erro de sistema"})
  }

  console.log('resul', resul)

  if (!resul) {
    res.status(404).json({msg: "Usuário não encontrado"})
  } else {
    res.status(201).json(resul) 
  }

})

router.post('/', async (req, res) => {

  const { body } = req 

  try {
    const usuario = await Usuario.create({
      ...body
    })
    res.send({ msg: 'Usuário cadastrado com sucesso !!!', data: usuario })
  } catch(e) {
    console.log('ERROR', e)
    res.status(500).json({msg: "Erro de sistema"})
  }

})

module.exports = router;
