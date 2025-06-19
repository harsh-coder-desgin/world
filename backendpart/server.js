import express from 'express';

const app = express();
// app.use(express.static('dist'))
// app.get('/',(req,res)=>{
//     res.send('server');
// })
app.get('/api/jokes',(req,res)=>{
const jokes = [
  {
    id: 1,
    title: "Why don't scientists trust atoms?",
    content: "Because they make up everything!"
  },
  {
    id: 2,
    title: "Parallel lines",
    content: "Parallel lines have so much in common… it’s a shame they’ll never meet."
  },
  {
    id: 3,
    title: "Elevator pun",
    content: "I would tell you an elevator joke, but it's an uplifting experience."
  },
  {
    id: 4,
    title: "Math teacher's party",
    content: "Why did the math teacher throw a party? Because she wanted to make sure it was a real function!"
  },
  {
    id: 5,
    title: "Broken pencil",
    content: "I was going to tell you a joke about a broken pencil... but there's no point."
  }
];
res.send(jokes);
})

const port = "https://world-alpha.vercel.app";

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
});