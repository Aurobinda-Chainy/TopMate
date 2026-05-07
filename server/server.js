import http from "http";
import { Server } from "socket.io";

import app from "./src/app.js";
import connectDB from "./config/database.js";

connectDB();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join-room", (roomId) => {
    socket.on("offer", ({ roomId, offer }) => {
      socket.to(roomId).emit("offer", offer);
    });

    socket.on("answer", ({ roomId, answer }) => {
        socket.on("ice-candidate", ({ roomId, candidate }) => {

    socket.to(roomId).emit("ice-candidate", candidate);

});
      socket.to(roomId).emit("answer", answer);
    });
    socket.join(roomId);
    console.log(`${socket.id} joined room ${roomId}`);
    socket.to(roomId).emit("user-joined");
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected: ", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
