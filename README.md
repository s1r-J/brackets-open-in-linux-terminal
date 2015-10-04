Open in linux terminal
=====================

**Extension for Adobe Brackets**

Open the project folder in terminal (xfce terminal by default).

*Currently supports:

xfce4-terminal, konsole, gnome-terminal, lxterminal and terminator

NEW: Support for osX Terminal

##Install

In extension manager, search for 'linux terminal' and press 'Install'.

To configure terminal other than xfce terminal, open brackets.json file (Debug >> Open Preferences File) and add your terminal
<code>
	"openinterm.terminal" : "lxterminal"
</code>

To configure in osX, open brackets.json and add
<code>
	"openinterm.terminal" : "Terminal"
</code>
or, if you prefer iTerm2, 
<code>
	"openinterm.terminal" : "iTerm"
</code>


![Preferences](images/brackets.json.png)
![Preferences osX](images/brackets.json-mac.png)

##Settings for xfce terminal##

opens xfce terminal in [drop down mode](http://docs.xfce.org/apps/terminal/dropdown)

My terminal dropdown settings are as below:

![Settings](images/settings.png)
