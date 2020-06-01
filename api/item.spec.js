const request = require('supertest')
const server = require('./server.js')
const db = require('../data/dbConfig.js')

jest.mock('../auth/validate-middleware.js', () => {
    return (req,res, next) => {
        next()
    }
})

describe('Item', () => {
    beforeEach(async () => {
        // await db('category').truncate()
        // await db('user').truncate()
       
        //seeds
        await db.seed.run()
    })


    describe('GET api/items', () => {
        
        it('should return 200 if successful', async () => {

            const response = await request(server).get('/api/items')
            // console.log('RES', response)
            expect(response.statusCode).toBe(200)
        })

        it('should return 200 if successful', async () => {

            const response = await request(server).get('/api/items')
            // console.log('RES', response)
            expect(response.body.length).toBe(2)
        })

    })

    describe('GET api/items/:id', () => {
        it('should return 200 if successful', async () => {
           
            const response = await request(server).get('/api/items/1').send("1")
            expect(response.statusCode).toBe(200)
        })

        it('should return a item with id requested successful', async () => {
           
            const response = await request(server).get("/api/items/1")
            expect(response.body.id).toBe(1)
        })

        it('should return "Invalid Item ID." if id requested is not valid', async () => {
           
            const response = await request(server).get('/api/items/10').send("10")
            // console.log("DELETE", response.body.message)
            expect(response.body.message).toBe('Invalid Item ID.')
        })

    })

    describe('POST api/items/user_id', () => {
        it('should require name', async () => {

            const userPost = {
                email: 'e@gmail.com',
                password: '123'
            }

            const itemPost = {
                price: 10
            }
            const newUser = await request(server).post("/api/auth/register").send(userPost)
            // console.log('NEW USER', newUser)
            const response =  await request(server).post(`/api/items/${newUser.body.newUser.id}`).send(itemPost)
            // console.log('POST for user_id RESPONSE', response)
            expect(response.body.error).toBe( "need a name for a new item")
        })

        it('should require price', async () => {

            const userPost = {
                email: 'e@gmail.com',
                password: '123'
            }

            const itemPost = {
                name: "Organic candy"
            }
            const newUser = await request(server).post("/api/auth/register").send(userPost)
            // console.log('NEW USER', newUser)
            const response =  await request(server).post(`/api/items/${newUser.body.newUser.id}`).send(itemPost)
            // console.log('POST for user_id RESPONSE', response)
            expect(response.body.error).toBe("need a price for a new item!")
        })
    })

   describe('PUT api/items/:id', () => {
        it('returns a 200 if successful', async () => {
            const userPost = {
                email: 'e@gmail.com',
                password: '123'
            }

            const itemPost = {
                name: "candy",
                price: 5 
            }

            const itemPut = {
                name: "80% dark chocolate"
            }

            const newUser = await request(server).post("/api/auth/register").send(userPost)
            // console.log('NEW USER', newUser)
            const newPost =  await request(server).post(`/api/items/${newUser.body.newUser.id}`).send(itemPost)
            // console.log('POST for user_id RESPONSE', newPost)
            const response = await request(server).put(`/api/items/3`).send(itemPut)
            expect(response.statusCode).toBe(200)
        })


        it('returns updated item if successful', async () => {
            const userPost = {
                email: 'e@gmail.com',
                password: '123'
            }

            const itemPost = {
                name: "candy",
                price: 5 
            }

            const itemPut = {
                name: "80% dark chocolate"
            }

            const newUser = await request(server).post("/api/auth/register").send(userPost)
            // console.log('NEW USER', newUser)
            const newPost =  await request(server).post(`/api/items/${newUser.body.newUser.id}`).send(itemPost)
            // console.log('POST for user_id RESPONSE', newPost)
            const response = await request(server).put(`/api/items/3`).send(itemPut)
            expect(response.body.name).toBe(`${itemPut.name}`)
        })
   })

   describe('DELETE api/items/:id', () => {
       it('returns 200 if successful', async () => {
            const response = await request(server).delete("/api/items/2")

            expect(response.statusCode).toBe(200)
       })
   })
})