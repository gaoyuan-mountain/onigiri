exports.template = {
    index: function (req, res) {
        res.render('partials/project/project');
    },
    list: function (req, res) {
        res.render('partials/project/list/list');
    },
    create: function (req, res) {
        res.render('partials/project/create/create');
    }
};