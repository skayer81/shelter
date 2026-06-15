//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/animations.js
var Animations = class {
	pageShow = [{ transform: "rotateY(-90deg)" }, { transform: "rotateY(0deg)" }];
	pageHidden = [{ transform: "rotateY(0deg)" }, { transform: "rotateY(-90deg)" }];
	animationTiming = {
		duration: 500,
		iterations: 1,
		easing: "linear",
		direction: "alternate",
		fill: "forwards"
	};
	showPageAnimations(newPage) {
		return new Promise((resolve) => {
			newPage.animate(this.pageShow, this.animationTiming).addEventListener("finish", () => {
				resolve();
			});
		});
	}
	removePageAnimations(oldPage) {
		return new Promise((resolve) => {
			oldPage.animate(this.pageHidden, this.animationTiming).addEventListener("finish", () => {
				resolve();
			});
		});
	}
};
//#endregion
//#region src/main.js
var App = class {
	PAGES = {
		main: document.getElementById("mainPage"),
		pets: document.getElementById("petsPage")
	};
	buttonsArray = [
		{
			buttonElement: document.getElementById("aboutButton"),
			page: "main",
			href: "header"
		},
		{
			buttonElement: document.getElementById("petsButton"),
			page: "pets",
			href: "header"
		},
		{
			buttonElement: document.getElementById("helpButton"),
			page: "main",
			href: "help"
		},
		{
			buttonElement: document.getElementById("contactsButton"),
			page: null,
			href: "footer"
		},
		{
			buttonElement: document.getElementById("GetToKnowButton"),
			page: "pets",
			href: "header"
		},
		{
			buttonElement: document.getElementById("logoButton"),
			page: "main",
			href: ""
		}
	];
	header = document.getElementById("header");
	currentPage = "main";
	constructor() {
		this.addOnClick();
		this.animations = new Animations();
		document.getElementById("logoButton").addEventListener("click", (event) => event.preventDefault());
	}
	addOnClick = () => {
		this.buttonsArray.forEach((button) => {
			button.buttonElement.addEventListener("click", () => {
				this.buttonClick(button.page, button.href);
			});
		});
	};
	buttonClick = async (pageKey, href) => {
		if (!pageKey) pageKey = this.currentPage;
		if (pageKey !== this.currentPage) {
			const oldPage = this.PAGES[this.currentPage];
			const newPage = this.PAGES[pageKey];
			await this.animations.removePageAnimations(oldPage);
			oldPage.setAttribute("hidden", "");
			newPage.removeAttribute("hidden");
			this.setHeaderStyles(pageKey);
			await this.animations.showPageAnimations(newPage);
			this.currentPage = pageKey;
		}
		if (href) document.location = `#${href}`;
	};
	setHeaderStyles = (page) => {
		this.header.classList.toggle("home", page === "main");
		this.header.classList.toggle("pets", page === "pets");
	};
};
new App();
//#endregion

//# sourceMappingURL=main-I44fwvJR.js.map