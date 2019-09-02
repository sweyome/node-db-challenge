const server = require('./server');

const PORT = process.env.PORT || 5000;



server.listen('5000',(req,res) =>{
    console.log(` listening on port ${PORT}`);
})