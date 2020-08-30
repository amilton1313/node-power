var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')
const constants = require('../constants')
const moment = require('moment')


router.get('/', (req, res) => {
  res.send('servidor ON')
})

router.post('/login', (req, res) => {
  const { body } = req

  if (body.nome == 'amilton' && body.senha == '131313') {
    
    const stdClains = {
      iss: "http://amilton.com.br",
      aud: "qualquer coisa",
      sub: 1,
      exp: moment().add(10, 'minutes').unix()
    }

    const userClains = {
      username: "amilton",
      name: "Amilton José Rocha",
      email: "amilton@gmail.com",
      scopes: [
        "admin",
        "cpd"
      ]
    }

    const token = jwt.sign({ ...stdClains, ...userClains }, constants.SERVER_KEY)
    res.json({ token })

  } else {
    res.json({"msg": "Usuário inválido"})
  }
});

module.exports = router;
