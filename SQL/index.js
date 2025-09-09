const {faker} = require("@faker-js/faker");

let getRandomUser = () => {
    return{
        id: faker.string.uuid(),
        username: faker.internet.username(),
        emial: faker.internet.email(),
        password: faker.internet.password(),
    };
};

console.log(getRandomUser());