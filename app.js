const express = require('express');
const bodyParser = require('body-parser');
const animalController = require('./controllers/animalController');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', animalController.getAllAnimals);
app.get('/add', (req, res) => res.render('add'));
app.post('/add', animalController.addAnimal);
app.get('/edit/:id_pet', animalController.getAnimalById);
app.post('/edit/:id_pet', animalController.updateAnimal);
app.get('/dell/:id_pet', animalController.getDeleteByAnimal);
app.post('/dell/:id_pet', animalController.deleteAnimal);

app.listen(2000, () => {
    console.log('Servidor rodando na porta 2000');
});
