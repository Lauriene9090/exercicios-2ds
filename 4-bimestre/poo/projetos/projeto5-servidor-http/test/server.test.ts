import request from 'supertest';
import app from '../src/server';

describe('Servidor Express', () => {
  test('Deve responder na rota raiz com status 200', async () => {
    const resposta = await request(app).get('/');
    expect(resposta.status).toBe(200);
  });
});
