import { CharacterId } from "./assets";
import { npc } from "./npc";
import { objective } from "./objective";

export type Task = {
    id: CharacterId,
    x: number,
    y: number,
    dialog: {
        title: string,
        content: string
    },
    objective?: {
        title: string,
        content: string
    }
}

export function builder(tasks: Task[]) {
    for (const {id, x,y,dialog: {title, content}, objective: obj} of tasks) {
        const done = (obj) ? objective(obj.title, obj.content) : () => {}
        npc(id, x,y, title, content, done)
    }
}