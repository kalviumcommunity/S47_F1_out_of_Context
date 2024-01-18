const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT || 3000;

// define the ping route with the response in JSON
app.get('/ping', (req, res) => {
    res.json({"message":"pong"},
    {"message2":"Hey there,this is my first api"});
  });

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;