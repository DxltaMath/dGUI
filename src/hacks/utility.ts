import { category, Hack } from "../index";
import { Toast } from "../utils/swal";

new Hack(category.timed, "AAAAAAAA", "Plays the AAAAAAA sound effect.").setClick(async () => {
	const audio = new Audio("https://api.starfiles.co/direct/059574729808");
	audio.play();
    return Toast.fire("AAAAAAAAAAA", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "info");
});