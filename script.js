// Exercise 1
console.log('Exercise 1')

function getYoungestUser(users) {
    if (users.length === 0) {
        return null;
    }

    let youngestUser = users[0];

    for (let i = 1; i < users.length; i++) {
        if (users[i].age < youngestUser.age) {
            youngestUser = users[i];
        }
    }

    return youngestUser.name;
}

const users = [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21},
    {name: 'Ana', age: 28}
];

console.log(getYoungestUser(users));

// Exercise 2
console.log('Exercise 2')

function cloneUser(user) {
    const clonedUser = {...user};
    
    return clonedUser;
}

const user = {
    name: 'Temo', 
    age: 25
};

const newUser = cloneUser(user);

console.log(newUser);

// Exercise 3
console.log('Exercise 3')

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function findWinner() {
    let triesA = 0;
    let triesB = 0;

    let aGotThree = false;
    let bGotThree = false;

    while (!aGotThree) {
        triesA++;
        if (rollDice() === 3) {
            aGotThree = true;
        }
    }

    while (!bGotThree) {
        triesB++;
        if (rollDice() === 3) {
            bGotThree = true;
        }
    }

    if (triesA < triesB) {
        return `Player A wins`;
    } else if (triesB < triesA) {
        return `Player B wins`;
    } else {
        return `Tie`;
    }
}

console.log(findWinner());


