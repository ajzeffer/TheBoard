// notesController.js
(function (notesController) {
    var data = require('../data');
    notesController.init = (app) => {
        app.get('/api/notes/:categoryName', (req, res) => {
            let categoryName = req.params.categoryName;
            data.getNotes(categoryName, (err, notes) => {
                if (err) {
                    res.send('doh!');
                    return;
                }
                res.set('application/json');
                res.send(notes);
            });

        });
    }
})(module.exports);