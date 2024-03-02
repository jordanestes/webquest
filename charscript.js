

// Ability Scores
let strength;
let dexterity;
let constitution;
let intelligence;
let wisdom;
let charisma;

// Gold (based on class choice)
let startingGoldText = document.querySelector(".startingGoldText");
let startingGold; 
startingGoldText.innerText = "0";

// Save Character name, need to change this for it to be accessible

let playerName;

// Get the value entered by the user
function saveName() {
playerName = document.getElementById('nameInput').value;
// Display the entered name in a message and hide the input field and button
document.getElementById('message').innerText = playerName;
document.getElementById('nameInput').style.display = 'none';
document.getElementsByTagName('button')[0].style.display = 'none';
document.getElementById('message').style.display = 'block';
}


//Ability Score Dice Roll
let totalSum = 0;
let abilityScoreResults = [];// Array to store individual results globally
let currentButtonIndex = 0;


function rollDice(buttonId, scoreName) {
  
  // Roll four six-sided dice
  const diceResults = [];
  for (let i = 0; i < 4; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    diceResults.push(roll);
  }

  // Discard the lowest roll
  const lowestRoll = Math.min(...diceResults);
  const indexToRemove = diceResults.indexOf(lowestRoll);
  diceResults.splice(indexToRemove, 1);

  // Calculate the sum of the top 3 rolls
  const sumTop3 = diceResults.reduce((acc, val) => acc + val, 0);

// Store the individual results in the array
  abilityScoreResults.push({ ability: scoreName, result: sumTop3 });
  console.log(abilityScoreResults);

  // Display the result
  const resultElement = document.getElementById(`result${buttonId.charAt(buttonId.length-1)}`);
  resultElement.textContent = ` ${sumTop3}`;

  // Update total sum
  totalSum += sumTop3;

  // Hide the current button
  const currentButton = document.getElementById(buttonId);
  currentButton.style.display = 'none';

  // Increment the currentButtonIndex to show the next button
  currentButtonIndex++;

  // Show the next button
  if (currentButtonIndex < 6) {
    const nextButton = document.getElementById(`button${currentButtonIndex + 1}`);
    nextButton.style.display = 'inline-block';
  }

  // Check if all buttons in 'diceButtons' are hidden
  const diceButtons = document.getElementById('diceButtons');
  const allButtonsHidden = Array.from(diceButtons.querySelectorAll('button')).every(button => button.style.display === 'none');


  // Display total sum after the last button is pressed
  if (allButtonsHidden) {
    const totalResultElement = document.getElementById('totalResult');
    //totalResultElement.textContent = `Your ability score rolls totaled: ${totalSum}.`;
    suggestAClass();
  
  //Calculate modifiers and display the after each roll
    strMod();
    dexMod();
    conMod();
    intMod();
    wisMod();
    chaMod();

    // Now that the rolls have been made, you can assign Results
    strength = abilityScoreResults[0].result;
    dexterity = abilityScoreResults[1].result;
    constitution = abilityScoreResults[2].result;
    intelligence = abilityScoreResults[3].result;
    wisdom = abilityScoreResults[4].result;
    charisma = abilityScoreResults[5].result; 
  }

}



// Calculate Ability Modifiers (each one individially)
// Strength Mod
let strModifierText = document.querySelector('#strModifierText');
let strModifier = 0;
function strMod(){
  if (abilityScoreResults[0].result >=2) {
    strModifierText.innerText = ' -4';
    strModifier = -4;
  } if (abilityScoreResults[0].result >=4) {
    strModifierText.innerText = ' -3';
    strModifier = -3; 
  } if (abilityScoreResults[0].result >=6) {
    strModifierText.innerText = ' -2';
    strModifier = -2;
  } if (abilityScoreResults[0].result >=8) {
    strModifierText.innerText = ' -1';
    strModifier = -1;  
  } if (abilityScoreResults[0].result >=10){
    strModifierText.innerText = ' +0';
    strModifier = 0;
  } if (abilityScoreResults[0].result >=12) {
    strModifierText.innerText = ' +1';
    strModifier = 1;
  } if (abilityScoreResults[0].result >=14) {
    strModifierText.innerText = ' +2';
    strModifier = 2;
  } if (abilityScoreResults[0].result >=16) {
    strModifierText.innerText = ' +3';
    strModifier = 3;
  } if (abilityScoreResults[0].result ===18){
    strModifierText.innerText = ' +4';
    strModifier = 4;
  } 
};

//Dexterity Mod
let dexModifierText = document.querySelector('#dexModifierText');
let dexModifier = 0;
function dexMod(){
  if (abilityScoreResults[1].result >=2) {
    dexModifierText.innerText = ' -4';
    dexModifier = -4;
  } if (abilityScoreResults[1].result >=4) {
    dexModifierText.innerText = ' -3';
    dexModifier = -3; 
  } if (abilityScoreResults[1].result >=6) {
    dexModifierText.innerText = ' -2';
    dexModifier = -2;
  } if (abilityScoreResults[1].result >=8) {
    dexModifierText.innerText = ' -1';
    dexModifier = -1;  
  } if (abilityScoreResults[1].result >=10){
    dexModifierText.innerText = ' +0';
    dexModifier = 0;
  } if (abilityScoreResults[1].result >=12) {
    dexModifierText.innerText = ' +1';
    dexModifier = 1;
  } if (abilityScoreResults[1].result >=14) {
    dexModifierText.innerText = ' +2';
    dexModifier = 2;
  } if (abilityScoreResults[1].result >=16) {
    dexModifierText.innerText = ' +3';
    dexModifier = 3;
  } if (abilityScoreResults[1].result ===18){
    dexModifierText.innerText = ' +4';
    dexModifier = 4;
  }; 
};

//Constitution Mod
let conModifierText = document.querySelector('#conModifierText');
let conModifier = 0;
function conMod(){
  if (abilityScoreResults[2].result >=2) {
    conModifierText.innerText = ' -4';
    conModifier = -4;
  } if (abilityScoreResults[2].result >=4) {
    conModifierText.innerText = ' -3';
    conModifier = -3; 
  } if (abilityScoreResults[2].result >=6) {
    conModifierText.innerText = ' -2';
    conModifier = -2;
  } if (abilityScoreResults[2].result >=8) {
    conModifierText.innerText = ' -1';
    conModifier = -1;  
  } if (abilityScoreResults[2].result >=10){
    conModifierText.innerText = ' +0';
    conModifier = 0;
  } if (abilityScoreResults[2].result >=12) {
    conModifierText.innerText = ' +1';
    conModifier = 1;
  } if (abilityScoreResults[2].result >=14) {
    conModifierText.innerText = ' +2';
    conModifier = 2;
  } if (abilityScoreResults[2].result >=16) {
    conModifierText.innerText = ' +3';
    conModifier = 3;
  } if (abilityScoreResults[2].result ===18){
    conModifierText.innerText = ' +4';
    conModifier = 4;
  } 
};


let intModifierText = document.querySelector('#intModifierText');
let intModifier = 0;
function intMod(){
  if (abilityScoreResults[3].result >=2) {
    intModifierText.innerText = ' -4';
    intModifier = -4;
  } if (abilityScoreResults[3].result >=4) {
    intModifierText.innerText = ' -3';
    intModifier = -3; 
  } if (abilityScoreResults[3].result >=6) {
    intModifierText.innerText = ' -2';
    intModifier = -2;
  } if (abilityScoreResults[3].result >=8) {
    intModifierText.innerText = ' -1';
    intModifier = -1;  
  } if (abilityScoreResults[3].result >=10){
    intModifierText.innerText = ' +0';
    intModifier = 0;
  } if (abilityScoreResults[3].result >=12) {
    intModifierText.innerText = ' +1';
    intModifier = 1;
  } if (abilityScoreResults[3].result >=14) {
    intModifierText.innerText = ' +2';
    intModifier = 2;
  } if (abilityScoreResults[3].result >=16) {
    intModifierText.innerText = ' +3';
    intModifier = 3;
  } if (abilityScoreResults[3].result ===18){
    intModifierText.innerText = ' +4';
    intModifier = 4;
  } 
};


let wisModifierText = document.querySelector('#wisModifierText');
let wisModifier = 0;
function wisMod(){
  if (abilityScoreResults[4].result >=2) {
    wisModifierText.innerText = ' -4';
    wisModifier = -4;
  } if (abilityScoreResults[4].result >=4) {
    wisModifierText.innerText = ' -3';
    wisModifier = -3; 
  } if (abilityScoreResults[4].result >=6) {
    wisModifierText.innerText = ' -2';
    wisModifier = -2;
  } if (abilityScoreResults[4].result >=8) {
    wisModifierText.innerText = ' -1';
    wisModifier = -1;  
  } if (abilityScoreResults[4].result >=10){
    wisModifierText.innerText = ' +0';
    wisModifier = 0;
  } if (abilityScoreResults[4].result >=12) {
    wisModifierText.innerText = ' +1';
    wisModifier = 1;
  } if (abilityScoreResults[4].result >=14) {
    wisModifierText.innerText = ' +2';
    wisModifier = 2;
  } if (abilityScoreResults[4].result >=16) {
    wisModifierText.innerText = ' +3';
    wisModifier = 3;
  } if (abilityScoreResults[4].result ===18){
    wisModifierText.innerText = ' +4';
    wisModifier = 4;
  } 
};

let chaModifierText = document.querySelector('#chaModifierText');
let chaModifier = 0;
function chaMod(){
  if (abilityScoreResults[5].result >=2) {
    chaModifierText.innerText = ' -4';
    chaModifier = -4;
  } if (abilityScoreResults[5].result >=4) {
    chaModifierText.innerText = ' -3';
    chaModifier = -3; 
  } if (abilityScoreResults[5].result >=6) {
    chaModifierText.innerText = ' -2';
    chaModifier = -2;
  } if (abilityScoreResults[5].result >=8) {
    chaModifierText.innerText = ' -1';
    chaModifier = -1;  
  } if (abilityScoreResults[5].result >=10){
    chaModifierText.innerText = ' +0';
    chaModifier = 0;
  } if (abilityScoreResults[5].result >=12) {
    chaModifierText.innerText = ' +1';
    chaModifier = 1;
  } if (abilityScoreResults[5].result >=14) {
    chaModifierText.innerText = ' +2';
    chaModifier = 2;
  } if (abilityScoreResults[5].result >=16) {
    chaModifierText.innerText = ' +3';
    chaModifier = 3;
  } if (abilityScoreResults[5].result ===18){
    chaModifierText.innerText = ' +4';
    chaModifier = 4;
  } 
};

// Suggest Classes based on certain ability scores 
function suggestAClass() {
  const benchmark = 13;
  const elegibleClasses = [];

  var suggestedClass = document.getElementById("suggestedClass");
  
  if (abilityScoreResults[0].result >= benchmark && abilityScoreResults[2].result >= benchmark){ 
    elegibleClasses.push("Barbarian, Fighter (Str based)")};
  if (abilityScoreResults[0].result >= benchmark && abilityScoreResults[1].result >= benchmark) {
    elegibleClasses.push("Fighter (Dex Based)")}; 
  if (abilityScoreResults[1].result >= benchmark && abilityScoreResults[5].result >= benchmark){
    elegibleClasses.push("Bard")}; 
  if (abilityScoreResults[0].result >= benchmark && abilityScoreResults[4].result >= benchmark){
    elegibleClasses.push("Cleric")};
  if (abilityScoreResults[2].result >= benchmark && abilityScoreResults[4].result >= benchmark) {
    elegibleClasses.push("Druid")}  
  if (abilityScoreResults[2].result >= benchmark && abilityScoreResults[5].result >= benchmark) {
    elegibleClasses.push("Sorcerer")};
  if (abilityScoreResults[0].result >= benchmark && abilityScoreResults[5].result >= benchmark) {
    elegibleClasses.push("Paladin")};
  if (abilityScoreResults[1].result >= benchmark && abilityScoreResults[4].result >= benchmark) {
    elegibleClasses.push("Monk")};
  if (abilityScoreResults[2].result >= benchmark && abilityScoreResults[3].result >= benchmark) {
    elegibleClasses.push("Wizard")}; 
  if (abilityScoreResults[1].result >= benchmark && abilityScoreResults[3].result >= benchmark) {
   elegibleClasses.push("Rogue")};
  if (abilityScoreResults[1].result >= benchmark && abilityScoreResults[4].result >= benchmark) {
    elegibleClasses.push("Ranger (Dex Based)")};
  if (abilityScoreResults[0].result >= benchmark && abilityScoreResults[4].result >= benchmark) {
    elegibleClasses.push("Ranger (Str Based)")}; 
  
  if (elegibleClasses.length === 0) {
    suggestedClass.innerText = ("None. Your stats are low or not optimal. \n \n Consider rolling a new character, or continue with the stats you were dealt.")}; 
  suggestedClass.innerText += elegibleClasses.join(', ');
}
 


// HP (Based on class choice)
let startingHP;

function showClassContent() {
      var charClassDropdown = document.getElementById("charClassDropdown");
      var bbnContent = document.getElementById("barbarianText");
      var brdContent = document.getElementById("bardText");
      var clrContent = document.getElementById("clericText");
      var drdContent = document.getElementById("druidText");
      var ftrContent = document.getElementById("fighterText");
      var mnkContent = document.getElementById("monkText");
      var palContent = document.getElementById("paladinText");
      var rgrContent = document.getElementById("rangerText");
      var rogContent = document.getElementById("rogueText");
      var sorContent = document.getElementById("sorcererText");
      var wizContent = document.getElementById("wizardText");

      var bbnStartingHPText = document.getElementById("bbnStartingHPText");
      var brdStartingHPText = document.getElementById("brdStartingHPText");
      var clrStartingHPText = document.getElementById("clrStartingHPText");
      var drdStartingHPText = document.getElementById("drdStartingHPText");
      var ftrStartingHPText = document.getElementById("ftrStartingHPText");
      var mnkStartingHPText = document.getElementById("mnkStartingHPText");
      var palStartingHPText = document.getElementById("palStartingHPText");
      var rgrStartingHPText = document.getElementById("rgrStartingHPText");
      var rogStartingHPText = document.getElementById("rogStartingHPText");
      var sorStartingHPText = document.getElementById("sorStartingHPText");
      var wizStartingHPText = document.getElementById("wizStartingHPText");


      // Hide all the Classes info, this keeps it from piling on
      bbnContent.style.display = 'none';
      brdContent.style.display = 'none';
      clrContent.style.display = 'none';
      drdContent.style.display = 'none';
      ftrContent.style.display = 'none';
      mnkContent.style.display = 'none';
      palContent.style.display = 'none';
      rgrContent.style.display = 'none';
      rogContent.style.display = 'none';
      sorContent.style.display = 'none';
      wizContent.style.display = 'none';



      if (charClassDropdown.value === "barbarian") {
          bbnContent.style.display = "block";
          startingHP = 12 + conModifier;
          bbnStartingHPText.innerText = startingHP;
      } 
      
      if (charClassDropdown.value === "bard") {
          brdContent.style.display = "block";
          startingHP = 6 + conModifier;
          brdStartingHPText.innerText = startingHP;
      }  
      
      if (charClassDropdown.value === "cleric") {
          clrContent.style.display = "block";
          startingHP = 8 + conModifier;
          clrStartingHPText.innerText = startingHP;
      } 
      
      if(charClassDropdown.value === "druid") {
          drdContent.style.display = "block";
          startingHP = 8 + conModifier;
          drdStartingHPText.innerText = startingHP;
      }
      
      if (charClassDropdown.value === "fighter") {
          ftrContent.style.display = "block";
          startingHP = 10 + conModifier;
          ftrStartingHPText.innerText = startingHP;
      }
      
      if (charClassDropdown.value === "monk") {
          mnkContent.style.display = "block";
          startingHP = 8 + conModifier;
          mnkStartingHPText.innerText = startingHP;
      }
      
      if (charClassDropdown.value === "paladin") {
          palContent.style.display = "block";
          startingHP = 10 + conModifier;
          palStartingHPText.innerText = startingHP;
      }
      
      if (charClassDropdown.value === "ranger"){
          rgrContent.style.display = "block";
          startingHP = 8 + conModifier;
          rgrStartingHPText.innerText = startingHP;
      }
      
      if (charClassDropdown.value === "rogue") {
          rogContent.style.display = "block";
          startingHP = 6 + conModifier;
          rogStartingHPText.innerText = startingHP;
      }
      
      if (charClassDropdown.value === "sorcerer"){
          sorContent.style.display = "block";
          startingHP = 4 + conModifier;
          sorStartingHPText.innerText = startingHP;      
        }
      
      if (charClassDropdown.value === "wizard") {
          wizContent.style.display = "block";
          startingHP = 4 + conModifier;
          wizStartingHPText.innerText = startingHP;
      }
    } 
    

// Races 

const races = [
	{
	race: "human", 
	description: "\n Most humans are the descendants of pioneers, conquerors, trad¬ ers, travelers, refugees, and other people on the move. As a result, human lands are home to a mix of people—physically, culturally, religiously, and politically different. Hardy or fine, light-skinned or dark, showy or austere, primitive or civilized, devout or impi¬ ous, humans run the gamut.",
	adjustments: "none.",
  favoredClass: "any.",
  racialBonuses: "\n 1 extra feat at 1st level, and 4 extra skill points."
  },
  {
  race: "half-elf", 
  description: "\n To humans, half-elves look like elves. To elves, they look like humans—indeed, elves call them half-humans. Half-elf height ranges from under 5 feet to about 6 feet tall, and weight usually ranges from 100 to 180 pounds.",
  adjustments: "none.",
  favoredClass: "any.",
  racialBonuses: "\n Immunity to sleep spells \n +2 spell resistance \n +1 racial bonus on Listen, Search, and Spot checks \n +2 racial bonus on Diplomacy and Gather Information checks"
  },
    {
  race: "elf", 
  description: "\n Elves mingle freely in human lands, always welcome yet never at home there. They are well known for their poetry, dance, song, lore, and magical arts. Elves favor things of natural and simple beauty. When danger threatens their woodland homes, however, elves reveal a more martial side, demonstrating skill with sword, bow, and battle strategy.",
  adjustments: "+2 Dexterity, –2 Constitution",
  favoredClass: "Wizard",
  racialBonuses: "\n Immunity to sleep spells \n +2 spell resistance \n +2 racial bonus on Listen, Search, and Spot checks \n +2 racial bonus on Diplomacy and Gather Information checks \n Weapon Proficiency for the longsword, shortbow, longbow, and rapier"
  },
    {
  race: "half-orc", 
  description: "\n In the wild frontiers, tribes of human and orc barbarians live in uneasy balance, fighting in times of war and trading in times of peace. Half-orcs who are born in the frontier may live with either human or orc parents, but they are nevertheless exposed to both cultures. Some, for whatever reason, leave their homeland and travel to civilized lands, bringing with them the tenacity, courage, and combat prowess that they developed in the wilds.",
  adjustments: "+2 Strength, –2 Intelligence, –2 Charisma.",
  favoredClass: "Barbarian",
  racialBonuses: "\n Orc Blood: Can use magic items that are only usable by orcs"
  },
    {
  race: "halfling", 
  description: "\n Halflings are clever, capable opportunists. Halfling individuals and clans find room for themselves wherever they can. Often they are strangers and wanderers, and others react to them with suspicion or curiosity. Depending on the clan, halflings might be reliable, hard-working (if clannish) citizens, or they might be thieves just waiting for the opportunity to make a big score and disappear in the dead of night. Regardless, halflings are cunning, resourceful survivors.",
  adjustments: "+2 Dexterity, –2 Strength",
  favoredClass: "Rogue.",
  racialBonuses: "\n +1 size bonus to Armor Class \n +1 size bonus on attack rolls \n +4 size bonus on Hide checks \n RESTRICTED TO SMALL WEAPONS \n +2 racial bonus on Climb, Jump, and Move Silently checks \n +1 racial bonus on all saving throws \n +2 morale bonus on saving throws against fear \n +1 racial bonus on attack rolls with a thrown weapon and slings \n +2 racial bonus on Listen checks"
  },
    {
  race: "gnome", 
  description: "\n Gnomes are welcome everywhere as technicians, alchemists, and inventors. Despite the demand for their skills, most gnomes prefer to remain among their own kind, living in comfortable burrows beneath rolling, wooded hills where animals abound.",
  adjustments: "+2 Constitution, –2 Strength",
  favoredClass: "Bard.",
  racialBonuses: "\n +1 size bonus to Armor Class \n +1 size bonus on attack rolls \n +4 size bonus on Hide checks \n RESTRICTED TO SMALL WEAPONS \n +2 racial bonus on saving throws against illusions \n +1 racial bonus on attack rolls against kobolds and goblinoids \n +4 dodge bonus to Armor Class against monsters of the giant type \n +2 racial bonus on Craft (alchemy) checks \n +2 racial bonus on Listen checks"
  },
    {
  race: "dwarf", 
  description: "\n Dwarves are known for their skill in warfare, their ability to with- stand physical and magical punishment, their knowledge of the earth’s secrets, their hard work, and their capacity for drinking ale. Their mysterious kingdoms, carved out from the insides of moun- tains, are renowned for the marvelous treasures that they produce as gifts or for trade.",
  adjustments: "+2 Constitution, –2 Charisma",
  favoredClass: "Fighter.",
  racialBonuses: "\n Stonecunning: +2 bonus on Search checks to notice unusual stonework (such as sliding walls, stonework traps) \n Weapon Familiarity: Axes  \n Stability: +4 bonus on ability checks made to resist being bull rushed or tripped when standing on the ground \n +2 racial bonus on saving throws against poison \n +2 racial bonus on saving throws against spells and spell-like effects \n +1 racial bonus to attack rolls against orcs (including half-orcs) and goblinoids \n +4 dodge bonus to Armor Class against monsters of the giant type \n +2 racial bonus on Appraise checks that are related to stone or metal items \n +2 racial bonus on Craft checks that are related to stone or metal"
  }
]


// //Choose Class NOT SURE IF I NEED THIS.
// var selectedClass;
// function updateClassSelection(value) {
//         selectedClass = value;
//         //display class info based on Check
//         if (selectedClass === 'Barbarian') {
//         document.getElementById("raceResultText").innerText = races[0].description;
//         document.getElementById("raceResultText").innerText += "\n \n Racial Trait Bonuses: " + races[0].racialBonuses;
//         document.getElementById("raceResultText").innerText += "\n \n Ability Score Adjustments: " + races[0].adjustments;
//         document.getElementById("raceResultText").innerText += "\n \n Favored Class: " + races[0].favoredClass;
        

//         }
//       }



// Choose Race

 var selectedRace;

    function updateRaceSelection(value) {
        selectedRace = value;
      	//display racial info based on Check
      	if (selectedRace === 'Human') {
        document.getElementById("raceResultText").innerText = races[0].description;
        document.getElementById("raceResultText").innerText += "\n \n Racial Trait Bonuses: " + races[0].racialBonuses;
        document.getElementById("raceResultText").innerText += "\n \n Ability Score Adjustments: " + races[0].adjustments;
        document.getElementById("raceResultText").innerText += "\n \n Favored Class: " + races[0].favoredClass;
        
  } else if(selectedRace === 'Half-Elf') {
        document.getElementById("raceResultText").innerText = races[1].description;
        document.getElementById("raceResultText").innerText += "\n \n Racial Trait Bonuses: " + races[1].racialBonuses;
        document.getElementById("raceResultText").innerText += "\n \n Ability Score Adjustments: " + races[1].adjustments;
        document.getElementById("raceResultText").innerText += "\n \n Favored Class: " + races[1].favoredClass;
        
    } else if (selectedRace === 'Elf'){
        document.getElementById("raceResultText").innerText = races[2].description;
        document.getElementById("raceResultText").innerText += "\n \n Racial Trait Bonuses: " + races[2].racialBonuses;
        document.getElementById("raceResultText").innerText += "\n \n Ability Score Adjustments: " + races[2].adjustments;
        document.getElementById("raceResultText").innerText += "\n \n Favored Class: " + races[2].favoredClass;
        
    } else if (selectedRace === 'Half-Orc'){
        document.getElementById("raceResultText").innerText = races[3].description;
        document.getElementById("raceResultText").innerText += "\n \n Racial Trait Bonuses: " + races[3].racialBonuses;
        document.getElementById("raceResultText").innerText += "\n \n Ability Score Adjustments: " + races[3].adjustments;
        document.getElementById("raceResultText").innerText += "\n \n Favored Class: " + races[3].favoredClass;
        
    } else if (selectedRace === 'Halfling'){
        document.getElementById("raceResultText").innerText = races[4].description;
        document.getElementById("raceResultText").innerText += "\n \n Racial Trait Bonuses: " + races[4].racialBonuses;
        document.getElementById("raceResultText").innerText += "\n \n Ability Score Adjustments: " + races[4].adjustments;
        document.getElementById("raceResultText").innerText += "\n \n Favored Class: " + races[4].favoredClass;
        
    } else if (selectedRace === 'Gnome'){
        document.getElementById("raceResultText").innerText = races[5].description;
        document.getElementById("raceResultText").innerText += "\n \n Racial Trait Bonuses: " + races[5].racialBonuses;
        document.getElementById("raceResultText").innerText += "\n \n Ability Score Adjustments: " + races[5].adjustments;
        document.getElementById("raceResultText").innerText += "\n \n Favored Class: " + races[5].favoredClass;
        
    } else if (selectedRace === 'Dwarf'){
        document.getElementById("raceResultText").innerText = races[6].description;
        document.getElementById("raceResultText").innerText += "\n \n Racial Trait Bonuses: " + races[6].racialBonuses;
        document.getElementById("raceResultText").innerText += "\n \n Ability Score Adjustments: " + races[6].adjustments;
        document.getElementById("raceResultText").innerText += "\n \n Favored Class: " + races[6].favoredClass;
        
    }
	}

// Skill Points

let skillPointsRemaining = 0;
const skillPointsText = document.querySelector("#skillPointsText");
skillPointsText.innerText = skillPointsRemaining;



// Final Calculations: HP, Gold

