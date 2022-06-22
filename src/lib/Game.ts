import Money from '../components/money';
import GameComponent from '../types/gameComponent';
import EventManager from './EventManager';

class Game implements GameComponent {
	private FPS = 30;
	private _intervalId?: NodeJS.Timer;

	public events = new EventManager();
	private _money = new Money();

	get money(): Money {
		return this._money;
	}

	start(): void {
		this._money.start();

		this._intervalId = setInterval(() => {
			this.update();
			setTimeout(() => this.render(), 1);
		}, 1000 / this.FPS);
	}

	update() {
		this._money.update();
	}

	render() {
		this._money.render();
	}
}

export default Game;
