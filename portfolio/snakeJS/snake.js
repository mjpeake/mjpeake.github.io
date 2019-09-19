// Canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 600;

window.onload=function(){
  // Document eventListeners
  document.addEventListener("keydown", changeDirection);
  document.addEventListener("keydown", restart);

  var scoreBox = document.getElementById('scoreBox');
  var highScoreBox = document.getElementById('highScoreBox');

  // Cell Sizes
  var smallCellSize = 10;
  var standardCellSize = 20;
  var largeCellSize = 50;
  var cellSize = standardCellSize;

  // Get Buttons
  var smallButton = document.getElementById("smallButton");
  var standardButton = document.getElementById('standardButton');
  var largeButton = document.getElementById('largeButton');

  // Button eventListeners
  smallButton.addEventListener("click", function(){
    this.blur();
    if(cellSize != smallCellSize) {
      this.classList.add("active");
      standardButton.classList.remove("active");
      largeButton.classList.remove("active");

      cellSize = smallCellSize;
      clearTimeout(ticker);   // Stop gameTicker if running
      newGame();
    }
  });
  standardButton.addEventListener("click", function(){
    this.blur();
    if(cellSize != standardCellSize) {
      this.classList.add("active");
      smallButton.classList.remove("active");
      largeButton.classList.remove("active");

      cellSize = standardCellSize;
      clearTimeout(ticker);
      newGame();
    }
  });
  largeButton.addEventListener("click", function(){
    this.blur();
    if(cellSize != largeCellSize) {
      this.classList.add("active");
      smallButton.classList.remove("active");
      standardButton.classList.remove("active");

      cellSize = largeCellSize;
      clearTimeout(ticker);
      newGame();
    }
  });

  // Snake Variables
  var initialX; var initialY;
  var dx = cellSize; var dy = 0;
  var changingDirection;
  let snake = [  {x: initialX, y: initialY},  {x: initialX - (cellSize * 1), y: initialY},  {x: initialX - (cellSize * 2), y: initialY},  {x: initialX - (cellSize * 3), y: initialY},  {x: initialX - (cellSize * 4), y: initialY},];

  // Other Variables
  var foodX; var foodY;
  var isNewGame = true;
  var startCountdown;
  var score = 0;

  newGame();

  function newGame() {
    isNewGame = true;

    updateButtons();
    drawScore();
    clearCanvas();

    initialX = cellSize * 5;
    initialY = cellSize * 5;

    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.font = "60px Arial";
    ctx.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2);
  }

  function resetGame() {
    isNewGame = false;
    snake = [  {x: initialX, y: initialY},  {x: initialX - (cellSize * 1), y: initialY},  {x: initialX - (cellSize * 2), y: initialY},  {x: initialX - (cellSize * 3), y: initialY},  {x: initialX - (cellSize * 4), y: initialY},];
    dx = cellSize; dy = 0;
    score = 0;
    startCountdown = 39;
    updateHighScore();
    createFood();
    gameTicker();
  }

  var ticker;
  function gameTicker() {
    ticker = setTimeout(function onTick() {
      if(didGameEnd()) {
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.font = "100px Arial";
        ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
        ctx.font = "40px Arial";
        ctx.fillText("Press Space to Restart", canvas.width / 2, (canvas.height / 2) + 50);
        return;
      }
      drawScore();
      clearCanvas();
      drawFood();
      // If there is a countdown
      if(startCountdown > 10) {
        drawSnake();
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.font = "100px Arial";
        ctx.fillText(Math.floor(startCountdown/10), canvas.width / 2, canvas.height / 2);
        startCountdown--;
      } else {
        advanceSnake();
        changingDirection = false;
        drawSnake();
      }
      gameTicker();
    }, 100)
  }

  function restart(event) {
    var key = event.which || event.keyCode;
    if((key === 32 && didGameEnd()) || (key === 32 && isNewGame)) {
      resetGame();
    }
  }

  function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  }

  function didGameEnd() {
    for (let i = 4; i < snake.length; i++) {
      const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y
      if (didCollide) {
        return true
      }
    }

    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > canvas.width - cellSize;
    const hitToptWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > canvas.height - cellSize;

    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
  }

  // ======================================================================== Snake ========================================================================
  function changeDirection(event) {
    event.preventDefault();
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    if (changingDirection) {
      return; // Stop changing direction if already doing so
    }
    changingDirection = true;

    const keyPressed = event.keyCode;
    const goingUp = dy === -cellSize;
    const goingDown = dy === cellSize;
    const goingRight = dx === cellSize;
    const goingLeft = dx === -cellSize;

    if (keyPressed === LEFT_KEY && !goingRight) { dx = -cellSize; dy = 0;}
    if (keyPressed === UP_KEY && !goingDown) {    dx = 0;    dy = -cellSize;  }
    if (keyPressed === RIGHT_KEY && !goingLeft) {    dx = cellSize;    dy = 0;  }
    if (keyPressed === DOWN_KEY && !goingUp) {    dx = 0;    dy = cellSize;  }
  }

  // Move Snake
  function advanceSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head); // Add new head to Snake

    const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatFood) {
      score++;
      updateHighScore();
      createFood();
    } else {
      snake.pop();
    }
  }

  // Draw Snake
  function drawSnake() {  snake.forEach(drawSnakePart);}
  function drawSnakePart(snakePart) {
    ctx.fillStyle = 'lightgreen';
    ctx.strokestyle = 'darkgreen';
    ctx.fillRect(snakePart.x, snakePart.y, cellSize, cellSize);
    ctx.strokeRect(snakePart.x, snakePart.y, cellSize, cellSize);
  }
  // ===================================================================== End of Snake =======================================================================

  // ====================================================================== Snake Food ========================================================================
  function createFood() {
    foodX = randomCord(canvas.width - cellSize);
    foodY = randomCord(canvas.height - cellSize);

    snake.forEach(function isFoodOnSnake(part) {
      const foodIsOnSnake = part.x == foodX && part.y == foodY
      if (foodIsOnSnake) {
        createFood();
      }
    });
  }
  function randomCord(range) {
    return ((Math.floor(Math.random() * (range / cellSize))) * cellSize);
  }
  function drawFood() {
    ctx.fillStyle = 'red';
    ctx.strokestyle = 'darkred';
    ctx.fillRect(foodX, foodY, cellSize, cellSize);
    ctx.strokeRect(foodX, foodY, cellSize, cellSize);
  }
  // ================================================================== End of Snake Food =====================================================================

  // ======================================================================== Score ===========================================================================
  function updateHighScore() {
    if(getCookie("highScore" + cellSize) != "") {
      if(score > getCookie("highScore" + cellSize)) {
        setCookie("highScore" + cellSize, score, 365);
        updateButtons();
      }
    }
  }

  function drawScore() {
    scoreBox.innerHTML = "Score: " + score;
    highScoreBox.innerHTML = "HighScore: " + getCookie("highScore" + cellSize);
  }

  function updateButtons() {
    smallButton.innerHTML = "Small World<br/><small>HighScore: " + getCookie('highScore' + smallCellSize) + "</small>";
    standardButton.innerHTML = "Standard World<br/><small>HighScore: " + getCookie('highScore' + standardCellSize) + "</small>";
    largeButton.innerHTML = "Large World<br/><small>HighScore: " + getCookie('highScore' + largeCellSize) + "</small>";
  }
  // ====================================================================  End of Score =======================================================================

  // ======================================================================= Cookie ===========================================================================
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "0";
  }
  // ===================================================================== End of Cookie ======================================================================
}
