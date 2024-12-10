// 鉴权
const {formatApiReturn, errCode} = require('../utils/returnType')
const express = require('express');
const jwt = require('jsonwebtoken');
const secret_key = require('./../config/config').secret_key
const bcrypt = require('bcrypt');
const User = require('./models/User');

const registry = async (req, res) => {
  try {
    const { username, password } = req.body;
    const users = await User.findAll({where: {username: req.body.username}})
    if (users.length) {
        res.send(formatApiReturn(false, "该用户名已被注册", errCode.SERVER_ERR))
        return
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    console.log(user)
    res.send(formatApiReturn(true, "注册成功"))
  } catch (error) {
    res.status(400).json({ error: 'Error registering user' });
  }
};

const login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ userId: user.id }, secret_key, { expiresIn: '7d' });
      res.send(formatApiReturn({token: token}));
    } catch (error) {
      res.status(500).json({ error: 'Error logging in' });
    }
  }
module.exports = {
    registry,
    login
};