'use strict';

import userService from '../services/user.service';
import projectService from '../services/project.service';

module.exports = {
	inject: function () {
		userService.inject();
		projectService.inject();
	}
};
