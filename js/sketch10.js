let libs = ['https://unpkg.com/p5.tween/dist/p5.tween.min.js']
let tween
let C
let U
let activeimg
let imgs = []
let letters = []
let activeLetters = 0
let startX = 100
let startY = 170
let ar 

const myShape = {
	x: startX,
	y: startY,
	w: 200,
	h: 200
}


function preload() {
	C = loadImage('data/stamp/HGK_03.png')
	U = loadImage('data/stamp/HGK_21.png')
	imgs.push(C)
	imgs.push(U)
}

function setup() {
	
	ar = createGraphics(895, 1280, P2D, document.getElementById('canvas'))
	// background(0, 0, 0)
	background(0, 0, 0)
	createCanvas(895, 1280)
	tween = p5.tween.manager.addTween(myShape)
	motionX()
	activeimg = random(imgs)
	letters.push(motionX)
	letters.push(motionT)
	letters.push(motionR)
	letters.push(motionA)
	tween.startTween()
}

function draw() {
	clear()
	ar.reset()
	// ar.scale(.8)
	if(!tween.active) {
		tween.resetMotions()
		myShape.x = startX
		myShape.y = startY
		activeLetters++
		ar.clear()
		letters[activeLetters % 4]()
		tween.startTween()
	}
	// background(0)

	noCursor()
	ar.push()
	// translate(-width/2, -height*.3)

	let loopCount = 15
	for(let d = 0; d < loopCount; d++) {
		let scl = .14 //frameCount*.001%3
		ar.image(activeimg, myShape.x + d * 5, myShape.y + sin(d * .4 + frameCount * .35) * 30, myShape.w, myShape.h)
	}
	ar.pop()
	image(ar,0,0)
}


function motionX() {
	activeimg = random(imgs)
	
  tween.addMotions([
        { key: 'x', target: 550 },
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 300 },
        { key: 'y', target: 480 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 550 },
        { key: 'y', target: 170 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 300 },
        { key: 'y', target: 480 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 170 },
      ], 1000)
}

function motionT() {
	activeimg = random(imgs)
	
	tween.addMotions([
        { key: 'x', target: 500 },
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 290 },
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 290 },
        { key: 'y', target: 850},
      ], 1000)
    .addMotions([
        { key: 'x', target: 290 },
        { key: 'y', target: 170 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 170},
      ], 1000)
  
}

function motionR() {
	activeimg = random(imgs)
	
	myShape.x = 350
	tween.addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 170 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 500 },
        { key: 'y', target: 'y'},
      ], 1000)
    .addMotions([
        { key: 'x', target: 550 },
        { key: 'y', target: 300},
      ], 1000)
    .addMotions([
        { key: 'x', target: 500 },
        { key: 'y', target: 480},
      ], 1000)
    .addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 'y'},
      ], 1000)
    .addMotions([
        { key: 'x', target: 580 },
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 480 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 170 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 350 },
        { key: 'y', target: 170 },
      ], 1000)

}

function motionA() {
	activeimg = random(imgs)

	  	myShape.x = 350
	tween.addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 350 },
        { key: 'y', target: 170 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 580 },
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 500 },
        { key: 'y', target: 580},
      ], 1000)
    .addMotions([
        { key: 'x', target: 200 },
        { key: 'y', target: 'y'},
      ], 1000)
    .addMotions([
        { key: 'x', target: 350 },
        { key: 'y', target: 170},
      ], 1000)

}
