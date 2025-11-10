import { test, expect, APIRequestContext } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { GoRestApiClient } from '../../src/api/GoRestApiClient';

let apiContext!: APIRequestContext;
const unique = faker.string.alphanumeric(10).toLowerCase();

let newUserId: number;
let userPostId: number;
let postPayload: any;

test.describe.serial('GoRest - Users & Posts', () => {
  test.beforeAll(async () => {
    apiContext = await GoRestApiClient.create();
  });

  test('CREATE a New User (POST /users)', async () => {

    const newUserPayload = {
      name: faker.person.firstName(),
      email: `user_${unique}@example.com`,
      gender: faker.person.sexType(),
      status: faker.helpers.arrayElement(['active', 'inactive'])
    };

    const response = await apiContext.post(`users`, {
      data: newUserPayload
    });

    expect(response.status()).toBe(201);
    const jsonResponse = await response.json();
    newUserId = jsonResponse.id;
  });

  test('CREATE a Blog Post for the New User (POST /posts)', async ({ request }) => {
    postPayload = {
      user_id: newUserId,
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph()
    };

    const response = await apiContext.post(`users/${newUserId}/posts`, {
      data: postPayload,
    });

    expect(response.status()).toBe(201);
    const jsonResponse = await response.json();
    userPostId = jsonResponse.id;

  });

  test('READ and Verify the Blog Post (GET /posts/{postId})', async () => {
    const response = await apiContext.get(`posts/${userPostId}`);

    expect(response.status()).toBe(200);
    const json = await response.json();

    expect(json.id).toBe(userPostId);
    expect(json.user_id).toBe(newUserId);
    expect(json.title).toBe(postPayload.title);
    expect(json.body).toBe(postPayload.body);
  });

  test('UPDATE the Blog Post (PATCH /posts/{postId}):', async () => {
    const updatedTitle = `${postPayload.title} Updated-PATCH`;

    const response = await apiContext.patch(`posts/${userPostId}`, {
      data: { title: updatedTitle },
    });

    expect(response.status()).toBe(200);

    const json = await response.json();
    expect(json.id).toBe(userPostId);
    expect(json.user_id).toBe(newUserId);
    expect(json.title).toBe(updatedTitle);
    expect(json.body).toBe(postPayload.body);

    postPayload.title = updatedTitle;
  });

  test('UPDATE the Blog Post (PUT /posts/{postId}):', async () => {
    const updatedTitle = `${postPayload.title} Updated-PUT`;

    const response = await apiContext.put(`posts/${userPostId}`, {
      data: {
        user_id: newUserId,
        title: updatedTitle,
        body: postPayload.body,
      },
    });

    expect(response.status()).toBe(200);

    const json = await response.json();
    expect(json.id).toBe(userPostId);
    expect(json.user_id).toBe(newUserId);
    expect(json.title).toBe(updatedTitle);
    expect(json.body).toBe(postPayload.body);
  });

  test('DELETE the Blog Post (DELETE posts/{postId})', async () => {
    const response = await apiContext.delete(`posts/${userPostId}`);
    expect(response.status()).toBe(204);
  });

  test('VERIFY Deletion (GET posts/{postId} -> 404)', async () => {
    const response = await apiContext.get(`posts/${userPostId}`);
    expect(response.status()).toBe(404);
  });


});