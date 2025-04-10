const playerGamesMap = new Map([
    ["Maanvik", new Set(["Minecraft"])],
    ["Ana", new Set(["Fortnite"])],
    ["Maria", new Set(["Roblox"])]
]);

console.log(playerGamesMap.get("Maanvik")); // Set(1) { 'Minecraft' }
