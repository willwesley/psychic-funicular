const fs = require("fs");
const http = require("http");
const WS = require("ws")

const cats = {
  angry: 0,
  hungry: 0,
  content: 10,
  dead: 0,
}
const catlives = setInterval(() => {
  switch(Math.floor(Math.random() * 4)) {
    case 0:
      if(cats.content > 0) {
        console.log("cat goes hungry")
        cats.content--;
        cats.hungry++;
      }
      break
    case 1:
      if(cats.hungry > 0) {
        console.log("hungry cat get angry")
        cats.hungry--;
        cats.angry++
      }
      break
    case 2:
      if(cats.angry > 0) {
        console.log("angry cat dies")
        cats.angry--
        cats.dead++
      }
      break
    case 3:
      if(cats.hungry > 0) {
        console.log("hungry cat gets fed")
        cats.hungry--
        cats.content++
      } else if(cats.angry) {
        console.log("angry cat gets fed")
        cats.angry--
        cats.content++
      }
  }
  if(cats.content + cats.hungry + cats.angry === 0) {
    clearInterval(catlives)
  }
  sseListeners.forEach(l => l.write("data: " + JSON.stringify(cats) + "\n\n"))
  listeners.forEach(l => l.end(JSON.stringify(cats)))
  wss.clients.forEach(ws => {
    if(ws.readyState === WS.OPEN) {
      ws.send(JSON.stringify(cats))
    }
  })
}, 1 * 1000)


const sseListeners = []
const listeners = []

const server = http.createServer((request, response) => {
  switch(request.url) {
    case '/sse-cats':
      response.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
      })
      sseListeners.push(response)
      break
    case '/long-cats':
      listeners.push(response);
      break;
    case '/cats':
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(cats))
      break;
    default:
      const htmlfile = fs.readFileSync('index.html', 'utf8')
      response.end(htmlfile)
  }
})
const wss = new WS.WebSocketServer({ server })
wss.on("connection", ws => {
  ws.send(JSON.stringify(cats))
})
server.listen(3000);

console.log("server probably started");

