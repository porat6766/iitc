const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "/GET") {
    res.statusCode = 200;
    res.setHeader("contant-type", "text/plain");
    res.end("HELLO-WORLD");
  } else if (req.url === "/user" && req.method === "/GET") {
    res.statusCode = 200;
    res.setHeader("contant-type", "text/plain");
    res.end(
      JSON.stringify({
        name: "john duo",
      })
    );
  } else {
    res.statusCode = 404;
    res.setHeader("contant-type", "text/plain");
    res.end("NOT-FOUND");
  }
});

server.listen(PORT, () => {
  console.log("server is a listhen");
});
