const Express = require('express');
const BodyParser = require('body-parser');
const Routes = require('./Routes');
const Cors = require('cors');

const app = Express();
app.use(Cors());

app.use(BodyParser.urlencoded({extended: false}));
app.use(BodyParser.json());
app.use('/', Routes);

app.listen(8030, 'loalhost', (err) => {
    if(err){
        console.error(err);
        process.exit(-1);
    }
    console.log('Server listen port 8030');
});