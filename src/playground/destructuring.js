
// const person = {
//     name: 'Parvinder',
    
//     age: 25,
//     location: {
//         city: 'Kitchener',
//         temp: 92
//     }
// }

// const {name: firstName= 'Anonymous', age} = person
// // const name = person.name
// // const age = person.age

// const {city, temp: temperature} = person.location

// console.log(`${firstName} is ${age}.`)

// if(city && temperature){

// console.log(`Its ${temperature} in ${city}`)

// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self Published'} = book.publisher



// console.log(publisherName)


// Array destructuring

// const address = ['1299 S Juniper Street', 'Kitchener', 'Ontario', 'N2P1B8']

// const [, , state = 'Quebec'] = address;

// console.log(`You are in ${state}.`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [ itemName, ,mediumPrice] = item


console.log(`A medium ${itemName} costs ${mediumPrice}`)