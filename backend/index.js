const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors'); 

const app = express();

app.listen(8080);
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 



var Curriculums = [],
  Id = 1; 


//read
app.get('/api/curriculums', (req, res) => { 
  res.send(Curriculums);
  console.log('Get Curriculums');
});



//create
app.post('/api/curriculums', (req, res) => { 
  var name = req.body.name;

  Curriculums.push({
    id: Id++,
    name: name
  });
  res.send(Curriculums);
  console.log('New Curriculums', name);
});

//edit
app.get('/api/curriculums/:curriculum_id', (req, res) => {
  var id = req.params.curriculum_id,
    name = req.body.name,
    tmp = null;

  Curriculums.map(Curriculum => {
    if (Curriculum.id == id) {
      tmp = Curriculum;
    }
  });
  res.send(tmp);
  console.log('Edit Curriculum', tmp);
});

//update
app.put('/api/curriculums/:curriculum_id', (req, res) => {
  var id = req.params.curriculum_id,
    name = req.body.name;

  Curriculums.map(Curriculum => {
    if (Curriculum.id == id) {
      Curriculum.name = name;
    }
  });
  res.send(Curriculums);
  console.log('Update Curriculum', name);
});



//delete 

app.delete('/api/curriculums/:curriculum_id', (req, res) => {
  var id = req.params.curriculum_id,
    tmp = [];

  Curriculums.map(Curriculum => {
    if (Curriculum.id != id) {
      tmp.push(Curriculum);
    }
  });
  Curriculums = tmp;
  res.send(Curriculums);
  console.log('Delete Curriculum', id);
});
