(function (controllers) {
    var homeController = require('./homeController');
    var apiController = require('./apiController');
    var notesController = require('./notesController');
    controllers.init = function (app) {
        homeController.init(app);
        apiController.init(app);
        notesController.init(app);
    }
})(module.exports);