import { faker } from '@faker-js/faker';

const createFakeArticles = (numArticles = 10) => {
    const articles = [];

    for (let i = 0; i < numArticles; i++) {
        const article = {
            thumbnail: faker.image.url(),
            gameLogo: faker.image.avatar,
            name: faker.lorem.words(5),
            date: faker.date.past().toISOString(),
            link: faker.internet.url()
        };
        articles.push(article);
    }

    return articles;
};

const fakeArticles = createFakeArticles();

export default fakeArticles;