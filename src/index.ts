import { logger } from "./export";

/*Scenario 1*/
const obj = {
	Object: function() {
		logger();
	}
};

obj.Object();

/* Produces:
const obj = {
    Object: function () {
        Object(_export__WEBPACK_IMPORTED_MODULE_0__["logger"])();
    }
};
obj.Object();
*/

/*Scenario 2*/
function Object() {
	logger();
}

Object();

/* Produces:
function Object() {
    Object(_export__WEBPACK_IMPORTED_MODULE_0__["logger"])();
}
Object();
*/