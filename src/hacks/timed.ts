import { category, Toggler } from "../index";
import { Toast } from "../utils/swal";
import { delta } from "../utils/util";

new Toggler(category.timed, "No Randomize", "Does not randomize math problems in timed challenges").setEnabled(async () => {
    delta.doNotRandomize = true;
    return Toast.fire("Enabled!", "Timed problems will no longer be randomized!");
}).setDisabled(async () => {
    delta.doNotRandomize = false;
    return Toast.fire("Disabled!", "Timed problems will now be randomized!");
});