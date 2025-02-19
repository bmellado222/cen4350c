import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

const generateFakeGame = () => {
    return {
        id: uuidv4(),
        name: faker.commerce.productName(),
        logo: faker.image.url(),
    };
};

const generateFakeCharacter = () => {
    return {
        id: uuidv4(),
        name: faker.lorem.words(2),
        portrait: faker.image.avatar(),
        overview: faker.lorem.words(50),
    };
};

const generateFakeData = (numberOfGames = 3, charactersPerGame = 5) => {
    return Array.from({ length: numberOfGames }, () => {
        const game = generateFakeGame();
        const characters = Array.from({ length: charactersPerGame }, generateFakeCharacter);

        return { game, characters };
    });
};

export default generateFakeData;
