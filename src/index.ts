// DeltaMath Cheat GUI

import "./style.scss"; // Import SCSS style
import { License } from "./utils/swal";

/** The main container of the GUI */
export const menu = document.createElement("div"); // Create cheat menu element

/** What we attach the menu toggler to */
export const wrapper = document.getElementsByTagName("nav")[0]; // Get DeltaMath wrapper

document.getElementById("cheat-menu")?.remove(); // Remove any existing menu if present
document.getElementById("menu-toggler")?.remove(); // Remove any existing menu togglers if present
menu.id = "cheat-menu"; // Set menu ID to cheat-menu


menu.setAttribute("style", "position: fixed;top: -10%;left: 10%;right: 10%;width: 80%;height: 80%;z-index: 2;background-color: rgba(0, 0, 0, 0.5);backdrop-filter: blur(5px);"); // Set menu style

wrapper?.prepend(menu);

export const toggler = document.createElement("button"); // Create menu toggler
toggler.id = "menu-toggler";
toggler.setAttribute("style", "z-index=100;");


let visible = false;
wrapper?.prepend(toggler);
toggler.onclick = () => {
	visible = !visible;

	if (visible) {
		toggler.innerText = "▼";
		menu.style.top = "-200vh";
	} else {
		toggler.innerText = "▲";
		menu.style.top = "10%";
	}
};
toggler.onclick({} as any);

const menuleft = document.createElement("DIV");
menuleft.classList.add("menu-left");
menu.append(menuleft);

let firstCategory : boolean = true;
export const addArea = (title: string) => {
	const area = document.createElement("div");

    if (firstCategory === false) {
        area.append(document.createElement("br"));
        area.append(document.createElement("br"));
    } else {
		const warning = document.createElement("p");
		warning.className = "red-text";
		warning.innerText = "WARNING: WE DO NOT CONDONE USAGE OF USING HACKS FOR SCHOOL ASSIGNMENTS. THIS EXTENSION EXISTS PURLEY FOR FUN AND EXPERIMENTATION, NOT CHEATING YOUR MATH CLASS. PLEASE DO NOT USE THIS ON A SCHOOL ACCOUNT- IF YOU PASSED THE DELTAMATH BUT FAILED THE EXAM, THAT'S ON YOU.";
		area.append(warning);

        firstCategory = false;
    }


	area.classList.add("menu-area");
	area.style.textAlign = "center";
	menuleft.append(area);

	const header = document.createElement("h1");
	header.innerText = title;
	header.style.textAlign = "center";
	header.style.color = "white";

	area.append(header);
	return area;
};


// Title
const title = document.createElement("h1");
title.classList.add("menu-title");
title.innerText = "DeltaMath Hacks";
title.style.textAlign = "center";
menuleft.append(title);

// Tip to use the hacks
const disc = document.createElement("h2");
disc.style.fontSize = "25px";
disc.style.color = "white";
disc.innerHTML = "<br>Press SHIFT to show/hide the menu. Scroll down in the menu for more hacks.";
menuleft.append(disc);

// "join our discord!" subtitle
const subtitle = document.createElement("h3");
subtitle.style.fontSize = "20px";
subtitle.innerHTML = `
<p>Join our Discord <a href='https://dsc.gg/dxlta'>https://dsc.gg/dxlta</a>!</p>
<hr>
`;
subtitle.style.color = "white";
menuleft.append(subtitle);



(async () => {
	// important license fire
	await License.fire();
})();
