import { CharacterId } from "./assets";
import { character } from "./character";

export function player(id: CharacterId, x: number, y: number) {
    const player = character(id, x, y, "player");

    player.onUpdate(() => {
        camPos(player.pos);
    });

    mouseClick((pos) => {
        const { x, y } = toWorld(pos);
        player.walk(x, y);
    });

    return player
}