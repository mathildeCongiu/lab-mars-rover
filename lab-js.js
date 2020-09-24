// Defining variables:
const rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [{ x: 0, y: 0 }],
  registeredObstacles: []
}

// New rovers can be added here
const rover2 = {
  direction: "S",
  x: 5,
  y: 5,
  travelLog: [{ x: 5, y: 5 }],
  registeredObstacles: []
}

/* Grid represents the space in which the rover is allowed to move. 
X represents the departure point but is removed when the rover moves. 
R represents the point in which the rover ends. 
O are obstacles. */

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


// Declaring functions ======================

function turnLeft(rover) {
    console.log("turnLeft was called!");
    switch(rover.direction) {
      case "N":
        rover.direction = "W";
        console.log("Rover is now in West direction!");
        break;
      case "S":
        rover.direction = "E";
        console.log("Rover is now in East direction!");
        break;
      case "E":
        rover.direction = "N";
        console.log("Rover is now in North direction!");
        break;
      case "W":
        rover.direction = "S";
        console.log("Rover is now in South direction!");
      default: 
        console.log("The direction has not been recognized");

    }
    
  }


function turnRight(rover) {
  console.log('turnRight was called!');
  switch(rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Rover is now in East direction!");
      break;
    case "S":
      rover.direction = "W";
      console.log("Rover is now in West direction!");
      break;
    case "E":
      rover.direction = "S";
      console.log("Rover is now in South direction!");
      break;
    case "W":
      rover.direction = "N";
      console.log("Rover is now in North direction!");
    default: 
      console.log("The direction has not been recognized");
  }
}

/* These two functions enable the rover to move one step forward or backward on the grid. 
They return the path, the obsctacles found on the way and avoid other rovers on the grid.*/
function moveForward(rover) {
  console.log("moveForward was called!");
  if (rover.x === 0 && rover.direction === "N" || rover.x === 9 && rover.direction === "S" || rover.y === 0 && rover.direction === "W" || rover.y === 9 && rover.direction === "E") {
    console.log("Move aborted. You can't go forward otherwise rover would be untracked.")
  }
  else { 
    switch(rover.direction) {
      case "N":
        grid[rover.x][rover.y] = "|";
        rover.x--;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go forward because there is an obstacle. Registering the obstacle into the database...");
          rover.registeredObstacles.push({x: rover.x, y: rover.y});
          rover.x++
        }
        else if (grid[rover.x][rover.y] === " " || grid[rover.x][rover.y] === "-" || grid[rover.x][rover.y] === "|"){
          grid[rover.x][rover.y] = "|" //The path in which the rover goes is printed on the grid.
        }
        else {
          console.log("Rover can't go forward because there is another rover.");
          rover.x++
        }

        break;
      case "S":
        grid[rover.x][rover.y] = "|";
        rover.x++;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go forward because there is an obstacle. Registering the obstacle into the database...");
          rover.registeredObstacles.push({x: rover.x, y: rover.y});
          rover.x--
        }
        else  if (grid[rover.x][rover.y] === " " || grid[rover.x][rover.y] === "-" || grid[rover.x][rover.y] === "|"){
          grid[rover.x][rover.y] = "|"
        }
        else {
          console.log("Rover can't go forward because there is another rover.");
          rover.x--
        }

        break;
      case "E":
        grid[rover.x][rover.y] = "-";
        rover.y++;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go forward because there is an obstacle. Registering the obstacle into the database...");
          rover.registeredObstacles.push({x: rover.x, y: rover.y});
          rover.y--
        }
        else if (grid[rover.x][rover.y] === " " || grid[rover.x][rover.y] === "-" || grid[rover.x][rover.y] === "|"){
          grid[rover.x][rover.y] = "-"
        }
        else {
          console.log("Rover can't go forward because there is another rover.")
          rover.y --
        }

        break;
      case "W":
        grid[rover.x][rover.y] = "-";
        rover.y--;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go forward because there is an obstacle. Registering the obstacle into the database...");
          rover.registeredObstacles.push({x: rover.x, y: rover.y});
          rover.y++
        }
        else if (grid[rover.x][rover.y] === " " || grid[rover.x][rover.y] === "-" || grid[rover.x][rover.y] === "|") {
          grid[rover.x][rover.y] = "-"
        }
        else {
          console.log("Rover can't go forward because there is another rover.");
          rover.y++
        }

        break;
      default: 
        console.log("The direction has not been recognized");
    }
    let newPosition = { x: rover.x, y: rover.y};
    rover.travelLog.push(newPosition);
  }
}

function moveBackward(rover) {
  console.log("moveBacward was called!");
  if (rover.x === 9 && rover.direction === "N" || rover.x === 0 && rover.direction === "S" || rover.y === 9 && rover.direction === "W" || rover.y === 0 && rover.direction === "E") {
    console.log("Move aborted. You can't go backward otherwise rover would be untracked.");
  }
  else { 
    switch(rover.direction) {
      case "N":
        grid[rover.x][rover.y] = "|";
        rover.x++;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go backward because there is an obstacle. Registering the obstacle into the database...");
          rover.registeredObstacles.push({x: rover.x, y: rover.y});
          rover.x--
        }
        else if (grid[rover.x][rover.y] === " " || grid[rover.x][rover.y] === "-" || grid[rover.x][rover.y] === "|") {
          grid[rover.x][rover.y] = "|"
        }
        else  {
          console.log("Rover can't go backward because there is another rover.");
          rover.x--
        }

        break;
      case "S":
        grid[rover.x][rover.y] = "|";
        rover.x--;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go backward because there is an obstacle. Registering the obstacle into the database...");
          rover.registeredObstacles.push({x: rover.x, y: rover.y});
          rover.x++
        }
        else if (grid[rover.x][rover.y] === " " || grid[rover.x][rover.y] === "-" || grid[rover.x][rover.y] === "|")
        {
          grid[rover.x][rover.y] = "|"
        }
        else {
          console.log("Rover can't go backward because there is another rover.");
          rover.x++
        }
        break;
      case "E":
        grid[rover.x][rover.y] = "-";
        rover.y--;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go backward because there is an obstacle. Registering the obstacle into the database...");
          rover.registeredObstacles.push({x: rover.x, y: rover.y});
          rover.y++
        }
        else if (grid[rover.x][rover.y] === " " || grid[rover.x][rover.y] === "-" || grid[rover.x][rover.y] === "|"){
          grid[rover.x][rover.y] = "-"
        }
        else {
          console.log("Rover can't go backward because there is another rover.");
          rover.y++
        }
        break;
      case "W":
        grid[rover.x][rover.y] = "-";
        rover.y++;
        if (grid[rover.x][rover.y] === "O") {
          console.log("Rover can't go backward because there is an obstacle. Registering the obstacle into the database...");
          rover.y--
        }
        else if (grid[rover.x][rover.y] === " " || grid[rover.x][rover.y] === "-" || grid[rover.x][rover.y] === "|"){
          grid[rover.x][rover.y] = "-"
        }
        else  {
          console.log("Rover can't go backward because there is another rover.");
          rover.y--
        }

        break;
      default: 
        console.log("The direction has not been recognized");
    }
    let newPosition = { x: rover.x, y: rover.y};
    rover.travelLog.push(newPosition);
  }
}


// This function unifies the different functions declared before and enables the rover to receive various orders in a row.
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
          console.log("Please enter a correct command. i: 'f' for forward, 'b' for backward, 'l' for left or 'r' for right.")
    }
    console.log(`Rover is on x=${rover.x} and y=${rover.y}.`);
  }
  console.log("Commands over. Please enter a new serie of commands to move the rover. \n\n **************** \n Grid view \n");

  grid[rover.x][rover.y] = "R";
  console.log(grid.join('\n'));
  console.log("\n **************** \n ");

  for (let i = 0; i < rover.travelLog.length; i++) {
    console.log(`Move nº${i +1} ==> Rover was in x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);
  };
  console.log("\n");
  if (rover.registeredObstacles.length == false) {
    console.log("No obstacle registered")
  }
  else {
    for (let j= 0; j< rover.registeredObstacles.length; j++)
    console.log(`Obstacle nº${j+1} is located on x=${rover.registeredObstacles[j].x}, y=${rover.registeredObstacles[j].y}`);
  };

  console.log("\n ----------------------------------- \n");
}

// Please enter your commands here

//------------- First serie of commands //-------------
// Enter the orders of the fisrt rover
command(rover, "rfjrfffflffffrflff")

//Enter the orders of the second rover
//command(rover2, "bbbbbbrfflffffff")


//------------- Second serie of commands //-------------
// Enter new orders for the fisrt rover
//command(rover, "rfjrfffflffffrflff")

//Enter new orders for the second rover
//command(rover2, "bbbbbbrfflffffff")

//command(rover, "ffrfflfrff")


//Possible enhancement for the script:

 /* Avoid to add two times an obstacle 
           let obstaclePosition = { x: rover.x, y: rover.y };
          for (j = 0; j< rover.registeredObstacles; j++) {
            if (registeredObstacles[j] !== obstaclePosition) {
             rover.registeredObstacles.push(obstaclePosition);
            }
          }

 Check if it is necessary to add a new variable for newObstacle as far as it is the same variable as newPosition
 It would be nice to erase the path after the two rovers have done the first serie of commands
 Change rovers variables into class rover*/