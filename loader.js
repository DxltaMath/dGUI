// Load the Delta Math Cheat GUI
(async () => {
	eval(await (await fetch("https://raw.githubusercontent.com/DxltaMath/dGUI/master/dist/bundle.js")).text());
})();