# 2D Game
My first Year 2D Game Project
😊

---
![image](https://github.com/Oshidi2003/2Dgame/assets/156042624/62afe1f0-4626-48b6-9622-6252c618bc47)

![img5](https://github.com/Oshidi2003/2Dgame/assets/156042624/a5978c39-0d71-4a61-a6b0-2f7d62779a54)



![img2](https://github.com/Oshidi2003/2Dgame/assets/156042624/6f602ee9-72e1-4e67-865c-d8a8bbdbf818)

![img3](https://github.com/Oshidi2003/2Dgame/assets/156042624/91c6f0b3-26d8-41fa-9010-97020b79ca89)

![img4](https://github.com/Oshidi2003/2Dgame/assets/156042624/d4c3a73d-2d7c-4cd2-972a-62d2445c7d39)



## 2D Running and Jumping Game

### Overview
This is a simple 2D running and jumping game created as a first-year project. The game involves a character that continuously runs and jumps to avoid obstacles. The game includes functionalities for running, jumping, scoring, and detecting collisions with obstacles. The game also features background music and sound effects for running, jumping, and game over scenarios.

### Features
- **Continuous Running:** The character runs continuously, with the animation changing every 100ms.
- **Jump Mechanic:** The character can jump when the spacebar is pressed, with a specific animation sequence and movement in the y-axis.
- **Background Movement:** The background scrolls to create an illusion of continuous forward movement.
- **Obstacles:** Obstacles are dynamically created and move towards the character. Collision detection is implemented to end the game when the character hits an obstacle.
- **Scoring System:** The game keeps track of the score, which increases over time as the character runs.
- **Game Over State:** When the character collides with an obstacle, the game transitions to a game over state with a dead animation and displays the final score.
- **Restart Functionality:** The game can be restarted by refreshing the page.

### Controls
- **Enter Key (13):** Starts the game.
- **Spacebar (32):** Makes the character jump.

### Audio
- **Running Sound (`run.mp3`):** Plays when the character is running.
- **Jumping Sound (`jump.mp3`):** Plays when the character jumps.
- **Dead Sound (`dead.mp3`):** Plays when the game is over.

### Code Description

#### Variables
- `rs`, `js`, `ds`: Audio objects for running, jumping, and dead sounds respectively.
- `rw`, `bw`, `mw`, `sw`, `jw`, `dw`: Interval variables for different game mechanics.
- `a`, `b`, `j`, `mt`, `u`, `d`: Various counters and state variables for animations and game logic.

#### Functions
- `key(event)`: Handles keypress events to start the game and trigger jumps.
- `run()`: Updates the running animation.
- `back()`: Moves the background to create a running effect.
- `f()`: Creates obstacles at specific intervals.
- `move()`: Moves obstacles towards the character and checks for collisions.
- `jump()`: Handles the jump animation and movement.
- `score()`: Updates the score.
- `dead()`: Handles the dead animation and game over state.
- `restart()`: Reloads the page to restart the game.

### How to Run
1. Clone the repository.
2. Open `index.html` in a web browser.
3. Press `Enter` to start the game and `Spacebar` to make the character jump.
4. The game will display the final score and an option to restart when the character collides with an obstacle.

### Future Enhancements
- Adding different levels with increasing difficulty.
- Introducing power-ups and bonuses.
- Improving graphics and animations.
- Adding more sound effects and background music options.


