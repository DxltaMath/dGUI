import Hack from "../core/Hack";
import Toggler from "../core/Toggler";
import { category } from "../utils/category";
import { Swal, Toast } from "../utils/swal";
import { delta } from "../utils/util";


new Hack(category.timed, "No Randomize", "Does not randomize math problems in timed challenges").setClick(async () => {
    return Swal.fire({
        title: "Unavailable",
        html: "Sorry, No Randomize is currently not working. Please try later.",
        icon: "error",
    });
});

/*
new Toggler(category.timed, "No Randomize", "Does not randomize math problems in timed challenges").setEnabled(async () => {
    delta.doNotRandomize = true;
    return Toast.fire("Enabled!", "Timed problems will no longer be randomized!", "success");
}).setDisabled(async () => {
    delta.doNotRandomize = false;
    return Toast.fire("Disabled!", "Timed problems will now be randomized!", "success");
});*/

new Toggler(category.timed, "Allow Escaping", "Allows you to exit timed challenges even without pressing \"Stop\".").setEnabled(async () => {
    delta.allowEscapingTimed = true;
    return Toast.fire("Enabled!", "You can now exit running timed challenges!", "success");
}).setDisabled(async () => {
    delta.allowEscapingTimed = false;
    return Toast.fire("Disabled!", "You now have to stop timed challenges before exiting them.", "success");
});