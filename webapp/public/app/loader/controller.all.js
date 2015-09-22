'use strict';

import * as loginController from '../login/login.controller';
import * as projectListController from '../project/list/list.controller';
import * as projectCreateController from '../project/create/create.controller';
import * as headerController from '../common/header/header.controller';
import * as issuesListController from '../issues/list/list.controller';
import * as issuesCreateController from '../issues/create/create.controller';
import * as issuesDetailController from '../issues/detail/detail.controller';

module.exports = {
	inject: function () {
		loginController.inject();
		projectListController.inject();
		projectCreateController.inject();
		headerController.inject();
		issuesListController.inject();
		issuesCreateController.inject();
		issuesDetailController.inject();
	}
};
