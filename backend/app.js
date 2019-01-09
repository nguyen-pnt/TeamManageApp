const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT || 3000;

const projectCtrl = require('./api/controllers/projectController');
const memberCtrl = require('./api/controllers/memberCotroller');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/projects/', projectCtrl);
app.use('/api/members/', memberCtrl);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))