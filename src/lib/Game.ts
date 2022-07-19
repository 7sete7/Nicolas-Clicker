import Money from '../components/money';
import Upgrade from '../components/upgrade';
import GameComponent from '../types/GameComponent';
import EventManager from './EventManager';

import ALL_UPGRADES from '../config/upgrades';

class Game implements GameComponent {
	private FPS = 30;
	private _intervalId?: NodeJS.Timer;

	public events = new EventManager();
	private _money = new Money();
	private _upgrades!: Upgrade[];

	get money(): Money {
		return this._money;
	}

	start(): void {
		this._money.start();

		this._intervalId = setInterval(() => {
			this.update();
			setTimeout(() => this.render(), 1);
		}, 1000 / this.FPS);

		this._upgrades = ALL_UPGRADES.map(config => new Upgrade(config));
		this._upgrades.forEach(upgrade => upgrade.start());
	}

	update() {
		const delta = 1 / this.FPS; // In seconds

		this._money.update(delta);
		this._upgrades.forEach(upgrade => upgrade.update(delta));
	}

	render() {
		this._money.render();
		this._upgrades.forEach(upgrade => upgrade.render());
	}
}

export default Game;
