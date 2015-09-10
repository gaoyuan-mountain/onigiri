'use strict';

import loginRouter from '../login/login.route';
import projectsRouter from '../projects/projects.route';
import issuesRouter from '../issues/issues.route';
import milestoneRouter from '../milestone/milestone.route';

module.exports = {
	inject: function () {
		loginRouter.inject();
		projectsRouter.inject();
		issuesRouter.inject();
		milestoneRouter.inject();
	}
};
