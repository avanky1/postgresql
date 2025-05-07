 import { Client } from 'pg';

  
 import express from 'express';

 const app = express();
app.use(express.json());

 const pgClient = new Client("postgresql://neondb_owner:npg_kao4CtKJQYf8@ep-bitter-base-a43f62vf-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require")
 pgClient.connect();



app.post("/signup",async (req, res) => {
     const username = req.body.username;
     const password = req.body.password;
     const email = req.body.email;


     const insertQuery = `INSERT INTO users (username, password, email) VALUES ('${username}', '${password}', '${email}')`;
     const response = await pgClient.query(insertQuery);
     
     res.json({
          message: "User created successfully"
     })
})

app.listen(3000, () => {
     console.log("Server is running on port 3000");
});