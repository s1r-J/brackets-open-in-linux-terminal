(function () {
	"use strict";

	var exec = require("child_process").exec;

	function cmdStartTerm(path) {
		console.log("In cmdStartTerm, path: '" + path + "'");
		exec('xfce4-terminal --working-directory="' + path + '" --drop-down');
		return true;
	}

	function init(domainManager) {
		if (!domainManager.hasDomain("openInTerm")) {
			domainManager.registerDomain("openInTerm", {major: 0, minor: 1});
		}
		domainManager.registerCommand(
			"openInTerm", // domain name
			"startTerm", // command name
			cmdStartTerm, // command handler function
			false, // this command is synchronous in Node
			"Starts xfce terminal, which should be defined in the PATH environment variable",
			[{name: "path", // parameters
				type: "string",
				description: "The starting path, the most often: the project folder path"}],
			[] // return value
		);
	}

	exports.init = init;

}());