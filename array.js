const food = require('./food.json');
console.log(food);

console.log("List all food items")
for(let i = 0 ; i < food.length ; i++)
{
    console.log(food[i].foodname);
}

console.log("list all the food items with category vegetables");
console.log(
    food.filter(
        (x) => x.category == 'Vegetable'
    )
)

console.log("list all the food items with category fruit")
console.log(
    food.filter(
        (x) => x.category =='Fruit'
    )
)

console.log("list all the food items with category protien")
console.log(
    food.filter(
        (x) => x.category == 'Protein'
    )
)

console.log("list all the food items with category nuts")
console.log(
    food.filter(
        (x) => x.category == 'Nuts'
    )
)

console.log("list all the food items with category grains")
console.log(
    food.filter(
        (x) => x.category == 'Grain'
    )
)

console.log("list all the food items with category dairy")
console.log(
    food.filter(
        (x) => x.category == 'Dairy'
    )
)

console.log("list all the food items with calorie above 100")
function calAbove100(food)
{
    for(let i = 0 ; i < food.length ; i++)
    {
        if(food[i].calorie >= 100)
        {
            console.log(food[i])
        }
    }
}
calAbove100(food);

console.log("list all the food items with calorie below 100")
function calBelow100(food)
{
    for(let i = 0 ; i < food.length ; i++)
    {
        if(food[i].calorie < 100)
        {
            console.log(food[i])
        }
    }
}
calBelow100(food)

console.log("list all the food items with highest protien content to lowest")

console.log("list all the food items with highest protien content to lowest")
const ascProtein = food.sort((a, b) => b.protiens - a.protiens)
console.log(ascProtein)

console.log("list all the food items with lowest cab content to highest")
const descProtein = food.sort((a, b) => a.proteins - b.proteins)
console.log(descProtein)


    