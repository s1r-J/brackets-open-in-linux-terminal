Open in linux terminal
=====================

**Extension for Adobe Brackets**

Open the project folder in terminal (xfce terminal by default).

*Currently supports:

xfce4-terminal, konsole, gnome-terminal, lxterminal and terminator

NEW: Support for osX Terminal

##Install

In extension manager, search for 'open project in terminal' and click 'Install'.

_To configure terminal in **Linux** other than xfce terminal, open brackets.json file (Debug >> Open Preferences File) and add your terminal_

![Preferences Linux](images/brackets.json.png)

<code>
	"openinterm.terminal" : "lxterminal"
</code>

OR

<code>
    "openinterm.terminal" : "konsole"
</code>

OR

<code>
    "openinterm.terminal" : "gnome-terminal"
</code>

OR

<code>
    "openinterm.terminal" : "terminator"
</code>

_To configure in **OSX**, open brackets.json and add_

![Preferences OSX](images/brackets.json-mac.png)

<code>
	"openinterm.terminal" : "Terminal"
</code>

OR

<code>
	"openinterm.terminal" : "iTerm"
</code>

##Opening a terminal

Right click on the sidebar and click "Open in Term"

![Open](images/right-click.png)

OR

Click the terminal icon in the extensions toolbar

![Open](images/ext.png)


##Settings for xfce terminal##

opens xfce terminal in [drop down mode](http://docs.xfce.org/apps/terminal/dropdown)

My terminal dropdown settings are as below:

![Settings](images/settings.png)
