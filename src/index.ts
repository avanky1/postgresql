 import { Client } from 'pg';

 const pgClient = new Client("postgresql://neondb_owner:npg_kao4CtKJQYf8@ep-bitter-base-a43f62vf-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require")

//  const pgClient = new Client({
//      user: "neondb_owner",
//      host: "ep-bitter-base-a43f62vf-pooler.us-east-1.aws.neon.tech",
//      database: "neondb",
//      password: "npg_kao4CtKJQYf8",
//      port: 5432,
//      ssl: true,
//  })

async function main(){
     await pgClient.connect();
     const response = await pgClient.query("SELECT * FROM users");
     console.log(response.rows);

}
 
main()