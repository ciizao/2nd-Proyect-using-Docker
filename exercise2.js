const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello engineer Juampa');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
