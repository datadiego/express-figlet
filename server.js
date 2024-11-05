const express = require('express');
const express = require('morgan');
const app = express();
const port = 3000;

app.use(morgan(':remote-addr :method :url :status :res[content-length] - :response-time ms'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const formulariosRouter = require('./routes/formularios.js');
const figletRouter = require('./routes/figlet.js');

app.use(formulariosRouter);
app.use(figletRouter);

app.get('/', (req, res) => {
  res.sendFile('ascii.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
