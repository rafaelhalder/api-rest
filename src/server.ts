import express from "express";
const PORT = 3333;

const app = express();

app.get("/",(request,response) => {
response.send('hello')
})

app.listen(PORT,()=> console.log(`Serdsaver is running on port ${PORT}`))