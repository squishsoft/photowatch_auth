import express from 'express';
import basicAuth from 'express-basic-auth';
let app = express();

app.use(basicAuth({
    users: { 'test': 'pass' }
}));

app.get('/authenticate', (req, res) => {
    res.send('test');
});

export default app;