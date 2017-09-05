const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({
        hi: "there, you"
    });
});

app.listen(process.env.PORT, process.env.IP);