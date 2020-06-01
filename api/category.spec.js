const request = require('supertest')
const server = require('./server.js')
const db = require('../data/dbConfig.js')

jest.mock('../auth/validate-middleware.js', () => {
    return (req,res, next) => {
        next()
    }
})

describe('category', () => {
    beforeEach(async () => {
        await db('category').truncate()
        await db('user').truncate()

        //seeds
        await db.seed.run()
    })

    describe('GET api/categories', () => {
        
        it('should return 200 if successful', async () => {

            const response = await request(server).get('/api/categories')
            expect(response.statusCode).toBe(200)
        })

        it('should return object containing the "type" if successful', async () => {

            const response = await request(server).get('/api/categories')
            // console.log('RES', response)
            // console.log('GRAOIFNESOIFJDF', response.body[1].type)
            expect(response.body[1].type).toBeDefined()
        })
       

    })

    //[ { id: 1, type: 'grain' }, { id: 2, type: 'sugar' } ]


    describe('GET api/categories/:id', () => {
        it('should return 200 if successful', async () => {
           
            const response = await request(server).get('/api/categories/1').send("1")
            expect(response.statusCode).toBe(200)
        })

        it('should return a category with id requested successful', async () => {
           
            const response = await request(server).get('/api/categories/1').send("1")
            expect(response.body.id).toBe(1)
        })
    })

    describe('POST api/categories', () => {
        it('should return 201 if successfull', async () => {
            const newCategory = {
                type: 'cattle'
            }

            const response =  await request(server).post('/api/categories').send(newCategory)
            expect(response.statusCode).toBe(201)
        })
        it('should return created category if successfull', async () => {
            const newCategory = {
                type: 'cattle'
            }

            const response =  await request(server).post('/api/categories').send(newCategory)
            // const cat = Category.findById(response.body.id)
            expect(response.body.type).toBe('cattle')
        })
    })

    describe('DELETE api/categories/:id', () => {
        it('should return 200 if successful', async () => {
           
            const response = await request(server).delete('/api/categories/1').send("1")
            expect(response.statusCode).toBe(200)
        })

        it('should return "Invalid Category ID." if id requested is not valid', async () => {
           
            const response = await request(server).get('/api/categories/10').send("10")
            // console.log("DELETE", response.body.message)
            expect(response.body.message).toBe('Invalid Category ID.')
        })
    })

})

