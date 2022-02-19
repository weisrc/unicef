import { Vec2 } from "kaboom";
import { CharacterId } from "./assets";
import { character } from "./character";

export function player(id: CharacterId, x: number, y: number) {
    const player = character(id, x, y, "player");

    player.onUpdate(() => {
        camPos(player.pos);
    });

    function goto(pos: Vec2) {
        const { x, y } = toWorld(pos);
        player.walk(x, y);
    }

    mouseClick(goto);
    touchEnd((_, pos) => goto(pos))

    return player
}