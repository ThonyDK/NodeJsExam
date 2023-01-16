import express from "express"; 
import http from "http";
import { Server } from "socket.io";

const app = express();

app.use(express.static("public"))

const server = http.createServer(app);
const io = new Server(server);


//app.use(express.urlencoded( {extended: true} )) 
app.use(express.json())

import cookieParser from "express";
app.use(cookieParser())

import session from "express-session";
app.use(session(
    {
    secret: 'keyboard cat',
    name: 'Test',
    resave: false,
    saveUninitialized: true,
    })) 


// Import routers
import contactRouter from "./routers/contactRouter/contactRouter.js"; 
app.use(contactRouter); 
import cartRouter from "./routers/cartRouter/cartRouter.js"; 
app.use(cartRouter); 
import chatRouter from "./routers/chatRouter/chatRouter.js";  
app.use(chatRouter);
import productRouter from "./routers/productRouter/productRouter.js";
app.use(productRouter); 
import myProfileRouter from "./routers/myprofileRouter/myprofileRouter.js"; 
app.use(myProfileRouter);
import signinRouter from "./routers/signinRouter/signinRouter.js";
app.use(signinRouter); 
import signupRouter from "./routers/signupRouter/signupRouter.js"; 
app.use(signupRouter); 
import logoutRouter from "./routers/logoutRouter/logoutRouter.js"
app.use(logoutRouter);



import { renderPage } from "./util/templateEngine.js"; 
import toastr from "toastr";
// Render frontpage 
const frontPage = renderPage("/frontpage/frontpage.html",
{
    tabTitle: "Nodejs frontpage",
    //cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});
// Endpoint frontpage
app.get("/", (req,res) => {
    res.send(frontPage); 
})


// Socket connection
io.on('connection', (socket) => {
    console.log(`A socket connected on id ${socket.id}`);
    socket.on('chat message', msg => {
      io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });
/*
io.on("connection", (socket) => {
    console.log(`A socket connected on id ${socket.id}`);

    socket.on("client choose a color", (data) => {

        // emits a broadcast to all sockets but itself
        socket.broadcast.emit("this is the new color", data);

        // emits only to the socket itself
        socket.emit("this is the new color", data);

        // emits to all sockets in the io namespace
        io.emit("this is the new color", data);
    });

    io.on("disconnect", () => {
        console.log(`Socket ${socket.id} left.`);
    });
});*/

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log("server is running on ", PORT)); 