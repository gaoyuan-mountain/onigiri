'use strict';

import * as userService from '../services/user.service';
import * as projectService from '../services/project.service';
import * as issueService from '../services/issue.service';

module.exports = {
	inject: function () {
		userService.inject();
		projectService.inject();
		issueService.inject();
	}
};
