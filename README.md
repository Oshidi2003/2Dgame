# 2D Game
My first Year 2D Game Project
😊
Sure, here's a detailed description for your 2D game project that you can use to update your GitHub account:

---

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


