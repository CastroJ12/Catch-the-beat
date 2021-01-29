let mySound;
let tracks = ["song1.mp3", "song4.mp3", "song7.mp3"];
let songTitle = ["Blue Ain't Your Color"];
let songArtist = ["Keith Urban"];
//var song;

let rock;
let country;
let jazz;
let rectangle;


function resetAllSongs() {
  if (country.isPlaying()) {
    country.stop();
  }
  if (rock.isPlaying()) {
    rock.stop();
  }
  if (jazz.isPlaying()) {
    jazz.stop();
  }
}

// Allows music to play by using keys
function keyTyped() {
  //Chose by pressing c, j, or r
  if(key === 'c'){
    resetAllSongs();
    country.play();
    gameScreen();
    levelCountry();
  }
  else if(key === 'j'){
    resetAllSongs();
    jazz.play();
    gameScreen();
    levelJazz();
  }
  else if(key === 'r'){
    resetAllSongs();
    rock.play();
    gameScreen();
    levelRock();
  } else {
    return false;
  }
}


let drop1x, drop1y, drop1d, drop1FallSpeed, drop2x, drop2y, drop2d, drop2FallSpeed;
let playerX, score, hit, colors, page;

class chord{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.d = 30;
    this.fallSpeed = random(3,5);
  }
  show() {
    noStroke();
    colors = random(0, 360);
    fill(colors, 50, 80);
    ellipse(this.x, this.y, this.d);
  }
  drip() {
    this.y += this.fallSpeed;


    if (this.y > height) {
      this.x = 0;
      this.y = 0;
      this.d = 30;
      this.fallSpeed = random(3,5);
    }
  }
}


function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
  background(0);
  colorMode(HSB, 44);
 
  jukeBox = loadImage('jukeBox.png');

  //Loads game avatars
  rockstar = loadImage('assets/rockstar.gif');
  countryArtist = loadImage('assets/countryMan.gif');
  saxPlayer = loadImage('assets/saxPlayer.png');
  playerX = width/2;

  rock = loadSound("song7.mp3")
  country = loadSound("song1.mp3")
  jazz = loadSound("song4.mp3")

  chord1 = new chord();
  chord1.x = width/2-125;
  chord2 = new chord();
  chord2.x = width/2-50;
  chord3 = new chord();
  chord3.x = width/2+50;
  chord4 = new chord();
  chord4.x = width/2+125;

  score = 0;
  page = "main";
  

}

function draw(){
  if(page === 'main'){
    mainDisplay();
    chooseLevel();
  }
  else if(page === 'game'){
    gameScreen();
  }
}



function mainDisplay(){
  background(0);
  image(jukeBox, width/2 - 87, height/2, 275, 300);

  //Game title
  textSize(40);
  fill('red');
  text("CATCH THE BEAT", width/2-125, height/12);

}


function chooseLevel(){
  //Chose which level/genre the user would like to play
  fill(33, 100, 50);
  textSize(20);
  text("Choose what level you would like to play:", width/2-140, height/10+50);
  
  fill(33, 100, 50);
  text("Press \'c\' to play Level 1: Country", width/2-100, height/8+55);
  text("Press \'j\' to play Level 2: Jazz", width/2-100, height/6+50);
  text("Press \'r\' to play Level 3: Rock", width/2-100, height/4+20);
  
  //Chose by pressing c, j, or r
  if(key === 'c'){
    gameScreen();
    levelCountry();
    
  }
  else if(key === 'j'){
    gameScreen();
    levelJazz();
    
  }
  else if(key === 'r'){
   gameScreen();
    levelRock();
    
  }
}

function gameScreen(){
  background(0);

  //Guitar neck
  fill(33);
  rect(width/2-200, 0, 400, height);
  //Guitar fret wires
  fill(7, 100, 50);
  rect(width/2-200, height/7, 400, 35);
  rect(width/2-200, height/3, 400, 35);
  rect(width/2-200, height/1.5, 400, 35);

  //Guitar strings
  stroke(5);
  line(width/2-125, 5, width/2-125, height);
  line(width/2-50, 5, width/2-50, height);
  line(width/2+50, 5, width/2+50, height);
  line(width/2+125, 5, width/2+125, height);

  //Avartar box
  fill('red');
  rect(width/2-250, height/1.25, 500, 50);

  textSize(25);
  text("Score: " + score, 30, 30);

  chords();
  checkCollisions();
}



//
// function keyPressed(xPosition){
//   console.log("in keypressed: ", keyCode);
//   if(keyCode === LEFT_ARROW){
//     xPosition -= 3;
//     console.log("left");
//   }
//   else if(keyCode === RIGHT_ARROW){
//     xPosition += 3;
//     console.log("right");
//   }
  
// }

function levelCountry(){
  fill('red');
  rectangle = rect(playerX, height/1.25+5, 38, 40);
  image(countryArtist, playerX, height/1.25+5, 38, 45);

  if(mouseX > playerX){
    playerX += 3;
  }
  else if(mouseX < playerX){
    playerX -= 3;
  }
  
  if(playerX >= width/2+210){
    playerX -= 3;
  }
  else if(playerX < width/2-250){
    playerX += 3;
  }
}

function levelJazz(){
  fill('red');
  rectangle = rect(playerX, height/1.25+5, 38, 40);
  image(saxPlayer, playerX, height/1.25+5, 38, 45);

  if(mouseX > playerX){
    playerX += 3;
  }
  else if(mouseX < playerX){
    playerX -= 3;
  }
  
  if(playerX >= width/2+210){
    playerX -= 3;
  }
  else if(playerX < width/2-250){
    playerX += 3;
  }

}

function levelRock(){
  fill('red');
  rectangle = rect(playerX, height/1.25+5, 38, 40);
  image(rockstar, playerX, height/1.25+5, 38, 45);

  if(mouseX > playerX){
    playerX += 3;
  }
  else if(mouseX < playerX){
    playerX -= 3;
  }
  
  if(playerX >= width/2+210){
    playerX -= 3;
  }
  else if(playerX < width/2-250){
    playerX += 3;
  }
}

//Player movement code
/*function keyPressed(){
  //left and right arrows move the character, esc return to main menu
 if (keyCode === RIGHT_ARROW) {
   playerX += width/20;
  }else if (keyCode === LEFT_ARROW) {
    playerX -= width/20;
  }else if (keyCode === ESCAPE) {
    gameIsOver = true
  } 
  else {
    return false;
  }
}*/

function chords(){
  chord1.show();
  chord2.show();
  chord3.show();
  chord4.show();
  
  chord1.drip();
  chord1.x = width/2-125;
  chord2.drip(); 
  chord2.x = width/2-50;
  chord3.drip(); 
  chord3.x = width/2+50;
  chord4.drip();
  chord4.x = width/2+125;

  chord1.drip();
  chord2.drip();
  chord3.drip();
  chord4.drip();
}

function checkCollisions() {
  //hit = collideRectCircle(this.chord.x, this.chord.y, playerX,height/1.25+5,38,40);
  if((chord1.x > playerX && chord1.x < playerX+38) && (chord1.y > (height/1.25+5) && chord1.y < (height/1.25+5)+40)){
    score++;
  } 
  else if((chord2.x > playerX && chord2.x < playerX+38) && (chord2.y > (height/1.25+5) && chord2.y < (height/1.25+5)+40)){
    score++;
  } 
  else if((chord3.x > playerX && chord3.x < playerX+38) && (chord3.y > (height/1.25+5) && chord3.y < (height/1.25+5)+40)){
    score++;
  } 
  else if((chord4.x > playerX && chord4.x < playerX+38) && (chord4.y > (height/1.25+5) && chord4.y < (height/1.25+5)+40)){
    score++;
  }
  
}