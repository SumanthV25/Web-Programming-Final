import { create } from "domain";
import { createServer } from "http"
// server.listen("3000","127.0.0.1",()=>{
//     console.log("server is connected to port 3000 at local host")
// })
let express = create("express");
let app = express();
app.use(express.static (path.join(__dirname, "public")))
app.get("/", (_req, res) => {
    res.sendFile(__dirname + "/main.html");
  });
app.listen(3000, function () {
  console.log("Server is running on localhost3000");
  console.log(path.join(__dirname, "public"))
});

