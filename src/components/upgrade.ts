import EventManager from '../lib/EventManager';
import Game from '../lib/Game';
import GameComponent from '../types/GameComponent';
import { UpgradeConfig } from '../types/upgrade';
import compileTemplateWith from '../utils/compileTemplate';

export default class Upgrade implements GameComponent {
	private _qtt: number = 0;
	private _price!: number;
	private _nps!: number;

	public readonly name!: string;
	public readonly description!: string;
	public readonly image!: string;

	private template!: string;
	private element!: HTMLDivElement;

	private events = new EventManager();
	private changed = false;

	public get quantity() {
		return this._qtt;
	}

	public get price() {
		return this._price;
	}

	public get nps() {
		return this._nps;
	}

	constructor(config: UpgradeConfig) {
		this.name = config.name;
		this.description = config.description;
		this.image = config.image;
		this._price = config.price;
		this._nps = config.nps;

		this.template = compileTemplateWith('upgrade', this.templateConfig);
	}

	start(): void {
		const upgradesParent: HTMLDivElement = document.getElementById('upgrades') as HTMLDivElement;
		this.element = document.createElement('div');
		this.element.style.display = 'contents';
		this.element.innerHTML = this.template;

		upgradesParent.appendChild(this.element);

		this.events.observe('this:changed', () => {
			this.changed = true;
		});
	}
	update(delta?: number | undefined): void {}

	render(): void {
		if (this.changed === true) {
			this.template = compileTemplateWith('upgrade', this.templateConfig);
			this.element.innerHTML = this.template;
			this.changed = false;
		}
	}

	public setupListeners(game: Game): void {
		this.element.addEventListener('click', () => {
			this._qtt += 1;
			game.money.incrementNps(this.nps);
			this.events.dispatch('this:changed');
		});
	}

	private get templateConfig() {
		return {
			name: this.name,
			description: this.description,
			nps: this._nps,
			price: this._price,
			quantity: this.quantity,
			image: this.image,
		};
	}
}
