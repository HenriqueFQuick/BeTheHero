const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connections');

describe('ONG', () => {
    beforeEach(async() => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            //.set('Authorization', 'asfa') <- Como colocar header
            .send({
                name: "teste2",
                email:"email@email.com",
                whatsapp: "31998180608",
                city: "Rio do Sul",
                uf: "SC"
            })

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    })
})