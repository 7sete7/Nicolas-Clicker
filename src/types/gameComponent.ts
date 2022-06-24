export default interface GameComponent {
	start(): void;
	update(delta?: number): void;
	render(): void;
}
