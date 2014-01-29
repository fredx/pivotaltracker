/**
    To run from command line:

    node get-epic username password projectId storyId
*/
var tracker  = require("../index.js"),
    username = process.argv[2] || 'fake_user',
    password = process.argv[3] || 'fake_password',
    projectId = process.argv[4] || 12345
    epicId = process.argv[5] || 67890;

tracker.getToken(username, password, function(err, token) {

    if (err) {
        console.log(err);
    }
    else {
    
        var client = new tracker.Client({trackerToken:token});
        
        if (epicId) {
        
            client.project(projectId).epic(1034694).get(function(error, epic) {
            
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(epic);
                }
            });
        }
        else {
        
            client.project(projectId).epics.all(function(error, epics) {
            
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(epics);
                }
            });
        }
    }
});