const request = require('supertest');
const appUrl = 'https://kasir-api.belajarqa.com';

async function authenticateUser() {
  try {
    const loginResponse = await request(appUrl)
      .post('/authentications')
      .send({
        email: 'dandy@ex.com',
        password: '123adsfadf@',
      });

    return loginResponse.body.data.accessToken;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  authenticateUser,
};
