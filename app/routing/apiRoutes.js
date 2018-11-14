var friendData = require('../data/friends.js');

module.exports = function(app) {

app.get('api/survey',function(req,res) {
res.json(friendData);
});

app.post('api/survey',function(req,res) {
    req.push(req.body);
    res.json(true);
});


app.post('/api/clear',function(req,res) {
    friendData.length = [];
    res.json({ok:true});
});
}