/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global require, exports*/

(function () {
	"use strict";

	var exec = require("child_process").exec;



	function cmdStartTerm(path, term) {

		var commandMap = {
			"xfce4-terminal" :  'xfce4-terminal --working-directory="' + path + '" --drop-down',
			"konsole" : 'konsole --workdir ' + path,
			"gnome-terminal" : 'gnome-terminal --working-directory="' + path + '"',
			"lxterminal" : 'lxterminal --working-directory="' + path + '"',
			"terminator" : 'terminator --working-directory="' + path + '"'
		};

		console.log('In cmdStartTerm, command: "' + commandMap[term]);

		// mac terminals
		if(term === 'Terminal') {
			var spawn = require('child_process').spawn;
			spawn('open', ['-a', 'Terminal', path]);
			return true;
		}
		if(term === 'iTerm') {
			var spawn = require('child_process').spawn;
			spawn('open', ['-a', 'iTerm', path]);
			return true;
		}

		// linux terminal
		exec(commandMap[term]);
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
			"Starts linux or mac terminal",
			[{name: "path", // parameters
				type: "string",
				description: "The starting path: the project folder path"},
			 {name: "term", // parameters
				type: "string",
				description: "alternate terminal"}],
			[] // return value
		);
	}

	exports.init = init;

}());
