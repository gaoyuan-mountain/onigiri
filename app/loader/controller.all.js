import loginController from '../login/login.controller';
import projectsController from '../projects/projects.controller';
import headerController from '../common/header/header.controller';

module.exports = {
	inject: function () {
		loginController.inject();
		projectsController.inject();
		headerController.inject();
	}
};
