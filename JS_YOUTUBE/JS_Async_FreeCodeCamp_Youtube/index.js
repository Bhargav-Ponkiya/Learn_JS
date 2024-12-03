

/////////////////////// Synchronous - run line by line, run sequentially, if one process stucks then entire processes after that process stuck

/*
console.log("Synchronous");

console.log("run line by line");

console.log("run sequentially");

console.log("run linearlly");

console.log("if one stucks then entire after that stuck");
*/

/////////////////////// Asynchronous - run parallely //////////////////////

// setTimeout(callBackFunction,timeInMilliSeconds) - Asynchronous function provided by browser

/*
console.log("Synchronous");

console.log("run line by line");

setTimeout(()=>{console.log("run sequentially");
},4000)

console.log("run linearlly");

console.log("if one stucks then entire after that stuck");
*/



/////////////// Callback function ////////////////////////

// callback function - a function passed as an arguments
// higher order function - a function to which another function passed as an argument

/*
function one(call_Back) {
    console.log("this is higher order function");
    call_Back();
}

function two() {
    console.log("this is callback function");
}

one(two);
*/


// callback function - forming relation between functions

/*
let balling = (bat) => {
    console.log("Ball thrown. Please hit it with bat.");
    bat();
}

let bat = () => {
    console.log("Ball hitted with bat. Please do fielding");
}

balling(bat);
*/

/////////////////// Example of Ice-Cream - Callback hell /////////////////////////

/*
let stocks = {
    Fruits: ["apple", "banana", "pineapple", "watermelon"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings:["chocolate","peanuts"]
};


let order = (Fruit_order,call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_order]} is selected`);
       
        call_production();

    }, 2000);

   
}

let production = () => {
    setTimeout(() => {
        console.log("Production has started");

        setTimeout(() => {
            console.log("The fruit has been chopped");

            setTimeout(() => {
                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added as liquid`);
           
                setTimeout(() => {
                    console.log("The machine was started");

                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} was selected as holder`);
                   
                        setTimeout(() => {
                            console.log(`${stocks.toppings[1]} was added as toppings`);
                      
                           setTimeout(()=>{
                              console.log("serve ice cream");
                           },2000)
                      
                        }, 3000)
                   
                    }, 2000)

                },1000)
           
            }, 1000)

        },2000)

    }, 0);
}

order(1,production);

*/




/////////////////////// Promises ////////////////////////////

//                                 Promise
//                                 pending
// resolve                                  reject
// .then .then .then (Promise Chaining)    .catch(Error handling)
//                                   .finally

/*
let stocks = {
    Fruits: ["apple", "banana", "pineapple", "watermelon"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings:["chocolate","peanuts"]
};


let is_shop_open = true;
//let is_shop_open = false;

let order = (time,work) => {
    
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }  , time)
            
        } else {
            reject(console.log("our shop is closed"));
        }
    });
 }

order(2000, () => console.log(`${stocks.Fruits[1]} was selected`))

    .then(() => {
        return order(0, () => console.log("Production has started"));
    })

    .then(() => {
        return order(2000, () => console.log("The fruit was chopped"));
    })

    .then(() => {
        return order(1000, () =>
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected as a liquid`));
    })
    
 .then(() => {
    return order(1000, () => console.log("start the machine")); 
 })
    
 .then(() => {
    return order(2000, () => console.log(`${stocks.holder[0]} is selected as a holder`)); 
 })
    
 .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was selected as a topping`)); 
 })

  .then(() => {
    return order(1000, () => console.log("Ice-cream was served")); 
 })


    .catch(() => {
    console.log("Customer left");
})

    .finally(() => {
    console.log("Day ended, Shop is closed.");
})

*/




//////////////////////// Async / Await //////////////////////////////////////

/*
async function order() {
    try {
        await fakeFunctionNotExists;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("runs code anyways");
    }
}

order();

// order().then(() => {
//     console.log("we can write .then .catch .finally here also");
// })

*/



//////////////// Async - Await example /////////////////

/*
let toppings_choice = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(console.log("Which topping do you like?"));
        }, 3000);
    })
}

async function kitchen() {
    console.log("A");
    console.log("B");
    console.log("C");

    await toppings_choice();

    console.log("D");
    console.log("E");

}

kitchen();

console.log("doing the dishes");
console.log("cleaning the table");
console.log("handle finance");
*/


/////////////////////// Async - Await Example /////////////////////////////////


/*
let stocks = {
    Fruits: ["apple", "banana", "pineapple", "watermelon"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings:["chocolate","peanuts"]
};


let is_shop_open = true;
//let is_shop_open = false;

function time(ms) {
    return new Promise((resolve,reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("shop is closed"))
        }
    })
}


async function kitchen() {
    try {
        await time(2000);
        console.log(`${stocks.Fruits[2]} was selected as a fruit`);

        await time(0);
        console.log("start the production");

        await time(2000);
        console.log("cut the fruit");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added as liquid`);

        await time(1000);
        console.log("start the machine");

        await time(2000);
        console.log(`${stocks.holder[1]} was selected as a holder`);

        await time(3000);
        console.log(`${stocks.toppings[1]} was selected as a topping`);

        await time(2000);
        console.log("server ice-cream");
    }
    catch (error) {
        console.log("customer left",error);
    }
    finally {
        console.log("runs anyways. Day ended, shop is closed.");
    }
}

kitchen();

*/











































