import "kaboom";
import { CharacterId } from "./assets";

const speed = 25;

export function character(id: CharacterId, x: number, y: number, tag: string) {
  const target = add([
    // @ts-ignore
    origin("center") as void,
    circle(2),
    color(255, 50, 50),
    outline(),
    pos(x, y),
    z(100),
    tag,
  ]);

  target.hidden = true;

  const character = add([
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
        character.play("walk");
        character.flipX(x < character.pos.x);
        target.moveTo(x, y);
      },
    },
  ]);

  character.onUpdate(() => {
    const { x, y } = target.pos;
    character.z = character.pos.y;
    target.z = y;
    character.moveTo(x, y, speed);
    if (x === character.pos.x && y === character.pos.y) {
      target.hidden = true;
      if (character.curAnim() !== "idle") {
        character.play("idle");
      }
    } else {
      target.hidden = false;
    }
  });

  return character;
}
