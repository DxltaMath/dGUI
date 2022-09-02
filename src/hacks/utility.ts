import Hack from "../core/Hack";
import { category } from "../utils/category";
import { Confirm, StringInput, Swal, Toast } from "../utils/swal";


new Hack(category.utility, "AAAAAAAA", "Plays the AAAAAAA sound effect.").setClick(async () => {
	const audio = new Audio("https://api.starfiles.co/direct/059574729808");
	audio.play();
    return Toast.fire("AAAAAAAAAAA", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "info");
});


new Hack(category.utility, "Eval Console", "Evaluate JavaScript code without opening F12").setClick(async () => {


    if (!(await Confirm.fire({
            title: "Important",
            html: "This hack is potentially dangerous, as it evaluates plain JavaScript code, with access to Prodigy's typings. <strong>Please do not paste code from random people on the internet here, that may be dangerous.</strong><br><br>Proceed?",
            icon: "warning"
        })).value) {
        return console.log("Eval was cancelled.");
    }


    const code = await StringInput.fire({
		title: "Code",
		html: `Enter the code you want to evaluate.`,
		
	});

    if (!code.value) return;

    try {
        eval(code.value);
    } catch (err : unknown) {
        if (err) {
            return Swal.fire({
                title: "Error",
                html: `Oops! There was an error with the code! <br> <code>&nbsp;${err}&nbsp;</code>`,
                icon: "error"
            });
        }
    }

    return Toast.fire("Evaluated!", "Code was evaluated.", "success");
});