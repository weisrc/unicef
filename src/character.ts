import "kaboom";
import { CharacterId } from "./assets";

const speed = 25;

export function character(id: CharacterId, x: number, y: number) {
	const target = add([
		// @ts-ignore
		origin("center") as void,
		circle(2),
		color(255, 50, 50),
		outline(),
		pos(x, y),
	]);

	target.hidden = true;

	const char = add([
		// @ts-ignore
		origin("bot") as void,
		solid(),
		sprite(id),
		pos(x, y),
		z(0),
		area({ scale: 0.3 }),
		{
			target,
			walk(x: number, y: number) {
				char.play("walk");
				char.flipX(x < char.pos.x);
				target.moveTo(x, y);
			},
		},
	]);

	char.onUpdate(() => {
		const { x, y } = target.pos;
		char.z = char.pos.y;
		char.moveTo(x, y, speed);
		if (x === char.pos.x && y === char.pos.y) {
			target.hidden = true;
			if (char.curAnim() !== "idle") {
				char.play("idle");
			}
		} else {
			target.hidden = false;
		}
	});

	return char;
}
