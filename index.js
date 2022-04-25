import express from "express";
import cors from "cors";
import chalk from "chalk";
import crypto from 'crypto';



const usuarios = [
    {
      
        username: 'bobesponja', 
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    }
];

const tweetsLista = [
  {
   
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
];

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", (req, resp) => {
  const { username, avatar } = req.body;
  const usuario = {
    username,
    avatar
  };

  usuarios.push(usuario);

  return resp.json({ message: "OK" });
});

app.post("/tweets", (req, resp) => {
    const { username, tweet } = req.body;
    const tweets = {
      username,
      tweet,
    };
    
    tweetsLista.push(tweets);
  
    return resp.json({ message: "OK" });
  });

app.get("/tweets",(req,resp)=>{
    return resp.json(tweetsLista);
})

app.listen(5000, console.log(chalk.blue("conectado com sucesso")));
