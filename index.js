var CircleCI = require('circleci');
var ci = new CircleCI({
    auth: process.env.CIRCLE_API_KEY
});

let branch_name = process.env.npm_config_branch || 'master';
let repo_name = process.env.npm_config_repo || 'meteor';
let build_number = process.env.npm_config_build;

if (!build_number) {
    console.log("Please specify build number with --build=XXXX");
    return;
}


ci.getProjects().then(function(projects){
  for(var i=0; i < projects.length; i++) {
    if (projects[i].reponame == repo_name) {
        let branch = projects[i].branches[branch_name];
        let builds = branch.running_builds;
        builds.forEach(function(build) {
            if(build.build_num == build_number) {
                console.log(build.status)
            }
        });
    }
  }
});
