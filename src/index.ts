/// <reference lib="dom" />

import '../public/game.scss';
import Game from './lib/Game';

console.log('START');
const game: Game = new Game();
game.start();

const headContainer = document.getElementById('nic-head') as HTMLDivElement;
headContainer.addEventListener('click', () => {
	game.money.incrementNics(1);
});
