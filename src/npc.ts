import { CharacterId, getCharacterUrl } from "./assets";
import { character } from "./character";
import { dialog } from "./dialog";

export function npc(
  id: CharacterId,
  x: number,
  y: number,
  title: string,
  content: string,
  click = () => {}
) {
  const npc = character(id, x, y, "npc");

  npc.onClick(() => {
    dialog(title, content);
    click();
  });
}
