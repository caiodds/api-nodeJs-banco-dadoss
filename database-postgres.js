import { randomUUID } from "crypto"
import { sql } from "./sql.js"

export class DatabasePostgres{
   async  list(search){
    let videos

    if (search) {
        videos = await sql`SELECT * FROM videos where title ilike ${'%' + search + '%'}`
    }else{
        videos = await sql`SELECT * FROM videos`
    }
}

    async create(video){
        const videoId = randomUUID()
        const {title,description,duration} = video
        await sql `insert into videos(id,title,description,duration) VALUES(${videoId},${title},${description},${duration})`
       
    }
    update(id,video){
        
    }
    delete(id){
       
    }
}