const express = require('express');
const app = express();

app.use(express.json({ limit: '1mb' }));

app.get('/operate', (req, res) => {
    console.log(req.url);
    const queryParams = req.query;
    const { amount, currency } = queryParams;
    const answer = convert(amount, currency);
    console.log(answer);
    res.send(JSON.stringify(answer));
});

app.get('/', (req, res) => {
    console.log(req.url);
    console.log('hii');
});

app.listen(5000, () => {
    console.log('Listening on port 5000');
});

function convert (amount, currency) {
    switch(currency){
        case 'USD':
            //convert
            return amount * 0.0062;
            break;
        case 'EUR':
            //convert
            return amount * 0.0053;
            break;
        case 'AUD':
            //convert
            return amount * 0.0085;
            break;
        case 'GBP':
            //convert
            return amount * 0.0047;
            break;
    }
}