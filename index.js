const express = require('express');
const app = express()
const port = 4000

app.use((req, res, next) => {
  const key = req.headers['x-api-key']
 if( key === "12345"){
     next();
 }
else{
    return res.status(401).json({ error: "Unauthorized user. Go away" }) // <-- return + status add kiya
}
});


app.get('/data', (req, res) => {
  res.json({message:"secret data"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})