'use strict';

import loginController from '../login/login.controller';
import projectsController from '../projects/projects.controller';
import headerController from '../common/header/header.controller';
import issuesListController from '../issues/list/list.controller';
import issuesCreateController from '../issues/create/create.controller';
import issuesDetailController from '../issues/detail/detail.controller';

module.exports = {
	inject: function () {
		loginController.inject();
		projectsController.inject();
		headerController.inject();
		issuesListController.inject();
		issuesCreateController.inject();
		issuesDetailController.inject();
	}
};
