/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global require, exports*/

(function () {
    "use strict";

    var process = require("child_process"),
        exec = process.exec,
        spawn = process.spawn;

    function cmdStartTerm(path, term) {

        var commandMap = {
            "xfce4-terminal": 'xfce4-terminal --working-directory="' + path + '" --drop-down',
            "konsole": 'konsole --workdir ' + path,
            "gnome-terminal": 'gnome-terminal --working-directory="' + path + '"',
            "lxterminal": 'lxterminal --working-directory="' + path + '"',
            "terminator": 'terminator --working-directory="' + path + '"',
            "cmd": 'start "CMD" /D "' + path + '"',
            "powershell": 'start "Powershell" powershell -noexit -command "Set-Location \'' + path + '\'',
            "ConEmu(x64)": "start \"ConEmu\" \"C:/Program Files/ConEmu/ConEmu64.exe\" /Dir \"" + path + "\"",
            "ConEmu(x86)": "start \"ConEmu\" \"C:/Program Files (x86)/ConEmu/ConEmu.exe\" /Dir \"" + path + "\""
        };

        console.log('In cmdStartTerm, command: "' + commandMap[term]);

        // mac terminals
        if (term === 'Terminal' || term === 'iTerm') {
            spawn('open', ['-a', term, path]);
            return true;
        }

        // linux terminal and windows cmd
        exec(commandMap[term]);
        return true;
    }

    function init(domainManager) {
        var paramsArray = [
            {
                name: "path",
                type: "string",
                description: "The starting path: the project folder path"
            },
            {
                name: "term",
                type: "string",
                description: "alternate terminal"
            }
        ];

        if (!domainManager.hasDomain("openInTerm")) {
            domainManager.registerDomain("openInTerm", {
                major: 0,
                minor: 1
            });
        }
        domainManager.registerCommand("openInTerm", "startTerm", cmdStartTerm, false, "Starts linux, mac or windows terminal", paramsArray, []);
    }

    exports.init = init;

}());
