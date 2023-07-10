# LAB | JS Clue - Mixing objects and arrays

Do you remember the classic detective board game Clue? It was a very popular game in the 90's.

The plot starts with the death of Mr. Boddy, the very wealthy owner of Tudor Manor. He was killed under _highly suspicious circumstances_, and it's the player's mission to uncover which **suspect** murdered him, what **weapon** was used, and in which **room** of the mansion the crime took place.

When playing Clue, these three details are represented by a **suspect** card, a **weapon** card and a **room** card that are kept hidden in an envelope for the duration of the game. By progressively revealing the remaining cards, the players can infer which are the three cards that are hidden. When a player is confident that they know the solution to the mystery, they will try to reveal it. If a player guesses correctly, they win the game.

<p align="center"><img width="400" src="https://i.imgur.com/AZWieq9.jpg=300"/></p>

## Requirements

- Fork this repo
- Clone this repo

<br>

## Submission

- Upon completion, run the following commands:

```sh
git add .
git commit -m "Solved lab"
git push origin master
```

- Create a Pull Request so that your TAs can check your work.

<br>


## Test Your Code

This LAB is equipped with unit tests to provide automated feedback on your lab progress. In case you want to check the tests, they are in the `tests/clue.spec.js` file.



To run the tests and your JavaScript code, open the `SpecRunner.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.



To see the outputs of the `console.log` in your JavaScript code, open the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console).

<br>



## Instructions

You will be working in the `src/clue.js` file, which is already loaded in the `SpecRunner.html` file.

To run the tests and your JavaScript code, open the `SpecRunner.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.

<br>




### Iteration 1: Create the cards

Clue has three different _card types_: **suspects**, **rooms**, and **weapons**.

Let's create an `array` for every _card type_. These arrays should be named `suspectsArray`, `weaponsArray`, `roomsArray`.
Each array will contain _objects_, where each _object_ represents one card.

All of the information you need about **suspects**, **rooms**, and **weapons** can be found on the `DATA.md` file.

_Suggestion_: Copy this data into the `clue.js` file and model it into objects nested inside your cards arrays. This is a great chance for you to experiment with IDE shortcuts, multiple-line selection, find and replace, and other great features that VS Code provides.

<br>

#### Suspects

All of six possible _suspects_ in Clue have a **first name**, **last name**, **occupation**, **age**, **description**, **image** and **color**.

To complete this iteration, you should have an array that looks something like the following:

```javascript
const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur'
    // ...
  }
  // ...
];
```

<br>

#### Weapons

There are a total of nine _weapons_. Each of them has a different **name** and **weight**.

<br>

#### Rooms

The game board represents the blueprints of the mansion and features fifteen different _rooms_. Each room will only have a **name**.

<br>

### Iteration 2: Create the mystery

At the beginning of the game, players shuffle each of the card stacks to create a combination of _suspect_, _weapon_ and _room_. This will be the mystery to solve.

<br>

#### Random selector

Declare a function named `selectRandom` to randomly select one element from a card stack. The function should expect an `array` as an argument, and should return a random element from the array.

<br>

#### Create the mystery

Declare a function named `pickMystery` that takes no arguments and returns an object with three properties: _suspect_, _weapon_ and _room_, each holding as a value a card of that specific type. You can get a random card of each type by calling `selectRandom` on each card stack.

<br>

### Iteration 3: Reveal the mystery

At last, we are ready to reveal the mystery.

Declare a function named `revealMystery` that receives an _envelope_ `object` (with the shape of the object returned by `pickMystery`) as the single argument, and returns a reveal message in the following format:

**\<FIRST NAME\> \<LAST NAME\> killed Mr. Boddy using the \<WEAPON\> in the \<ROOM\>!**

<br>





## Extra Resources

- [Data Structures: Objects and Arrays](http://eloquentjavascript.net/04_data.html)
- [20 Mind-blowing facts about Cluedo](http://whatculture.com/offbeat/20-mind-blowing-facts-you-didnt-know-about-cluedo)
- [Cluedo - Wikipedia](https://en.wikipedia.org/wiki/Cluedo)



**Happy coding!** 💙
