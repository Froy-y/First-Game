// canvases from html 
const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
canvas4.width = 600;
canvas4.height = 600;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
canvas5.width = 600;
canvas5.height = 600;

//global variables
const grid = 80; 
let keys = []; // whatever key was pressed on keyboard
let score = 0; // 0 at first
let collisionsCount = 0;
let frame = 0; // so we can do a call to action every 10 frames or something like that
let gameSpeed = 1; // increase whenever we score a point
let safe = false

const particlesArray = []; // will hold all particle objects for dust
const maxParticles = 300; // limit how many we create so we can watch our preformance issues
const ripplesArray = []; // hold water ripple particle object
const carsArray = []; // randomize cars
const logsArray = []; // will contain turtle and logs

//images
const background_lvl2 = new Image();
background_lvl2.src = 'background_lvl2.png';

const grass = new Image();
grass.src = 'grass.png';

const collisions = new Image();
collisions.src = 'collisions.png';

const turtle = new Image();
turtle.src = 'turtle.png';

const log = new Image();
log.src = 'log.png';

const car = new Image();
car.src = 'cars.png';
let numberOfCars = 3;

const froggerSprite = new Image();
froggerSprite.src = 'frogger.png';