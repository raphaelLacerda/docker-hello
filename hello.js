const express = require('express');
const app = express();
const port = 3000;
var i = 0;
app.get('/', (req, res) => {
    console.log('passei aqui '+ i)
    res.send('Hello World! ' + i)
    i++
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
