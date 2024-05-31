import { fastify } from "fastify";
import { title } from "process";
import { request } from "http";
import { DatabasePostgres } from "./database-postgres.js";
const serve = fastify()
const database = new DatabasePostgres()



serve.get('/videos', async (request) => {
    const search = request.query.search


    const videos = await database.list(search)

    return videos
    
})


serve.post('/videos', async (request, reply) => {

    const { title, description, duration } = request.body

    await database.create({
        title,
        description,
        duration,
    })

    return reply.status(201).send()
})





serve.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const { tittle, descricao, duracao } = request.body

    database.update(videoId, {
        tittle,
        descricao,
        duracao,
    })

    return reply.status(204).send()
});

serve.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id

    database.delete(videoId)

    return reply.status(204).send()
})

serve.listen({
    port: 8080
})