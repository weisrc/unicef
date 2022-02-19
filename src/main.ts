import "./main.css";
import kaboom from "kaboom";
import { player } from "./player";
import { npc } from "./npc";
import { world } from "./world";
import { loadAssets } from "./assets";
import { objective } from "./objective";

kaboom({ scale: 4, background: [0, 0, 0] });

loadAssets();

world();

npc(
  "old-man",
  200,
  200,
  "Bullying is bad",
  "Stop it get some help...",
  objective("hello", "Hello")
);
player("noble-man", 200, 150);
