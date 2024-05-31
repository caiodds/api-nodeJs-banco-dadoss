import { sql } from "./sql.js";



sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL
);
`.then(() =>{
   console.log('Tabela criada')
})