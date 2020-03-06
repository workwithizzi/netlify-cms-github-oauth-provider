const app = require('./index');
const express = require('express')
const port = process.env.PORT || 3000

express().use(app);

express().listen(port, () => {
  console.log("gandalf is walkin' on port " + port)
})