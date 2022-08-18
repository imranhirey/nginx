let express=require('express');
let app=express();
app.get('/',(req,res)=>{
    res.send('<h1>this is secure nginx server with load blancer</h1>');
}
);
app.listen(3000,()=>{
    console.log('Server started at port 3000');
}
);
