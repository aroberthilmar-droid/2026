const http = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('veiws', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'forsíða' });
});

app.get('/about', (req, res) => {
    res.render('index', { title: 'um okkur'});
});

app.use((req, res) => {
    res.status(404).send('síða fannst eki (404)');
});

app.listen(PORT, () => {
    console.log('server keyrir á https://localhost:${PORT}');
});