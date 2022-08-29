import { category, Toggler } from "../index";
import { delta } from "../utils/util";

new Toggler(category.timed, "No Randomize", "Does not randomize math problems in timed challenges").setEnabled(() => {
    delta.doNotRandomize = true;
}).setDisabled(() => {
    delta.doNotRandomize = false;
});