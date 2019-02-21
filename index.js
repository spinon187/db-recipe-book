const express = require('express');
const helmet = require('helmet');
const server = express();

server.use(express.json());
server.use(helmet());

const db = require('./data/db.js');

const errors = {
  '19': 'Another record with that value exists',
};

server.get('/api/dishes', (req, res) => {
    db
        .getDishes()
        .then(dishes => {
            res.status(200).json({dishes})
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
})

server.post('/api/dishes', (req, res) => {
    const dish = req.body
    
    db
        .addDish(dish)
        .then(dish =>{
            res.status(201).json({dish})
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
})

server.get('/api/dishes/:name', (req, res) => {
    const name = req.params.name
    db
        .getDish(name)
        .then(dish => {
            if(dish){
                res.status(200).json({dish})
            } else {
                res.status(404).json({error: "No such dish"})
            }
        })
        .catch(error => {
            res.status(500).json({error: error});
    });
})

server.put('/api/dishes/:name', (req, res) => {
  const name = req.params.name;

});

server.delete('/api/dishes/:name', (req, res) => {
  const name = req.params.name;
  
});


server.get('/api/dishes/:dish_name/recipes', (req, res) => {
    const dish = req.params.dish_name;

    db
        .getRecipes(dish)
        .then(recipes => {
            res.status(200).json({recipes})
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
})

server.post('/api/dishes/:dish_name/recipes', (req, res) => {
    const dishName = req.params.dish_name;
    const recipeObj = {name: req.body.name, dish_name: dishName}

    db
        .addRecipe(recipeObj)
        .then(recipe =>{
            res.status(201).json({recipe})
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
  })

server.get('/api/dishes/:dish_name/recipes/:name', (req, res) => {
    const name = req.params.name;
    
    
})

server.put('/api/dishes/:dish_name/recipes/:name', (req, res) => {
    const name = req.params.name;

});

server.delete('/api/dishes/:dish_name/recipes/:name', (req, res) => {
    const name = req.params.name;

});

server.get('/api/dishes/:dish_name/recipes/:name', async (req, res) => {
    const name = req.params.name;
    const dishName = req.params.dish_name;
    db
        .getRecipe(name)
        .then(ingredients => {
            res.status(200).json({name: name, dish_name: dishName, ingredients: ingredients})
        })
        .catch(error => {
            res.status(500).json({error: error});
        })
})

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
