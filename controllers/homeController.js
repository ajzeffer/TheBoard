(function (homeController) {
    var data = require('../data');
    homeController.init = function (app) {
        app.get('/', (req, res) => {
            data.getNoteCategories((err, results) => {
                res.render('index',
                    {
                        title: 'Home Page',
                        h1Content: 'my cool h1',
                        error: err,
                        categories: results
                    });
            })
        });
    };

})(module.exports);