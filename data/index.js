(function (data) {
    var seedData = require('./seedData')

    data.getNoteCategories = (next) => {
        next(null, seedData.initialNotes);
    }

    data.getNotes = (categoryName, next) => {
        let notes = seedData.initialNotes.filter((note) => {
            return note.name.toLowerCase() == categoryName.toLowerCase();
        });
        next(null, notes);
    }
})(module.exports);