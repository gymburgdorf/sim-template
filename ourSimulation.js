function buildWorld() {
	
	world = new World({
		hUnits: 200,
		coords: {step: 50},
		unit: "m",
		minUnits: {x: 0, y:0},
		img: "img/oceanSky.jpg",
		fontColor: "#ffffff"
	});

	flugi = new Actor({img: "img/flugi50.png", x: -40, y: 60, wUnits: 14});
	glider = new Actor({img: "img/Segelflieger50.png", x: 0, y: 100, wUnits: 14});
}

function setup() {
	t = 0;
	dt = 0.016;       // Zeitschritt in Sekunden
	flugi.vx = 35;
	flugi.vy = 0;
	glider.vx = 25;
	glider.vy = 0;
}

window.addEventListener("keydown", taste);

function taste(event) {
	console.log("Eine Taste wurde gedrückt:", event.key)
} 

function loop() {
	flugi.x += flugi.vx * dt
	glider.x += glider.vx * dt

	world.update();
}
