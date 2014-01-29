/**
    To run from command line:

    node get-comment username password projectId
*/
var tracker  = require("../index.js"),
    username = process.argv[2] || 'fake_user',
    password = process.argv[3] || 'fake_password',
    projectId = process.argv[4],
    storyId = process.argv[5],
    commentId = process.argv[6];

tracker.getToken(username, password, function(err, token) {

    if(err){
        console.error("Could not retrieve token");
        console.log(err);
    }
    else {
        var client = new tracker.Client({trackerToken:token});
        
        if (commentId) {
        
            client.project(projectId).story(storyId).comment(commentId).get(function(error, comment) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(comment);
                }
            });
        }
        else {
        
            client.project(projectId).story(storyId).comments.all(function(error, comments) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(comments);
                }
            });
        }
    }
});