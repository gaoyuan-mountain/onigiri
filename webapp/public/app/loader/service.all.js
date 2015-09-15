'use strict';

import userService from '../services/user.service';

module.exports = {
	inject: function () {
		userService.inject();
	}
};
