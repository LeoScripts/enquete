require('dotenv').config();
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const questionRoutes = require('./routes/question.routes');
const answerRoutes = require('./routes/answer.routes');

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.resolve('src', 'views'));
app.set(express.static(path.resolve('src', 'public')));

app.use(questionRoutes);
app.use(answerRoutes);

app.listen(3000, () => console.log(`Server runnig at http://${hostname}:${port}/questions`));
