//we have to create an api erquest which implement crud operation
//basciaaly crud operation

const http = require('http');

//create a server object:

let tasks = [{ id: '1', task: 'buy grocery', isComplete: 'false' }, { id: '2', task: 'write apis', isComplete: 'false' }]

http.createServer(function (req, res) {
  if (req.method === 'GET') {
    if (req.url === '/tasks') {
      const data = tasks;
      res.end(JSON.stringify(data))
    }
  }
  // if(req.method==='POST'){
  //   if(req.url=='/tasks'){
      
  //   }
  // }

  // if(req.method==='PUT'){
  //   if(req.url=='/tasks/id'){
      
  //   }
  // }

}).listen(3000); //the server object listens on port 3000


// const getTasksHandler = (req, res) => {
//   const pathname = req.url
//   res.setHeader('Content-Type', 'application/json;charset=utf-8');
//   const data = tasks;
//   return res.end(JSON.stringify(data))
// }


