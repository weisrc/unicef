import kaboom from "kaboom";
kaboom({ scale: 4, background: [0, 0, 0] });

import { loadAssets } from "./assets";
loadAssets();

import { character } from "./character";
import { world } from "./world";

world();

const player = character("noble-man", 200, 150);
const npc = character("noble-man", 200, 150);

player.walk(200, 20);

player.onUpdate(() => {
	camPos(player.pos);
});

mouseClick((pos) => {
	const { x, y } = toWorld(pos);
	player.walk(x, y);
});
