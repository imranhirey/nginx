let express=require('express');
let app=express();
app.get('/',(req,res)=>{
    res.send('<h1>this is secure nginx server with load blancer</h1>');
}
);
app.listen(4200,()=>{
    console.log('Server started at port 4200');
}
);
