import swal from "sweetalert2";
import statusMessage from "./status";
export const Swal = swal;

// Text Input
export const Input = Swal.mixin({
	input: "text",
	showCancelButton: true,
	showConfirmButton: true,
	toast: false,
});
// Text Input



// Number Input
export const NumberInput = Input.mixin({
    toast: false,
	input: "number"
});
// Number Input


// Toast
export const Toast = Swal.mixin({
	toast: true,
	position: "bottom",
	timerProgressBar: true,
	timer: 2000,
});
// Toast


// Confirm
export const Confirm = Swal.mixin({
	icon: "warning",
	showCancelButton: true,
	toast: false,
	confirmButtonText: "Confirm",
	cancelButtonText: "Cancel"
});
// Confirm


// Info popup
export const Info = Swal.mixin({
	icon: "info",
	showCancelButton: false,
	toast: false
});
// Info popup


// License popup
export const License = Swal.mixin({
	title: "DxltaMath",
	html: `<p>
	<a href="https://github.com/DxltaMath/license/blob/master/dGUI-License.txt">This is free and open-source software</a>.
	If you paid for this or accessed this behind a paywall/AdFly link, demand a refund. If you sell this software, or otherwise make a commercial advantage from it, you are violating
	<a href = "https://github.com/DxltaMath/license/blob/master/dGUI-License.txt">our license</a>.
	</p>`,
	icon: "info",
	showConfirmButton: true,
	showDenyButton: true,
	showCancelButton: false,
	allowEscapeKey: false,
	allowOutsideClick: false,
	toast: false,
	confirmButtonText: "Agree",
	denyButtonText: "Disagree",
	preConfirm: (() => {
		statusMessage();
	}),
	preDeny: (() => {
		NoLicense.fire();
	})
});


// Disagreed to license popup
export const NoLicense = Swal.mixin({
	title: "DxltaMath License",
	html: `<p>
	<strong>You need to agree to our license to use our hacks. If you changed your mind and now agree to our license, reload DeltaMath.</strong>
	</p>`,
	icon: "error",
	showConfirmButton: true,
	showCancelButton: false,
	showDenyButton: true,
	allowEscapeKey: false,
	allowOutsideClick: false,
	toast: false,
	confirmButtonText: "Reload",
	cancelButtonText: "Do DeltaMath without hacks",
	preConfirm: (() => {
		window.location.reload();
	}),
	preDeny: (() => {
		document.getElementById("cheat-menu")?.remove(); // Remove any existing menu if present
		document.getElementById("menu-toggler")?.remove(); // Remove any existing menu togglers if present
		// @ts-expect-error
		window.delta = null; // Remove hack accessing object
	})
});
// Disagreed to license popup