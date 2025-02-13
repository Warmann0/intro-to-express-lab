// Import Express & morgan
const express = require('express')
const morgan = require('morgan');

// Create an Express app and morgan
const app = express()
app.use(morgan('dev'));


const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];




// exercise  1

app.get('/greetings/:username', (req, res) => {
    console.log(req.params); // Corrected this line
    res.send(`Hello there ${req.params.username}`); // Corrected this line
});



// exercise  2

app.get('/roll/:numberParameter', (req, res) => {
    const randomNumber = Math.ceil(Math.random() * req.params.numberParameter)
    
    if (!randomNumber) {
         res.send(`you must specify a number`)
    } else {
     res.send(`you rolled ${randomNumber}`)
    }
 })

// exercise  3



app.get('/collectibles/:index', (req, res) => {
    const item = collectibles[req.params.index];

    if (!item) { 
        res.send("This item is not yet in stock. Check back soon!");
    } else {
        res.send(`Hell yea this ${item.name}? For ${item.price} is super good deal, it can be yours!`);
    }
});


// exercise 4

app.get('/shoes', (req,res) => {
    const minPrice = req.query.minPrice
    const maxPrice = req.query.maxPrice
    const type = req.query.type 
   


    if (minPrice) {
        const shoesMinPrice = shoes.filter((shoe) => {
            return shoe.price > req.query.minPrice;
        })
        res.send(shoesMinPrice)
    } else if (maxPrice) {
        const shoesMaxPrice = shoes.filter((shoe) => {
            return shoe.price < req.query.maxPrice;
        })
        res.send(shoesMaxPrice)
    } else if (type) {
        const shoesType = shoes.filter((shoe) => {
            return shoe.type === req.query.type;
        })
        res.send(shoesType)
    } else {
        res.send(shoes)
    }      
});



app.listen(3000, () => {
        console.log("port 3000 running")
});