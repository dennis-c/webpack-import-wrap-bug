import { logger } from "./export";

/*Scenario 1*/
(function () {
	const obj = {
		Object: function() {
			logger();
		}
	};

	obj.Object();
}());

/* Produces:
var obj = {
	Object: function Object() {
		Object(_export__WEBPACK_IMPORTED_MODULE_0__["logger"])();
	}
};

obj.Object();
*/

/*Scenario 2*/
(function () {
	function Object() {
		logger();
	}

	Object();
}())

/* Produces:
function Object() {
	Object(_export__WEBPACK_IMPORTED_MODULE_0__["logger"])();
}

Object();
*/