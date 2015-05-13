/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

// Re-indent the open document according to your current indentation settings.
define(function (require, exports, module) {
	"use strict";

	var NodeDomain     = brackets.getModule("utils/NodeDomain"),
        ExtensionUtils = brackets.getModule("utils/ExtensionUtils"),
        CommandManager = brackets.getModule("command/CommandManager"),
        Menus          = brackets.getModule("command/Menus"),
        ProjectManager = brackets.getModule("project/ProjectManager"),
        COMMAND_ID     = "openinterm.open",
		PreferencesManager = brackets.getModule("preferences/PreferencesManager"),
		prefs = PreferencesManager.getExtensionPrefs("openinterm"),
		term   = prefs.get("terminal");
	
	var openInTermDomain = new NodeDomain("openInTerm", ExtensionUtils.getModulePath(module, "node/OpenInTermDomain"));

	var openInTerm = function() {
		if(!term) {
			prefs.definePreference("terminal", "string", "xfce4-terminal");
			term = "xfce4-terminal"
		}
	
		
		console.log("Entering in openInTerm with :" + term);
		//var entry = ProjectManager.getSelectedItem();
		var entry = ProjectManager.getProjectRoot();
		if (entry) {
			console.log("Entering in openInTerm, path: '" + entry.fullPath + "'");
			openInTermDomain.exec("startTerm", entry.fullPath, term)
				.done(function () {
					console.log("Term successfully started, showing : '" + entry.fullPath + "'");
				})
				.fail(function(err) {
					console.error("Error showing '" + entry.fullPath + "' in Term:", err);
				});
		}
		console.log("openInTerm end");

	};

	CommandManager.register("Open in Term", COMMAND_ID, openInTerm);

	var menu1 = Menus.getContextMenu(Menus.ContextMenuIds.PROJECT_MENU);
	menu1.addMenuItem(COMMAND_ID /*, [{ "key": "Ctrl-Alt-I" }, { "key": "Ctrl-Alt-I", "platform": "mac" }]*/);
	var menu2 = Menus.getContextMenu(Menus.ContextMenuIds.WORKING_SET_MENU);
	menu2.addMenuItem(COMMAND_ID);
	/*var menu3 = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
	menu3.addMenuItem(COMMAND_ID);*/
});
