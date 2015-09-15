exports.template = {
	index: function (req, res) {
    	res.render('partials/issues/issues');
	},
	list: function (req, res) {
		res.render('partials/issues/list/list');
	},
	detail: function (req, res) {
		res.render('partials/issues/detail/detail');
	},
	create: function (req, res) {
		res.render('partials/issues/create/create');
	}
};