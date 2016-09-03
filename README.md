# FCC-Simon-Game

##Install##

In order to start using this project, you can either clone it or download it as
a zip file. After which, you need to install the dependencies of the project.

Acquire node from the [Node.js website](https://nodejs.com/en/).

Install the bower dependencies with `bower install`

Install the node_modules dependencies with `npm install`

## How to Use

Commands:

`gulp build` will move and minify files from the src folder and bower
dependencies into a build folder.

`gulp serve` will host the files on localhost:3000 and auto-refresh whenever a
file in the src folder is changed or added.

`gulp` will both build and host the application.

## Project Description

FreeCodeCamp has a series of projects with increasingly complex [requirements](https://www.freecodecamp.com/challenges/build-a-simon-game).
This project is a web version of the Simon Says Game.

### Requirements
1. I am presented with a random series of button presses.
2. Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.
3. I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.
4. If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.
5. I can see how many steps are in the current series of button presses.
6. If I want to restart, I can hit a button to do so, and the game will return to a single step.
7. I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.
8. I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.

### Technologies Used:
+ HTML5/CSS3/JS
+ Gulp.js
+ Vanilla JS MVC model

### Live Demo
http://codepen.io/stancheta/full/bZYEqq

---
