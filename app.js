import express from 'express';
import { get } from 'http';
const app = express();
const port = process.env.PORT || 3000;

app.get('/home', (req, res) => {
    res.json({success: true, payload: "Hello world"});
});

app.listen(port, () => console.log("Listening"));