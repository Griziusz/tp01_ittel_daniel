const { v4: uuidv4 } = require("uuid");
const { ACCESS_TOKEN_SECRET } = require("../config.js");

const jwt = require('jsonwebtoken');

const users = require('../list.json');


function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '365d' });
}

function getUserByLoginAndPassword(login, password) {
  return users.find(user => user.login === login && user.password === password);
}

function getUserByLogin(login) {
  return users.find(user => user.login === login);
}


exports.login = (req, res) => {
  const { login, password } = req.body;
  const utilisateur = getUserByLoginAndPassword(login, password);
  console.log(utilisateur);
  if (utilisateur) {
    const { id, login } = utilisateur;
    const user = { id, login };
    let accessToken = generateAccessToken(user);
    res.setHeader('Authorization', `Bearer ${accessToken}`);
    console.log(accessToken);
  } else {
    res.status(404).send({
      message: "Utilisateur inexistant"
    });
  }
};

exports.register = (req, res) => {
  const user = {
    name,
    email,
    phone_number,
    address,
    zip_code,
    city,
    username,
    password
  } = req.body;

  const utilisateur = getUserByLogin(user.username);
  if (!utilisateur) {
    const user = {
      id: uuidv4(),
      name,
      email,
      phone_number,
      address,
      zip_code,
      city,
      username,
      password
    };
    users.push(user);
    res.status(201).send(user);
  } else {
    res.status(409).send({
      message: "Utilisateur existant"
    });
  }
}
