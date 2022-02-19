import "./main.css";
import kaboom from "kaboom";
import { player } from "./player";
import { npc } from "./npc";
import { world } from "./world";
import { loadAssets } from "./assets";
import { objective } from "./objective";
import { builder } from "./builder";
import { tasks } from "./tasks";

kaboom({ scale: 4, background: [0, 0, 0] });

loadAssets();

world();

builder(tasks)

player("noble-man", 150, 200);

