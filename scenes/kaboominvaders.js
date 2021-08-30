kaboom({
	global: true,
	fullscreen: false,
	width: 640,
	height: 480,
	scale: 1.25,
	debug: true,
	clearColor: [0, 0, 0, 0],
});

loadSound('theme', 'sounds/theme.mp3');
loadSound('laserzap', 'sounds/laser.mp3');
loadSound('win', 'sounds/win.mp3');
loadSound('lose', 'sounds/lose.mp3');
loadSound('crash', 'sounds/crash.mp3');
loadSound('explosion', 'sounds/explosion.mp3');
loadSprite('background', 'sprites/MainBackground.png');
loadSprite('topbar', 'sprites/TopBar.png');
loadSprite('logo', 'sprites/KaboomInvadersLogo.png');
loadSprite('logo2', 'sprites/KaboomInvadersLogo2.png');
loadSprite('bar', 'sprites/BottomBarBackgrounds.png');
loadSprite('bomber', 'sprites/bomber.png');
loadSprite('rocket', 'sprites/rocket.png');
loadSprite('wall', 'sprites/wall.png');
loadSprite('rwall', 'sprites/rightWall.png');
loadSprite('lwall', 'sprites/leftWall.png');
loadSprite('ship', 'sprites/ship.png');
loadSprite('stars', 'sprites/stars.png');
loadSprite('flames', 'sprites/flames.png');

scene('menu', () => {
	const music = play('theme', { volume: 1, loop: true });
	layers(['bg', 'obj'], 'bg');
	add([sprite('logo'), scale(2.5), pos(width() / 2, height() / 2), origin('center'), layer('obj')]);
	add([sprite('background'), scale(1), pos(width() / 2, height() / 2), origin('center'), layer('bg')]);

	add([rect(160, 20), origin('center'), pos(width() / 2, height() / 2 + 70), 'button']);
	add([text('Play Game'), scale(2), origin('center'), pos(width() / 2, height() / 2 + 70), color(0.945, 0.031, 0.031)]);
	action('button', (b) => {
		if (b.isHovered()) b.use(color(0.996, 0.886, 0));
		else b.use(color(1, 1, 1));
		if (b.isClicked()) {
			music.pause();
			go('game');
		}
	});
	add([rect(180, 20), origin('center'), pos(width() / 2, height() / 2 + 110), 'button2']);
	add([text('How to Play'), scale(2), origin('center'), pos(width() / 2, height() / 2 + 110), color(0.945, 0.031, 0.031)]);
	action('button2', (b) => {
		if (b.isHovered()) b.use(color(0.996, 0.886, 0));
		else b.use(color(1, 1, 1));
		if (b.isClicked()) {
			music.pause();
			go('help');
		}
	});
});

scene('help', () => {
	const music = play('theme', { volume: 1, loop: true });
	layers(['bg', 'obj'], 'bg');
	add([sprite('background'), scale(1), pos(width() / 2, height() / 2), origin('center'), layer('bg')]);
	add([text('How to Play'), origin('center'), color(0.945, 0.031, 0.031), scale(2), pos(width() / 2, 20)]);
	add([rect(540, 240), origin('center'), pos(width() / 2, 190)]);
	add([
		text(
			'Welcome to Kaboom Invaders! Your job is\nto eliminate all the kaboom babies before\nthe 35 second timer runs out or any of\nthem touch your ship. You shoot lasers\nby pressing the spacebar and move in ANY\ndirection using the arrow keys.\n\nHowever, keep in mind that these kaboom\nbabies are pretty strong and need to be\nattacked 3 times before they explode. Also,\nwatch out for the falling stars - they will\ndamage your ship. If you get hit 4 times,\nyou lose. However, shooting your\nlaser at the stars will give you a \n100 point bonus!\n\nNow go out there and save the world from the\nkaboom babies!'
		),
		origin('center'),
		scale(1.5),
		pos(width() / 2, 190),
		color(0, 0, 0),
	]);

	add([rect(160, 20), origin('center'), pos(width() / 2, height() / 2 + 120), 'button']);
	add([text('Play Game'), scale(2), origin('center'), pos(width() / 2, height() / 2 + 120), color(0.945, 0.031, 0.031)]);
	action('button', (b) => {
		if (b.isHovered()) b.use(color(0.996, 0.886, 0));
		else b.use(color(1, 1, 1));
		if (b.isClicked()) {
			music.pause();
			go('game');
		}
	});
	add([rect(200, 20), origin('center'), pos(width() / 2, height() / 2 + 160), 'button2']);
	add([text('Back to Menu'), scale(2), origin('center'), pos(width() / 2, height() / 2 + 160), color(0.945, 0.031, 0.031)]);
	action('button2', (b) => {
		if (b.isHovered()) b.use(color(0.996, 0.886, 0));
		else b.use(color(1, 1, 1));
		if (b.isClicked()) {
			music.pause();
			go('menu');
		}
	});
});

scene('lose', (score) => {
	const music = play('lose', { volume: 1 });
	layers(['bg', 'obj'], 'bg');
	add([sprite('background'), scale(1), pos(width() / 2, height() / 2), origin('center'), layer('bg')]);
	add([rect(376, 50), origin('center'), pos(width() / 2, height() / 2)]);
	add([text('Sorry! You lost!\nYou scored: ' + score.value + ' points'), color(0.945, 0.031, 0.031), origin('center'), scale(2), pos(width() / 2, height() / 2)]);
	add([rect(160, 20), origin('center'), pos(width() / 2, height() / 2 + 40), 'button']);
	add([text('Play Again'), scale(2), origin('center'), pos(width() / 2, height() / 2 + 40), color(0.945, 0.031, 0.031)]);
	action('button', (b) => {
		if (b.isHovered()) b.use(color(0.996, 0.886, 0));
		else b.use(color(1, 1, 1));
		if (b.isClicked()) {
			music.pause();
			go('game');
		}
	});
	add([rect(160, 20), origin('center'), pos(width() / 2, height() / 2 + 80), 'button2']);
	add([text('Main Menu'), scale(2), origin('center'), pos(width() / 2, height() / 2 + 80), color(0.945, 0.031, 0.031)]);
	action('button2', (b) => {
		if (b.isHovered()) b.use(color(0.996, 0.886, 0));
		else b.use(color(1, 1, 1));
		if (b.isClicked()) {
			music.pause();
			go('menu');
		}
	});
});

scene('win', (score) => {
	const music = play('win', { volume: 0.5 });
	layers(['bg', 'obj'], 'bg');
	add([sprite('background'), scale(1), pos(width() / 2, height() / 2), origin('center'), layer('bg')]);
	add([rect(376, 50), origin('center'), pos(width() / 2, height() / 2)]);
	add([text('Congrats! You won!\nYou scored: ' + score.value + ' points'), color(0.106, 0.702, 0), origin('center'), scale(2), pos(width() / 2, height() / 2)]);
	add([rect(160, 20), origin('center'), pos(width() / 2, height() / 2 + 40), 'button']);
	add([text('Play Again'), scale(2), origin('center'), pos(width() / 2, height() / 2 + 40), color(0.945, 0.031, 0.031)]);
	action('button', (b) => {
		if (b.isHovered()) b.use(color(0.996, 0.886, 0));
		else b.use(color(1, 1, 1));
		if (b.isClicked()) {
			music.pause();
			go('game');
		}
	});
	add([rect(160, 20), origin('center'), pos(width() / 2, height() / 2 + 80), 'button2']);
	add([text('Main Menu'), scale(2), origin('center'), pos(width() / 2, height() / 2 + 80), color(0.945, 0.031, 0.031)]);
	action('button2', (b) => {
		if (b.isHovered()) b.use(color(0.996, 0.886, 0));
		else b.use(color(1, 1, 1));
		if (b.isClicked()) {
			music.pause();
			go('menu');
		}
	});
});

scene('game', () => {
	const music = play('theme', { volume: 2, loop: true });
	const MOVE_SPEED = 140;
	const BOMBER_SPEED = 80;
	const LASER_SPEED = 500;
	const DOWN = 750;
	const TIME = 35;
	let CURRENT_SPEED = BOMBER_SPEED;
	let numberOfBombers = 30;

	volume(1);

	const player = add([
		sprite('rocket'),
		solid(),
		pos(width() / 2, 410),
		origin('center'),
		{
			health: 100,
		},
		'player',
	]);

	// organizes layer from bottom up
	layers(['bg', 'obj', 'ui'], 'obj');

	// sets up game layout (walls and bombers)
	addLevel(
		[
			'1                  2',
			'1 **********       2',
			'1 **********       2',
			'1 **********       2',
			'1                  2',
			'1                  2',
			'1                  2',
			'1                  2',
			'1                  2',
			'1                  2',
			'1                  2',
			'1                  2',
			'1                  2',
			'1                  2',
		],
		{
			width: 32,
			height: 32,
			1: [sprite('lwall'), solid(), 'l-wall'],
			2: [sprite('rwall'), solid(), 'r-wall'],
			'*': [
				sprite('bomber'),
				scale(1),
				{
					health: 100,
				},
				'bomber',
			],
		}
	);

	// adds background
	add([sprite('bar'), scale(1), pos(0, 0), layer('bg')]);
	add([sprite('topbar'), scale(1), pos(0, 0), layer('ui')]);
	add([sprite('logo2'), scale(1), pos(width() / 2, 16), origin('center'), layer('ui')]);

	// controls
	keyDown('left', () => {
		player.move(-MOVE_SPEED, 0);
	});

	keyDown('right', () => {
		player.move(MOVE_SPEED, 0);
	});

	keyDown('down', () => {
		player.move(0, MOVE_SPEED);
	});

	keyDown('up', () => {
		player.move(0, -MOVE_SPEED);
	});

	keyPress('space', () => {
		spawnLasers(player.pos.add(0, -23));
	});

	// timer
	const timer = add([text('0'), pos(288, 456), color(0, 0, 0), scale(2.5), { time: TIME }]);

	timer.action(() => {
		timer.time -= dt();
		timer.text = timer.time.toFixed(0);
		if (timer.time <= 0 && numberOfBombers > 0) {
			music.pause();
			go('lose', score);
		} else if (timer.time >= 0 && numberOfBombers === 0) {
			wait(2, () => {
				go('win', score);
				music.pause();
			});
		}
	});

	// UI bits and pieces
	const score = add([
		text('0'),
		pos(486, 456),
		layer('ui'),
		{
			value: 0,
		},
		color(0, 0, 0),
		scale(2.5),
	]);

	const healthHolder = add([rect(52, 22), pos(115, 454), color(0, 0, 0), layer('ui')]);

	const healthBar = add([rect(50, 20), pos(116, 455), color(0, 255, 0), layer('ui')]);

	// health status
	function updatePlayerHealth(healthPoints) {
		player.health += healthPoints;
		healthBar.width = 50 * (player.health / 100);

		if (player.health === 25) {
			healthBar.color = rgb(1, 0, 0);
		} else if (player.health === 50) {
			healthBar.color = rgb(1, 0.5, 0);
		} else healthBar.color = rgb(0, 1, 0);

		if (player.health <= 0) {
			destroy(player);
			wait(2, () => {
				music.pause();
				go('lose', score);
			});
		}
	}

	// collisions
	collides('stars', 'player', (s) => {
		updatePlayerHealth(-25);
		destroy(s);
		spawnStars();
		play('crash', { volume: 1 });
	});

	collides('laser', 'bomber', (l, b) => {
		play('crash', { volume: 1 });
		destroy(l);
		b.health -= 34;
		score.value += 25;
		score.text = score.value;
		if (b.health <= 0) {
			spawnExplosion(b.pos);
			destroy(b);
			play('explosion', { volume: 0.5 });
			numberOfBombers--;
			console.log(numberOfBombers);
		}
	});

	collides('laser', 'stars', (l, s) => {
		play('crash', { volume: 0.5 });
		destroy(s);
		destroy(l);
		score.value += 100;
		score.text = score.value;
		spawnStars();
	});

	collides('r-wall', 'bomber', () => {
		CURRENT_SPEED = -BOMBER_SPEED;
		every('bomber', (b) => {
			b.move(0, DOWN);
		});
	});

	collides('l-wall', 'bomber', () => {
		CURRENT_SPEED = BOMBER_SPEED;
		every('bomber', (b) => {
			b.move(0, DOWN);
		});
	});

	function spawnExplosion(p) {
		const obj = add([sprite('flames'), scale(2), pos(p), 'flames']);
		wait(0.1, () => {
			destroy(obj);
		});
	}

	function spawnLasers(p) {
		add([rect(6, 18), pos(p), origin('center'), color(0.5, 0.5, 1), 'laser']);
		play('laserzap', { volume: 0.2, speed: 1 });
	}

	action('laser', (l) => {
		l.move(0, -LASER_SPEED);
		if (l.pos.y < 0) {
			destroy(l);
		}
	});

	action('bomber', (b) => {
		b.move(CURRENT_SPEED, 0);
	});

	player.overlaps('bomber', () => {
		play('explosion', { volume: 0.5 });
		music.pause();
		go('lose', score);
	});

	action('bomber', (b) => {
		if (b.pos.y >= height() - 50) {
			play('explosion', { volume: 0.5 });
			music.pause();
			go('lose', score);
		}
	});

	gravity(400);

	function spawnStars() {
		let xpos = rand(32, width() - 32);
		add([sprite('stars'), pos(xpos, 32), body(), 'stars']);
	}

	action('stars', (stars) => {
		stars.resolve();

		if (stars.pos.y > height()) {
			destroy(stars);
			spawnStars();
		}
	});

	spawnStars();
});

start('menu');
