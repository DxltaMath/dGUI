import swal from "sweetalert2-neutral";
import statusMessage from "./status";
export const Swal = swal;

// @ts-expect-error
window.swal = Swal;

/** Text Info */
export const StringInput = Swal.mixin({
	icon: "question",
	input: "text",
	showCancelButton: true,
	showConfirmButton: true,
	toast: false,
});


/** Number input */
export const NumberInput = Swal.mixin({
	icon: "question",
	input: "number",
	showCancelButton: true,
	showConfirmButton: true,
    toast: false,
});


/** 2-second Toast notification */
export const Toast = Swal.mixin({
	toast: true,
	position: "bottom",
	timerProgressBar: true,
	timer: 2000,
	showConfirmButton: false,
});


/** Confirm or cancel */
export const Confirm = Swal.mixin({
	icon: "warning",
	toast: false,
	showCancelButton: false,

	showDenyButton: true,
	denyButtonColor: "#6E66D9",
	denyButtonText: "Cancel",

	showConfirmButton: true,
	confirmButtonColor: "#CC433C",
	confirmButtonText: "Confirm"
});


/** an OK-only swal.fire */
export const Info = Swal.mixin({
	icon: "info",
	showCancelButton: false,
	toast: false
});


/** License popup */
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
	preConfirm: (async () => {
		statusMessage();
	}),
	preDeny: (async () => {
		NoLicense.fire();
	})
});


/** Disagreed to our license popup */
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
