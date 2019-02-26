(function (data) {
    var seedData = require('./seedData')
    data.getNoteCategories = (next) => {
        next(null, seedData.initialNotes);
    }
})(module.exports);