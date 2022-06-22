/// <reference lib="dom" />

import Game from './lib/Game';

console.log('START');
const game: Game = new Game();

const renderProp = (id: string, value: any) => {
	const nicsContainer = document.getElementById(id) as HTMLDivElement;
	nicsContainer.innerHTML = String(value);
};
renderProp('nics', game.nics);
renderProp('nps', game.nps);

game.events.observe('nics:change', () => renderProp('nics', game.nics));
game.events.observe('nps:change', () => renderProp('nps', game.nps));

const headContainer = document.getElementById('nic-head') as HTMLDivElement;
headContainer.addEventListener('click', () => {
	game.incrementNics(1);
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
		game.addNps(config.nps);
	});
});
