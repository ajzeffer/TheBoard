(function (apiController) {
    apiController.init = function (app) {
        app.get('/api/users', (req, res) => {
            let users = [
                { name: "adam" },
                { name: "beth" },
                { name: "ayden" },
                { name: "ashtyn" },
            ];
            res.send(users);
        });
    }
})(module.exports);