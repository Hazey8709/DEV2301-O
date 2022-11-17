import { faker } from "@faker-js/faker";

const avatar = faker.image.avatar();
const name = faker.name.firstName();
const email = faker.internet.email();
const latitude = faker.address.latitude();
const longitude = faker.address.longitude();

const userProfile = {
    avatar,
    name,
    email,
    latitude,
    longitude,
};

export default userProfile;
