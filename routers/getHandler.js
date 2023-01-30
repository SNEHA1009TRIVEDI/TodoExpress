const express = require('express');
const router = express.Router();
//var bodyParser = require('body-parser');
const _ = require('lodash')
let tasks = [
  { id: 1, task: 'buy grocery', isComplete: false },
  { id: 2, task: 'write apis', isComplete: false }
]


router.get('/', function (req, res) {
  res.send(tasks);
});
router.get('/tasks', function (req, res) {
  res.send(tasks);
});
router.post('/tasks', function (req, res) {


  const newId = tasks[tasks.length - 1].id + 1;


  tasks.push({
    id:newId,
    isComplete:false,
    task:req.body.task
  });
  console.log(tasks);
  res.send(tasks);

});
router.get('/tasks/:id', function (req, res) {


  res.send(tasks[req.params.id - 1]);

});

router.put('/tasks/:id', function(req, res){
     const updateIndex = tasks.map(function(t){
        return t.id;
     }).indexOf(parseInt(req.params.id));
     
     if(updateIndex === -1){
        //Movie not found, create new
        tasks.push({
           id: req.params.id,
           task: req.body.task,
           isComplete: false
        });
        res.send(tasks);
     } else {
        //Update existing movie
        tasks[updateIndex] = {
           id: req.params.id,
           task: req.body.task,
           isComplete:true
        };
        res.json({message: "Movie id " + req.params.id + " updated.", 
           location: "/movies/" + req.params.id});
     }
  
});

router.delete('tasks/:id', function (req, res) {
  var removeIndex = tasks.map(function(movie){
    return task.id;
 }).indexOf(req.params.id); //Gets us the index of movie with given id.
 
 if(removeIndex === -1){
    res.json({message: "Not found"});
 } else {
    movies.splice(removeIndex, 1);
    res.send({message: "Movie id " + req.params.id + " removed."});
 }

});

router.get('/tasks/:name/:id', function (req, res) {
  res.send('The id you specified is ' + req.params.id + ' name is: ' + req.params.name);
});

router.get('*', function (req, res) {
  res.send('Sorry, this is an invalid URL.');
});
//export this router to use in our index.js
module.exports = router;
