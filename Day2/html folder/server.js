const { createServer } = require("http");

const server = createServer((req, res) => {
  res.end("hello world");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});