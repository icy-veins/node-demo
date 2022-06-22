import express from 'express';
const app = express();
import cors from 'cors';
const port = process.env.PORT || 3000;

app.use(cors());
app.get('/home', (req, res) => {
    res.json({success: true, payload: "Hello world"});
});
console.log()
app.listen(port, () => console.log("Listening"));