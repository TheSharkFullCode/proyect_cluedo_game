// ITERATION 1
const suspectsArray = [
    // mrGreen----------->
    {
      firstName: 'Jacob',
      lastName: 'Green',
      occupation: 'Entrepreneur',
      age: 45,
    description: 'He has a lot of connections',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green',
      // ...
    },
    // drOrchid---------------------->
    {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white',

    },
    // profPlum------------------------------>
    {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer',
        image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
        color: 'purple'
    },
    // missScarlet------------------------------------>
    {   
        // missScarlet
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actor',
        age: 31,
        description: 'She is an A-list movie star with a dark past',
        image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'red',
    },
    // mrsPeacock-------------------------------->
    {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue',
    },
    // mrMustard-------------------->
    {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow',
    }    
    
  ];
  console.log('el array de sospechosos');  
    console.log(suspectsArray[2]);
    
    
    
//Finish  Suspects Array-----^^


// Rooms Array
console.log('este es un array de habitacion');
  roomsArray =[
      {name: "Dining Room"},
      
      {name: 'Conservatory'},

      {name: 'Kitchen'},

      {name: 'Study'},
      
      {name: 'Library'},

      {name: 'Billiard Room'},

      {name: 'Lounge'},

      {name: 'Ballroom'},

      {name: 'Hall'},

      {name: 'Spa'},

      {name: 'Living Room'},

      {name: 'Observatory'},

      {name: 'Theater'},

      {name: 'Guest House'},

      {name: 'Patio'}
      
    ]

    console.log(roomsArray[0]);



// Weapons Array
let weaponArray = [
    {
        name: 'rope',
        weight: 10
    },
    {
        name: 'knife',
        weight: 8
    },
    {
        name: 'candlestick',
        weight: 2
    },
    {
        name: 'dumbbell',
        weight: 30
    },
    {
        name: 'poison',
        weight: 2

    },
    {
        name: 'axe',
        weight: 15

    },
    {
        name: 'bat',
        weight: 13
    },
    {
        name: 'trophy' ,
        weight: 25
    },
    {
        name: 'pistol',
        weight: 20
    }
    
];
console.log('este es un array de armas');
console.log(weaponArray[0]);

//  Weapons[5];
//  console.log(Weapons[5]);


// ITERATION 2


// cada habitacion tendra solo un nombre;
//  hatacion mas nombre:
// 1) crear una combinacion de sospechosos;
// otra de armas y uno de habitacion

// Declara una función llamada selectRandom para seleccionar aleatoriamente un elemento de una pila de cartas. La función debe esperar un array como argumento, y debe devolver un elemento aleatorio del array.

// function selectRandom(arrarys) {
//      arrarys =Math.floor(Math.random()*(max -min)+min)
//     return arrarys


// }


let max01 = 6;
let min01 = 0;
let numArray = Math.random()*(max01-min01)+min01;
numArray = parseInt(numArray);

console.log(numArray);



suspectsArray[numArray];
console.log(suspectsArray[numArray]);


function selectRandom (numeroRandom){
    numeroRandom =[Math.floor(Math.random()*suspectsArray.length)]
    suspectsArray[numeroRandom];
    weaponArray[numeroRandom];
    roomsArray[numeroRandom];    
    console.log(suspectsArray[numeroRandom]);

    console.log(roomsArray[numeroRandom]);

    console.log(weaponArray[numeroRandom]);
}



    



// console.log('------------vamos a otra carta----------------------');

// let min2 = 0;
// let max2 = 15;
// let numRandos2 = Math.random()*(max2-min2)+min2;
// numRandos2 = parseInt(numRandos2)


// console.log(roomsArray[numRandos2]);
// console.log(roomsArray);

// let min3 = 0;
// let max3 = 10;
// let Randn3 = Math.random()*(max3-min3)+min3;
// Randn3 = parseInt(Randn3)


// console.log(weaponArray[Randn3]);
// console.log(weaponArray);


// ITERATION 3
// Crear el misterio
let plotMistery = {};
function pickMystery(suspects,suspects2,suspects3) {

    suspects =  selectRandom(weaponArray[numeroRandom]);
    suspects2 =  selectRandom(weaponArray[numeroRandom]);
    suspects3 =  selectRandom(roomsArray[numeroRandom]);

    plotMistery ={
        suspects:suspects,
        suspectsroom: suspects3,
        suspectsweapon:suspects2,

    }
    
}

console.log(pickMystery);



// Declara una función llamada pickMystery que no recibe argumentos y devuelve un objeto con tres propiedades: sospechoso, arma y habitación, cada una de las cuales contiene como valor una carta de ese tipo específico. Puedes obtener una carta aleatoria de cada tipo llamando a selectRandom en cada pila de cartas.

// git add .
// git commit -m "Solved lab"
// git push origin master