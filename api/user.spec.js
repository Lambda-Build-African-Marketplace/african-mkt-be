const request = require('supertest')
const server = require('./server.js')
const db = require('../data/dbConfig.js')

jest.mock('../auth/validate-middleware.js', () => {
    return (req,res, next) => {
        next()
    }
})


describe('User', () => {
    beforeEach(async () => {
        await db.seed.run()
    })

    describe('GET api/users/:id', () => {
        it('should return status code 200 if successful', async () => {
            const response = await request(server).get(`/api/users/1`)
            expect(response.statusCode).toBe(200)
        })

        it('hould return status code 404 if user id', async () => {
            const response = await request(server).get(`/api/users/100`)
            expect(response.statusCode).toBe(404)
        })
    })
    

    describe('GET api/users/:id/items', () => {
        it('hould return status code 200 if user id', async () => {
            const response = await request(server).get(`/api/users/1/items`)
            expect(response.statusCode).toBe(200)
        })
    })

    
    describe('PUT api/users/:id', () => {
        it('should return status code 200 if user id', async () => {
            const userPut = {
                store_name: "Testing!!"
            }
            const response = await request(server).put(`/api/users/1`).send(userPut)
            console.log('PUT user response', response.body)
            expect(response.statusCode).toBe(200)
        })
        it('should return updated store name', async () => {
            const userPut = {
                store_name: "Testing!!"
            }
            const response = await request(server).put(`/api/users/1`).send(userPut)
            // console.log('PUT user response', response.body)
            expect(response.body.store_name).toBe(`${userPut.store_name}`)
        })
    })
    
    describe('DELETE api/users/:id', () => {
        it('returns 200 if successful', async () => {
             const response = await request(server).delete("/api/users/2")
 
             expect(response.statusCode).toBe(204)
        })
    })
})