// Defining variables:
const rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [{ x: 0, y: 0 }],
  registeredObstacles: []
}

const rover2 = {
  direction: "S",
  x: 5,
  y: 5,
  travelLog: [{ x: 5, y: 5 }]
}

// Grid represents the space in which the rover is allowed to move. X in the departure point, and R the final point in which the rover will be found in the end. O are obstacles.
let grid = [ 
  ['X','O',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ','O',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ','O',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','X',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ','O',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ','O',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '] ]


// ======================

function turnLeft(rover) {
    console.log('turnLeft was called!');
    switch(rover.direction) {
      case "N":
        rover.direction = "W"
        console.log("Rover is now in West direction !")
        break;
      case "S":
        rover.direction = "E"
        console.log("Rover is now in East direction !")
        break;
      case "E":
        rover.direction = "N"
        console.log("Rover is now in North direction !")
        break;
      case "W":
        rover.direction = "S"
        console.log("Rover is now in South direction !")
    }
  }


 function turnRight(rover) {
  console.log('turnRight was called!');
  switch(rover.direction) {
    case "N":
      rover.direction = "E"
      console.log("Rover is now in East direction !")
      break;
    case "S":
      rover.direction = "W"
      console.log("Rover is now in West direction !")
      break;
    case "E":
      rover.direction = "S"
      console.log("Rover is now in South direction !")
      break;
    case "W":
      rover.direction = "N"
      console.log("Rover is now in North direction !")
  }
}

// These two functions enable the rover to move one step forward or backward on the grid
function moveForward(rover) {
  console.log('moveForward was called');
  if (rover.x === 0 && rover.direction === "N" || rover.x === 9 && rover.direction === "S" || rover.y === 0 && rover.direction === "W" || rover.y === 9 && rover.direction === "E") {
    console.log("Move aborted. You can't go forward otherwise rover would be untracked")
  }
  else { 
    switch(rover.direction) {
      case "N":
        rover.x--;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go forward because there is an obstacle. Registering the obstacle into the database...");
          rover.registeredObstacles.push(rover.x, rover.y);
          rover.x++
        }
        else if (grid[rover.x][rover.y] !== " ") {
          console.log("Rover can't go forward because there is another rover");
          rover.x++
        }
        else {
          grid[rover.x][rover.y] = "|"
        }
        break;
      case "S":
        rover.x++;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go forward because there is an obstacle. Registering the obstacle into the database...");
          rover.registeredObstacles.push(rover.x, rover.y);
          rover.x--
        }
        else if (grid[rover.x][rover.y] !== " ") {
          console.log("Rover can't go forward because there is another rover");
          rover.x--
        }
        else {
          grid[rover.x][rover.y] = "|"
        }
        break;
      case "E":
        rover.y++;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go forward because there is an obstacle. Registering the obstacle into the database...");
          rover.registeredObstacles.push(rover.x, rover.y);
          rover.y--
        }
        else if (grid[rover.x][rover.y] !== " ") {
          console.log("Rover can't go forward because there is another rover")
          rover.y --
        }
        else {
          grid[rover.x][rover.y] = "-"
        }
        break;
      case "W":
        rover.y--;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go forward because there is an obstacle. Registering the obstacle into the database...");
          rover.registeredObstacles.push(rover.x, rover.y);
          rover.y++
        }
        else if (grid[rover.x][rover.y] !== " ") {
          console.log("Rover can't go forward because there is another rover");
          rover.y++
        }
        else {
          grid[rover.x][rover.y] = "-"
        }
        break;
    }
    let newPosition = { x: rover.x, y: rover.y};
    rover.travelLog.push(newPosition);
  }
}

function moveBackward(rover) {
  if (rover.x === 9 && rover.direction === "N" || rover.x === 0 && rover.direction === "S" || rover.y === 9 && rover.direction === "W" || rover.y === 0 && rover.direction === "E") {
    console.log("Move aborted. You can't go backward otherwise rover would be untracked")
  }
  else { 
    switch(rover.direction) {
      case "N":
        rover.x++;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go backward because there is an obstacle. Registering the obstacle into the database...");
          rover.registeredObstacles.push(rover.x, rover.y);
          rover.x--
        }
        else if (grid[rover.x][rover.y] !== " ") {
          console.log("Rover can't go backward because there is another rover");
          rover.x--
        }
        else {
          grid[rover.x][rover.y] = "|"
        }
        break;
      case "S":
        rover.x--;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go backward because there is an obstacle. Registering the obstacle into the database...");
          rover.registeredObstacles.push(rover.x, rover.y);
          rover.x++
        }
        else if (grid[rover.x][rover.y] !== " ") {
          console.log("Rover can't go backward because there is another rover");
          rover.x++
        }
        else {
          grid[rover.x][rover.y] = "|"
        }
        break;
      case "E":
        rover.y--;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go backward because there is an obstacle. Registering the obstacle into the database...");
          rover.registeredObstacles.push(rover.x, rover.y);
          rover.y++
        }
        else if (grid[rover.x][rover.y] !== " ") {
          console.log("Rover can't go backward because there is another rover");
          rover.y++
        }
        else {
          grid[rover.x][rover.y] = "-"
        }
        break;
      case "W":
        rover.y++;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go backward because there is an obstacle. Registering the obstacle into the database...");

          //let obstaclePosition = { x: rover.x, y: rover.y };
          //for (j = 0; j< rover.registeredObstacles; j++) {
            //if (registeredObstacles[j] !== obstaclePosition) {
             // rover.registeredObstacles.push(obstaclePosition);
            //}
          //}

          rover.y--
        }
        else if (grid[rover.x][rover.y] !== " ") {
          console.log("Rover can't go backward because there is another rover");
          rover.y--
        }
        else {
          grid[rover.x][rover.y] = "-"
        }
        break;
    }
    let newPosition = { x: rover.x, y: rover.y};
    rover.travelLog.push(newPosition);
  }
}


// This function unifies the different functions declared before and enables the rover to receive various orders
function command(rover, orders) {
  for (let i = 0; i< orders.length; i++) {
      let order = orders[i]
      switch(order) {
        case "l":
          turnLeft(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackward(rover);
          break;
        default: 
          console.log("Please enter a correct command. i: 'f' for forward, 'b' for backward, 'l' for left or 'r' for right")
    }
    console.log(`Rover is on ${rover.x} and ${rover.y}.`);
  }
  console.log("Commands over. Please enter a new serie of commands to move the rover.");

  grid[rover.x][rover.y] = "R";
  console.log(grid.join('\n'));

  for (let i = 0; i < rover.travelLog.length; i++) {
    console.log(`Path ${i} ==> x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);
  }
  console.log(rover.registeredObstacles)
  }

// Please enter your commands here

// Enter the orders of the fisrt rover
command(rover, "rrffffflffffff")

//Enter the orders of the second rover
command(rover2, "bbbbbbb")


//command(rover, "ffrfflfrff")

 // correct push of obstacles into rover's database
 //add comments */

  