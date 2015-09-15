'use strict';

import * as loginRouter from '../login/login.route';
import * as projectRouter from '../project/project.route';
import * as issuesRouter from '../issues/issues.route';
import * as milestoneRouter from '../milestone/milestone.route';

module.exports = {
	inject: function () {
		loginRouter.inject();
		projectRouter.inject();
		issuesRouter.inject();
		milestoneRouter.inject();
	}
};
