import { menu, toggler } from "../index";




document.addEventListener("keydown", function (event) {
    
	if (showHideCheatGUI(event)) return;

});


/** dGUI is shown (true), or hidden (false) */
let shownMenu : boolean = true;

/** Keybind event handler for Show/Hide dGUI */
function showHideCheatGUI (event : KeyboardEvent) : boolean {

    if (event.key == "Shift") {
		if (shownMenu === true) {
			// Cheats are shown, so let's hide them.
			menu.style.display = "none";
			toggler.style.display = "none";
			shownMenu = false;
            return true;
		} else {
			// Cheats are hidden, so let's show them.
			menu.style.display = "block";
			toggler.style.display = "block";
            shownMenu = true;
            return true;
		}
	} else {
        return false;
    }

}