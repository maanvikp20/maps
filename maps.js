// This creates a map of players and their games for the data to be stored
const playerGamesMap = new Map([
    ["Maanvik", new Set()],
    ["Marge", new Set()],
    ["Potato", new Set()],
    ["Homer", new Set()],
]);

// Array with all the games that can be played
let gameArray = ['Minecraft', 'Fortnite', 'Roblox', 'Apex Legends', 'Call of Duty', 
'Overwatch', 'Valorant', 'League of Legends', 'Dota 2', 'Counter Strike',
'Grand Theft Auto V', 'Red Dead Redemption 2', 'The Witcher 3', 
'Rainbow Six Siege', 'Rocket League', 'World of Warcraft', 
'Among Us', 'Fall Guys', 'Destiny 2', 'PUBG',
'Elden Ring', 'FIFA 23', 'NBA 2K23', 'Halo Infinite', 
'Genshin Impact', 'Lost Ark', 'Final Fantasy XIV',
'Cyberpunk 2077', 'God of War', 'Spider-Man', 'Horizon Zero Dawn',
'The Last of Us', 'Dark Souls', 'Bloodborne', 'Sekiro',
'Animal Crossing', 'Mario Kart', 'Super Smash Bros', 'Zelda: Breath of the Wild',
'Persona 5', 'Monster Hunter', 'Terraria', 'Stardew Valley',
'Path of Exile', 'Dead by Daylight', 'Rust', 'Sea of Thieves',
'ARK: Survival Evolved', 'Valheim', 'Satisfactory', 'Factorio',
'Cities: Skylines', 'Civilization VI', 'Total War: Warhammer II',
'Age of Empires II', 'Starcraft II', 'Warcraft III', 'Command & Conquer',
'XCOM 2', 'Darkest Dungeon', 'Hades', 'Slay the Spire',
'Hollow Knight', 'Celeste', 'Undertale', 'Cuphead',
'Ori and the Blind Forest', 'Gris', 'Journey', 'Firewatch',
'Inside', 'Limbo', 'What Remains of Edith Finch', 'The Stanley Parable',
'Gone Home', 'Oxenfree', 'Night in the Woods', 'Kentucky Route Zero',
'The Witness', 'Braid', 'Fez', 'Superliminal',
'Return of the Obra Dinn', 'Outer Wilds', 'Disco Elysium',
'The Outer Worlds', 'Control', 'Death Stranding', 'Doom Eternal',
'Wolfenstein II', 'Resident Evil Village', 'Silent Hill 2',
'Dead Space', 'Amnesia: The Dark Descent', 'Outlast', 'Soma',
'The Evil Within', 'Layers of Fear', 'Until Dawn', 'Alan Wake',
'The Medium', 'Resident Evil 7', 'Fatal Frame', 'Clock Tower',
'Siren', 'Fatal Frame II: Crimson Butterfly', 'Rule of Rose',
'Siren: Blood Curse', 'The Last Guardian', 'ICO',
'Shadow of the Colossus', 'Journey to the Savage Planet',
'Astroneer', 'No Mans Sky', 'Elite Dangerous',
'Starbound', 'Space Engineers', 'Kerbal Space Program',
'Universe Sandbox', 'Planet Coaster', 'Planet Zoo',
'Zoo Tycoon', 'RollerCoaster Tycoon', 'SimCity',
'The Sims', 'Cities in Motion', 'Tropico',
'Banished', 'Anno 1800', 'Farming Simulator',
'Euro Truck Simulator 2', 'American Truck Simulator', 'Train Simulator',
'Microsoft Flight Simulator', 'DCS World', 'War Thunder',
'World of Tanks', 'World of Warships', 'Warthunder',
'EVE Online', 'Star Citizen', 'X4: Foundations',
'Deep Rock Galactic', 'Risk of Rain 2', 'Warframe',
'Path of Titans', 'The Isle', 'Beasts of Bermuda',
'Grounded', 'Subnautica', 'The Forest',
'7 Days to Die', 'Project Zomboid', 'State of Decay 2',
'Rimworld', 'Oxygen Not Included', 'Frostpunk',
'Banished', 'Surviving Mars', 'Planetbase',
'Portal', 'Portal 2', 'Half-Life', 'Half-Life 2', 'Left 4 Dead',
'Team Fortress 2', 'Garry\'s Mod', 'Payday 2', 'Borderlands 2', 'Borderlands 3',
'Mass Effect', 'Mass Effect 2', 'Mass Effect 3', 'Dragon Age: Origins',
'Dragon Age 2', 'Dragon Age: Inquisition', 'Skyrim', 'Oblivion', 'Morrowind',
'Fallout 3', 'Fallout: New Vegas', 'Fallout 4', 'BioShock', 'BioShock 2',
'BioShock Infinite', 'Dead Island', 'Dying Light', 'Far Cry 3', 'Far Cry 4',
'Far Cry 5', 'Assassin\'s Creed', 'Assassin\'s Creed II', 'Assassin\'s Creed: Brotherhood',
'Watch Dogs', 'Watch Dogs 2', 'The Division', 'The Division 2',
'Metal Gear Solid', 'Metal Gear Solid 2', 'Metal Gear Solid 3',
'Devil May Cry', 'Devil May Cry 3', 'Devil May Cry 5', 'Bayonetta',
'Nier: Automata', 'Kingdom Hearts', 'Kingdom Hearts 2', 'Final Fantasy VII',
'Final Fantasy VIII', 'Final Fantasy X', 'Final Fantasy XV',
'Chrono Trigger', 'Secret of Mana', 'Tales of Symphonia',
'Tales of Vesperia', 'Xenoblade Chronicles', 'Xenogears',
'Persona 3', 'Persona 4', 'Shin Megami Tensei III',
'Pokemon Red', 'Pokemon Blue', 'Pokemon Gold', 'Pokemon Silver',
'Pokemon Ruby', 'Pokemon Sapphire', 'Pokemon Diamond', 'Pokemon Pearl',
'Pokemon Black', 'Pokemon White', 'Pokemon X', 'Pokemon Y',
'Pokemon Sun', 'Pokemon Moon', 'Pokemon Sword', 'Pokemon Shield',
'Fire Emblem: Three Houses', 'Fire Emblem: Awakening',
'Advance Wars', 'Golden Sun', 'Paper Mario',
'Super Mario 64', 'Super Mario Sunshine', 'Super Mario Galaxy',
'Super Mario Odyssey', 'New Super Mario Bros', 'Mario Party',
'Sonic the Hedgehog', 'Sonic Adventure', 'Sonic Adventure 2',
'Crash Bandicoot', 'Spyro the Dragon', 'Jak and Daxter',
'Ratchet & Clank', 'Sly Cooper', 'LittleBigPlanet',
'Rayman', 'Rayman Legends', 'Prince of Persia',
'Prince of Persia: Sands of Time', 'Prince of Persia: Warrior Within',
'Tomb Raider', 'Rise of the Tomb Raider', 'Shadow of the Tomb Raider',
'Uncharted', 'Uncharted 2', 'Uncharted 3', 'Uncharted 4',
'Batman: Arkham Asylum', 'Batman: Arkham City', 'Batman: Arkham Knight',
'Marvel\'s Spider-Man: Miles Morales', 'Infamous', 'Infamous 2',
'Prototype', 'Saints Row', 'Saints Row 2', 'Saints Row: The Third',
'Just Cause 2', 'Just Cause 3', 'Just Cause 4',
'Max Payne', 'Max Payne 2', 'Max Payne 3',
'Sleeping Dogs', 'Mafia', 'Mafia II', 'Mafia III',
'L.A. Noire', 'Heavy Rain', 'Beyond: Two Souls', 'Detroit: Become Human',
'Life is Strange', 'Life is Strange 2', 'Life is Strange: True Colors',
'The Walking Dead', 'The Wolf Among Us', 'Tales from the Borderlands',
'Minecraft Dungeons', 'Diablo', 'Diablo II', 'Diablo III',
'Torchlight', 'Torchlight II', 'Grim Dawn', 'Titan Quest',
'Sacred', 'Sacred 2', 'Dungeon Siege', 'Dungeon Siege II',
'Pillars of Eternity', 'Pillars of Eternity II', 'Divinity: Original Sin',
'Divinity: Original Sin 2', 'Baldur\'s Gate', 'Baldur\'s Gate II',
'Neverwinter Nights', 'Planescape: Torment', 'Icewind Dale',
'Star Wars: Knights of the Old Republic', 'Jade Empire',
'The Elder Scrolls Online', 'Black Desert Online', 'Guild Wars 2',
'Star Wars: The Old Republic', 'Lord of the Rings Online',
'Dungeons & Dragons Online', 'Neverwinter', 'Rift',
'Aion', 'TERA', 'Blade & Soul', 'Archeage',
'Age of Conan', 'Champions Online', 'DC Universe Online',
'Phantasy Star Online 2', 'MapleStory', 'RuneScape',
'Ultima Online', 'EverQuest', 'EverQuest II',
'Dark Age of Camelot', 'Lineage II', 'Ragnarok Online',
'Perfect World', 'Vindictus', 'Dragon Nest',
'Flyff', 'Mabinogi', 'Albion Online',
'Tree of Savior', 'Black Desert Mobile', 'Lineage M',
'AdventureQuest Worlds', 'Club Penguin', 'Wizard101',
'Pirate101', 'Roblox Studio', 'Second Life',
'There', 'Habbo Hotel', 'IMVU',
'VRChat', 'RecRoom', 'AltspaceVR',
'Beat Saber', 'Superhot VR', 'Half-Life: Alyx',
'Boneworks', 'Pavlov VR', 'Blade and Sorcery',
'Job Simulator', 'Vacation Simulator', 'The Lab',
'Arizona Sunshine', 'The Walking Dead: Saints & Sinners',
'Pistol Whip', 'Space Pirate Trainer', 'Robo Recall',
'Echo VR', 'Population: One', 'Onward',
'Star Trek: Bridge Crew', 'Elite Dangerous VR',
'Project CARS 2', 'Assetto Corsa', 'iRacing',
'Gran Turismo 7', 'Forza Horizon 5', 'Forza Motorsport 7',
'Need for Speed Heat', 'The Crew 2', 'Dirt Rally 2.0',
'F1 2022', 'WRC 10', 'MotoGP 22',
'Tony Hawk\'s Pro Skater 1+2', 'Skate 3', 'Session',
'Skater XL', 'Steep', 'Riders Republic',
'SSX Tricky', 'Pure', 'Trials Rising',
'ATV vs. MTB All Out', 'Monster Energy Supercross',
'WWE 2K22', 'UFC 4', 'Fight Night Champion',
'Mortal Kombat 11', 'Street Fighter V', 'Tekken 7',
'Dragon Ball FighterZ', 'Guilty Gear Strive',
'BlazBlue: Cross Tag Battle', 'Injustice 2',
'Soulcalibur VI', 'Dead or Alive 6', 'Power Rangers: Battle for the Grid',
'Brawlhalla', 'Rivals of Aether', 'Fantasy Strike',
'Under Night In-Birth', 'Melty Blood', 'Skullgirls',
'King of Fighters XV', 'Them\'s Fightin\' Herds',
'Lethal League Blaze', 'Ultimate Marvel vs. Capcom 3',
'Killer Instinct', 'Virtua Fighter 5', 'Dead or Alive 5',
'BlazBlue: Central Fiction', 'Granblue Fantasy: Versus',
'Samurai Shodown', 'For Honor', 'Absolver',
'Sifu', 'Nidhogg', 'Nidhogg 2',
'Duck Game', 'Towerfall Ascension', 'Move or Die',
'Ultimate Chicken Horse', 'Gang Beasts', 'Human: Fall Flat',
'Totally Accurate Battle Simulator', 'Stick Fight: The Game',
'Golf With Your Friends', 'Jackbox Party Pack', 'Keep Talking and Nobody Explodes',
'Overcooked', 'Overcooked 2', 'Moving Out',
'Tools Up', 'Unravel', 'Unravel Two',
'It Takes Two', 'A Way Out', 'Brothers: A Tale of Two Sons',
'Little Nightmares', 'Little Nightmares II', 'Inside',
'Limbo', 'Braid', 'Fez',
'Hyper Light Drifter', 'Dead Cells', 'Salt and Sanctuary',
'Blasphemous', 'Axiom Verge', 'Axiom Verge 2',
'Ori and the Will of the Wisps', 'Guacamelee',
'Dust: An Elysian Tail', 'Momodora', 'Touhou Luna Nights',
'Record of Lodoss War-Deedlit in Wonder Labyrinth',
'Bloodstained: Ritual of the Night', 'Timespinner',
'The Messenger', 'Katana Zero', 'Cyber Shadow',
'Shovel Knight', 'Azure Striker Gunvolt', 'Mighty Gunvolt Burst',
'A Hat in Time', 'Yooka-Laylee', 'Snake Pass',
'SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated',
'Ty the Tasmanian Tiger', 'de Blob',
'Epic Mickey', 'Psychonauts', 'Psychonauts 2',
'Alice: Madness Returns', 'American McGee\'s Alice',
'Contrast', 'Papo & Yo', 'Rain',
'Child of Light', 'Valiant Hearts: The Great War',
'This War of Mine', 'Papers, Please', 'Return of the Obra Dinn',
'Her Story', 'Telling Lies', 'Immortality',
'The Vanishing of Ethan Carter', 'Dear Esther', 'Gone Home',
'Tacoma', 'What Remains of Edith Finch', 'Everybody\'s Gone to the Rapture',
'The Beginner\'s Guide', 'Dr. Langeskov, The Tiger, and The Terribly Cursed Emerald',
'That Dragon, Cancer', 'Florence', 'If Found...',
'Before Your Eyes', 'Kind Words', 'A Short Hike',
'Alba: A Wildlife Adventure', 'Untitled Goose Game', 'Donut County',
'Gorogoa', 'The Gardens Between', 'Monument Valley',
'Old Man\'s Journey', 'Mini Metro', 'Prune',
'Alto\'s Adventure', 'Alto\'s Odyssey', 'Sky: Children of the Light',
'Florence', 'Gris', 'FAR: Lone Sails',
'Journey', 'Abzu', 'Rime',
'The First Tree', 'Shape of the World', 'Proteus',
'Everything', 'Mountain', 'Flower',
'Flow', 'Eufloria', 'Osmos',
'Audiosurf', 'Beat Hazard', 'Thumper',
'Crypt of the NecroDancer', 'Just Shapes & Beats', 'Lumines',
'Tetris Effect', 'Rez Infinite', 'Child of Eden',
'Sayonara Wild Hearts', 'Amplitude', 'Frequency',
'PaRappa the Rapper', 'Um Jammer Lammy', 'Gitaroo Man',
'Elite Beat Agents', 'Osu!', 'Project Diva',
'DJ Max', 'Taiko no Tatsujin', 'Rhythm Heaven',
'Space Channel 5', 'Vib-Ribbon', 'Electroplankton',
'Bit.Trip Runner', '140', 'Rhythm Doctor',
'A Dance of Fire and Ice', 'Muse Dash', 'Spin Rhythm XD',
'Geometry Dash', 'Friday Night Funkin\'', 'Rhythm Paradise',
'Dance Dance Revolution', 'StepMania', 'In the Groove',
'Pump It Up', 'Dance Central', 'Just Dance',
'Guitar Hero', 'Rock Band', 'Rocksmith',
'Clone Hero', 'Frets on Fire', 'Phase Shift',
'Synthesia', 'Piano Tiles', 'Magic Piano'];

// Array of scores to be added for every player
let playerScores = []

// Function to create a random score row for each player
function scoresToPlayer(scoresList) {
    playerGamesMap.forEach((player) => {
        let scoreRow = [];
        for (let i = 0; i < 3; i++) {
            let randomScore = Math.floor(Math.random() * 101);
            scoreRow.push(randomScore);
        }
        playerScores.push(scoreRow);
    });
}

// Pulls game from array and adds it to the player
function addGameToPlayer(playerName, game) {
    if (!playerGamesMap.has(playerName)) {
        console.log(`Player ${playerName} does not exist.`);
        return;
    }

    let games = playerGamesMap.get(playerName);
    if (games.has(game)) {
        console.log(`❗ ${playerName} already played ${game}.`);
    } else {
        games.add(game);
        console.log(`✅ ${game} added for ${playerName}.`);
    }
}

// Randomly assign x games to each player
playerGamesMap.forEach((games, player) => {
    for (let i = 0; i < 4; i++) {
        let randomGame = gameArray[Math.floor(Math.random() * gameArray.length)];
        addGameToPlayer(player, randomGame);
    }
});

// Add scores for all players
scoresToPlayer(playerScores);

// Calls function to add games to player
console.log("\n🎮 Player Games Summary:");
playerGamesMap.forEach((games, player) => {
    console.log(`${player}: ${[...games].join(", ")}`);
});

// Output each player's score summary and average
console.log("\n📊 Player Score Summary:");
const playerNames = Array.from(playerGamesMap.keys());

// Loop through each player's scores and calculate the average
playerScores.forEach((scores, index) => {
    let name = playerNames[index];
    let average = scores.reduce((a, b) => a + b, 0) / scores.length;
    console.log(`${name}: Scores = [${scores.join(", ")}], Average = ${average.toFixed(2)}`);
});