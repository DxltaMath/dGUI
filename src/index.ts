// DeltaMath Cheat GUI

import "./style.scss"; // Import SCSS style
import statusMessage from "./utils/status"; // Import status message
import { License, NoLicense } from "./utils/swal";

export const menu = document.createElement("div"); // Create cheat menu element
export const wrapper = document.getElementById("app-root"); // Get DeltaMath wrapper

document.getElementById("cheat-menu")?.remove(); // Remove any existing menu if present
document.getElementById("menu-toggler")?.remove(); // Remove any existing menu togglers if present
menu.id = "cheat-menu"; // Set menu ID to cheat-menu


menu.setAttribute("style", "position: fixed;top: -10%;left: 10%;right: 10%;width: 80%;height: 80%;z-index: 2;background-color: rgba(0, 0, 0, 0.5);backdrop-filter: blur(5px);"); // Set menu style

wrapper?.prepend(menu);

export const toggler = document.createElement("button"); // Create menu toggler
toggler.id = "menu-toggler";


let visible = false;
wrapper?.prepend(toggler);
toggler.onclick = () => {
	visible = !visible;

	if (visible) {
		toggler.innerText = "▼";
		menu.style.top = "-100vh";
	} else {
		toggler.innerText = "▲";
		menu.style.top = "10%";
	}
};
toggler.onclick({} as any);

const menuleft = document.createElement("DIV");
menuleft.classList.add("menu-left");
menu.append(menuleft);

let firstCategory = true;
const addArea = (title: string) => {
	const area = document.createElement("div");

    if (firstCategory == false) {
        area.append(document.createElement("br"));
        area.append(document.createElement("br"));
    } else {
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

const title = document.createElement("h1");
title.classList.add("menu-title");
title.innerText = "DeltaMath Hacks";
title.style.textAlign = "center";
menuleft.append(title);

const disc = document.createElement("h2");
disc.style.fontSize = "25px";
disc.style.color = "white";
disc.innerHTML = "<br>Press SHIFT to show/hide the menu. Scroll down in the menu for more hacks.";
menuleft.append(disc);

const subtitle = document.createElement("h3");
subtitle.style.fontSize = "20px";
subtitle.innerHTML = `
<p>Join our Discord <a href='https://dsc.gg/dxlta'>https://dsc.gg/dxlta</a>!</p>

<hr>
`;
subtitle.style.color = "white";
menuleft.append(subtitle);



export class Hack {
	public element: HTMLButtonElement;
	public name: string;
	// @ts-expect-error
	private description: string;

	constructor (
		public parent: HTMLDivElement,
		name?: string,
		description?: string
	) {
		this.name = "";
		this.description = "";
		this.element = document.createElement("button");
		this.element.classList.add("menu-hack");
		this.parent.append(this.element);

		if (name) this.setName(name);
		if (description) this.setDesc(description);
	}

	setName (name: string) {
		this.element.innerText = name;
		this.name = name;
		return this;
	}

	setClick (event: () => unknown) {
		this.element.onclick = async () => {
			await event();
			console.log(`Triggered ${this.name}.`);
		};
		return this;
	}

	setDesc (desc: string) {
		this.element.title = desc;
		this.description = desc;
		return this;
	}
}

export class Toggler extends Hack {
	enabled?: () => unknown;
	disabled?: () => unknown;
	constructor (
		public override parent: HTMLDivElement,
		name?: string,
		description?: string
	) {
		super(parent, name, description);
		this.element.setAttribute("status", "false");
		this.setClick(async () => {
			this.status = !this.status;
			if (this.status) {
				localStorage.setItem(this.name, "true");
				await this.enabled?.();
			} else {
				localStorage.setItem(this.name, "false");
				await this.disabled?.();
			}
		});
	}

	get status () {
		return JSON.parse(this.element.getAttribute("status")!) as boolean;
	}

	set status (val) {
		this.element.setAttribute("status", val.toString());
	}

	setEnabled (event: () => unknown) {
		this.enabled = event;
		if (localStorage.getItem(this.name) === "true") {
			this.element.click();
		}
		return this;
	}

	setDisabled (event: () => unknown) {
		this.disabled = event;
		return this;
	}
}

export const category = {
	player: addArea("Math Hacks"),
	inventory: addArea("Timed Hacks"),
	utility: addArea("Utility Hacks"),
	beta: addArea("Beta Testing"),
	patched : addArea("Patched Hacks")
};



let shownMenu : boolean = true;

document.addEventListener("keydown", function (event) {
	if (event.key == "Shift") {

		console.log("Shift key was pressed.");

		if (shownMenu == true) {
			// Cheats are shown, so let's hide them.
			console.log("Hiding cheat menu...");
			menu.style.display = "none";
			toggler.style.display = "none";
			shownMenu = false;
			console.log("Hidden cheat menu.");
		} else {
			// Cheats are hidden, so let's show them.
			console.log("Showing cheat menu...");
			menu.style.display = "block";
			toggler.style.display = "block";
            shownMenu = true;
			console.log("Shown cheat menu.");
		}
	}
});





// LICENSE POPUPS
(async () => {



        if (!(await License.fire("DxltaMath", `
            <p>
            <a href="https://github.com/DxltaMath/license/blob/master/dGUI-License.txt">This is free and open-source software</a>.
            If you paid for this or accessed this behind a paywall/AdFly link, demand a refund. If you sell this software, or otherwise make a commercial advantage from it, you are violating
            <a href = "https://github.com/DxltaMath/license/blob/master/dGUI-License.txt">our license</a>.
            </p>
        `)).value) {

            if (!(await NoLicense.fire("DxltaMath License", `
                <p>
                <strong>You need to agree to our license to use our hacks. If you changed your mind and now agree to our license, reload DeltaMath.</strong>
                </p>
            `)).value) {

                // Play DeltaMath without hacks
                document.getElementById("cheat-menu")?.remove(); // Remove any existing menu if present
                document.getElementById("menu-toggler")?.remove(); // Remove any existing menu togglers if present
                // @ts-ignore
                window.delta = null; // Remove hack accessing object

            } else {

                // Reload DeltaMath
                window.location.pathname = "/app/student";
            }


        } else {


            // Display status message.
            await statusMessage();
        }

})();