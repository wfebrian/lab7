var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;

  // query for the specific project and
  // call the following callback

  models.Project
    .find({"_id": projectID})
    .sort('-date')
    .exec(afterQuery);

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();

  var newProject = new models.Project({
    "title":"LOL Cat Invazion",
    "date": new Date("February 29, 2014"),
    "summary": "Can I haz blog too?",
    "image": "PIXS"
  });

  res.send(500);
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();

  models.Project
    .find({"_id": projectID})
    .remove()
    .exec(ressend);

  function ressend(err, projects){
    if(err) {console.log(err);}
    res.send(500);      
    res.render('/');
  }
}