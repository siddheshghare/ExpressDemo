import express from "express";
const app=express();
app.get('/',(req,res)=>{
    res.send("server is running");
})
app.get('/api/jokes',(req,res)=>{
    
        const jokes= [
          {
            "id": 1,
            "title": "Why don't scientists trust atoms?",
            "joke": "Because they make up everything!"
          },
          {
            "id": 2,
            "title": "How does a penguin build its house?",
            "joke": "Igloos it together!"
          },
          {
            "id": 3,
            "title": "Why did the math book look sad?",
            "joke": "Because it had too many problems."
          },
          {
            "id": 4,
            "title": "What do you call fake spaghetti?",
            "joke": "An impasta!"
          },
          {
            "id": 5,
            "title": "Why couldn't the bicycle stand up by itself?",
            "joke": "It was two-tired!"
          }
        ]
        res.send(jokes);
      
      
})
const port =3000;
app.listen(port,()=>{
    console.log("started");
    
})