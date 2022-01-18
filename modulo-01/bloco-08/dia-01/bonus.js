const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const getDragonDamage = () => {
  const min = 15;
  const max = battleMembers.dragon.strength;

  return Math.floor(Math.random() * ((max + 1) - min)) + min;
};

const getWarriorDamage = () => {
  const min = battleMembers.warrior.strength;
  const max = battleMembers.warrior.strength * battleMembers.warrior.weaponDmg;

  return Math.floor(Math.random() * ((max + 1) - min)) + min;
};

const getMageData = () => {
  const min = battleMembers.mage.intelligence;
  const max = battleMembers.mage.intelligence * 2;

  if (battleMembers.mage.mana < 15) {
    return {
      damage: 'Não possui mana suficiente',
      manaSpent: 0,
    };
  } else {
    return {
      damage: Math.floor(Math.random() * ((max + 1) - min)) + min,
      manaSpent: 15,
    };
  }
};

const gameActions = {
  warriorTurn: (callback) => {
    battleMembers.warrior.damage = callback();
    battleMembers.dragon.healthPoints -= battleMembers.warrior.damage;
  },
  mageTurn: (callback) => {
    const cbResult = callback();
    battleMembers.mage.damage = cbResult.damage;
    if (typeof battleMembers.mage.damage === 'number') {
      battleMembers.dragon.healthPoints -= battleMembers.mage.damage;
    }
    battleMembers.mage.mana -= cbResult.manaSpent;
  },
  dragonTurn: (callback) => {
    battleMembers.dragon.damage = callback();
    battleMembers.mage.healthPoints -= battleMembers.dragon.damage;
    battleMembers.warrior.healthPoints -= battleMembers.dragon.damage;
  },
  runTurn: () => {
    gameActions.warriorTurn(getWarriorDamage);
    gameActions.mageTurn(getMageData);
    gameActions.dragonTurn(getDragonDamage);
    console.table(battleMembers);
  },
}

gameActions.runTurn();
