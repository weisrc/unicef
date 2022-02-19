export const characterIds = [
	"noble-man",
	"noble-woman",
	"old-man",
	"old-woman",
	"peasant",
	"princess",
	"queen",
	"princess",
	"queen",
	"villager-man",
	"villager-woman",
	"worker",
] as const;

export type CharacterId = typeof characterIds[number];

export function getCharacterUrl(id: CharacterId) {
	return `assets/characters/${id}.png`
}

function loadCharacter(id: CharacterId) {
	loadSprite(id, getCharacterUrl(id), {
		sliceX: 6,
		sliceY: 5,
		anims: {
			idle: { from: 0, to: 3, loop: true },
			walk: { from: 6, to: 11, loop: true },
		},
	});
}

export function loadAssets() {
	for (const id of characterIds) loadCharacter(id);
    loadSprite("world", "assets/world.png");

}
