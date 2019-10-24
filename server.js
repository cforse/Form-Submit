const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
app.use(express.static('public'));

app.listen(port, function(err){
    if (err){
        console.error(`Error starting server: `, err);
    };
    console.log(`Server listening on port ${port}`);
});