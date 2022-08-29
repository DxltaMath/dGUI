import { Swal } from "../utils/swal";  // Import Swal


export default function statusMessage () {


    fetch(`https://raw.githubusercontent.com/DxltaMath/dGUI/master/statusmessage.json?updated=${Date.now()}`).then(response => response.json()).then(async data => {

            const enabled = data.enabled;

            if (enabled.value === false) {
                return console.log("Status message is disabled.");
            } else {

                await Swal.fire({
                    title: data.get("title"),
                    html: data.get("html"),
                    icon: data.get("icon"),
                });

            }

        });



};
