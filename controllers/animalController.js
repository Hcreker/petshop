const Animal = require('../models/animalModel');

exports.getAllAnimals = (req, res) => {
    Animal.getAll((animals) => {
        res.render('index', { animals });
    });
};

exports.getAnimalById = (req, res) => {
    const animalId = req.params.id_pet;
    Animal.getById(animalId, (animal) => {
        res.render('edit', { animal });
    });
};

exports.getDeleteByAnimal = (req, res) => {
    const animalId = req.params.id_pet;
    Animal.getById(animalId, (animal) => {
        res.render('dell', { animal });
    });
};

exports.addAnimal = (req, res) => {
    const newAnimal = {
        nome: req.body.nome,
        especie: req.body.especie,
        raca: req.body.raca,
        cor: req.body.cor,
        porte: req.body.porte,
    };

    Animal.add(newAnimal, () => {
        res.redirect('/');
    });
};

exports.updateAnimal = (req, res) => {
    const animalId = req.params.id_pet;
    const updatedAnimal = {
        nome: req.body.nome,
        especie: req.body.especie,
        raca: req.body.raca,
        cor: req.body.cor,
        porte: req.body.porte,
    };

    Animal.update(animalId, updatedAnimal, () => {
        res.redirect('/');
    });
};

exports.deleteAnimal = (req, res) => {
    const animalId = req.params.id_pet;
    Animal.delete(animalId, () => {
        res.redirect('/');
    });
};
