import express, { response } from "express";
import cors from 'cors';
import chalk from "chalk";

const usuario=[
    {
        username: 'bobesponja', 
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    },
    {
        username: 'patrick', 
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    }

]
const app=express();
app.use(cors());

app.get("/sign-up",(req,resp)=>{

})
app.get("/informeEndero/:idParametro/categoria/:outrasIds",(req,resp)=>{
    const {idParametro,outrasIds}=req.params;
    resp.send("bem vindo")
})

app.listen(5000,console.log(chalk.blue("conectado com sucesso")));