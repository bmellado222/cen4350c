import { faker } from '@faker-js/faker';



const createFakeTerms = (numTerms = 10) => {
    const terms = [];

    for (let i = 0; i < numTerms; i++) {
        const term = {
            gameLogo: faker.image.avatar,
            name: faker.lorem.words(2),
            description: faker.lorem.words(50),
        };
        terms.push(term);
    }

    return terms;
};

const fakeTerms = createFakeTerms();

export default fakeTerms;