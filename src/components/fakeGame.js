import { faker } from '@faker-js/faker';

const generateFakeGame = () => {
    return {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        logo: faker.image.url(),
    };
};

const generateFakeCharacter = () => {
    return {
        id: faker.datatype.uuid(),
        name: faker.lorem.words(2),
        portrait: faker.image.avatar(),
    };
};

const generateFakeData = () => {
    const game = generateFakeGame();
    const characters = Array.from({ length: 5 }, generateFakeCharacter);

    return { game, characters };
};

export default generateFakeData();
