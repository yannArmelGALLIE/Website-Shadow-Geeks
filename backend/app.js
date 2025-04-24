const express = require('express');

const mongoose = require('mongoose');

const User = require('./models/user');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://yannArmel:codeur_pro@cluster0.wcxqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    }
)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((e) => console.log('Connexion à MongoDB échouée ! : ' + e));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.post('/api/stuff', (req, res, next) => {
    delete req.body._id;
    const user = new User({
        ...req.body
});
user.save()
.then(() => res.status(201).json({message : 'Objet enregistré !'}))
.catch((error) => res.status(400).json({ error: error.message }));
next();
console.log(req.body);
res.status(201).json({message : 'Objet crée !'})
})

app.use('/api/stuff', (req, res, next) => {
    User.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error: error.message }));
});

module.exports = app;