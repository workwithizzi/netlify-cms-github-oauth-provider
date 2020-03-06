const app = require('./index');
const express = require('express')

express().use(app);

express().listen(3000, () => {
  console.log("gandalf is walkin' on port " + 3000)
})