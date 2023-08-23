const express = require('express');
const bodyparser = require('body-parser');
const AdminRouter = require('./routers/users.routers');
const crudRouter = require('./routers/crud.routers');
const likeRouter = require('./routers/like.routers');
const commentRouter = require('./routers/comment.routers');
const app = express();
app.use(bodyparser.json());
app.use(AdminRouter)
app.use(crudRouter);
app.use(likeRouter);
app.use(commentRouter);

app.listen(3000, async ()=>{
    console.log("server listening on port 3000");
})
