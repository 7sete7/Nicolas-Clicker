/// <reference lib="dom" />

import Game from './lib/Game';

console.log('START');
const game: Game = new Game();
game.start();

const headContainer = document.getElementById('nic-head') as HTMLDivElement;
headContainer.addEventListener('click', () => {
	game.money.incrementNics(1);
});

interface config {
	nps: number;
}
const upgradeConfig: { [key: string]: config } = {
	cage: {
		nps: 3,
	},
};

const upgrades = document.getElementById('upgrades')?.querySelectorAll('.upgrade');
upgrades?.forEach(_upgrade => {
	const upgrade = _upgrade as HTMLDivElement;
	const name = upgrade.dataset.name as string;

	upgrade.addEventListener('click', () => {
		if (upgradeConfig[name] == null) return;

		const config = upgradeConfig[name];
		game.money.incrementNps(config.nps);
	});
});
