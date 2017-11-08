const express = require('express');
const fileUpload = require('express-fileupload');

let app = express()

app.use(express.static('public'));

app.use(fileUpload());

app.post('/api/filesize', (req, res) => {
    if (!req.files)
        return res.status(404).send('no files uploaded...');

    res.send({size: req.files.fileinput.data.length});
});

let listener = app.listen(process.env.PORT, err => {
    console.log("running on:",listener.address().address,':',listener.address().port);
});