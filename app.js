 const express = require('express');

// Constants
const PORT = 3000;


// App
const app = express();
app.get('/', (req, res) => {
  res.send("<div style='padding:100px;background-color:brown'><h3 style='color:white;text-align:center;font-size:30px'>Message from  node app 2</h3></div>");
});

app.listen(PORT,()=>console.log(`App is runnning on localhost:${PORT}`));
