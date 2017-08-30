var CircleCI = require('circleci');
var ci = new CircleCI({
    auth: process.env.CIRCLE_API_KEY
});

ci.getProjects().then(function(projects){
  for(var i=0; i < projects.length; i++) {
    if (projects[i].reponame == 'meteor') {
        console.log(projects[i].branches['master']);
    }
  }
});
