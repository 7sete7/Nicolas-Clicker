import { Money } from '../types/money';
import EventManager from './EventManager';

class Game {
	public events = new EventManager();
	private money: Money = {
		nics: 0,
		nps: 0,
	};

	public get nics() {
		return this.money.nics;
	}

	public get nps() {
		return this.money.nps;
	}

	public incrementNics(amount: number) {
		this.money.nics += amount;
		this.events.dispatch('nics:change');
	}

	public addNps(amount: number) {
		this.money.nps += amount;
		this.events.dispatch('nps:change');
	}
}

export default Game;
