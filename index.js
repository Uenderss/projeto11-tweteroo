import express from "express";
import cors from "cors";
import chalk from "chalk";
import crypto from 'crypto';



const usuarios = [
    {
      
        username: 'bobesponja', 
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    },
    
];

const tweetsLista = [
  {
   
    username: "bobesponja 1",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
   
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },  {
   
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },  {
   
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },  {
   
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },  {
   
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },  {
   
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },  {
   
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },  {
   
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
];

const app = express();
app.use(cors());
app.use(express.json());
let userAvata;

app.post("/sign-up", (req, resp) => {
  const { username, avatar } = req.body;
  const usuario = {
    username,
    avatar
  };
  userAvata=avatar;
  usuarios.push(usuario);

  return resp.json({ message: "OK" });
});

app.post("/tweets", (req, resp) => {
    const { username, tweet } = req.body;
    const tweets = {
      avatar:userAvata,
      username,
      tweet,
    };
    
    tweetsLista.push(tweets);
  
    return resp.json({ message: "OK" });
  });

app.get("/tweets",(req,resp)=>{
  const lst=[...tweetsLista].reverse().splice(0,10);
  resp.status(200);
  resp.send(lst);
})

app.listen(5000, console.log(chalk.blue("conectado com sucesso")));
