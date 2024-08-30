import axios from 'axios';
import express from 'express';
//const app = express();
// import port from 'port';
// const PORT = 3000;
// app.use(express.json());
// const imageUrls = [
//         'https://official-joke-api.appspot.com/jokes/random'
//     ];
// app.get('/api/image/random', async (req, res) => {
//     try {
//         const response = await axios.get("https://official-joke-api.appspot.com/jokes/random", { responseType: 'arraybuffer' });
//         res.set('Content-Type', 'text'); // Adjust content type based on text format
//         res.send(response.data);
//     } catch(error){
//         console.log(error.message);
//         res.status(500).send("Error Fetching Image Random Image");
        
//     }
// });
// app.listen(3002, () => {
//     console.log("Server is Runn ing on Port");
    
// });

import http from "http";
import { log } from 'console';

const port = 8080;
const helper = async () => {
    const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    });
    // console.log(response.data);
    return response.data;
}
// helper();
const server = http.createServer(async (request, response) => {
    if (request.method == "GET") {
        response.writeHead(200, { "Content-Type": "application/json" });
        const joke = await helper();
        response.end(JSON.stringify({ joke }));
        // response.json({message:"hii"})
    }
    });

    server.listen(port, () => {
        console.log("Server started at port " + port);
    });
    