import loginRouter from '../login/login.route';
import projectsRouter from '../projects/projects.route';

module.exports = {
	inject: function () {
		loginRouter.inject();
		projectsRouter.inject();
	}
};
