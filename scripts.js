const submenutrigger = document.querySelectorAll(".nav-bar > li");
const dropBackground = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".topnavBar");

/*activate submenu*/ 
function activeSub() {
    this.classList.add("trigger-enter");
    setTimeout(
        () =>
        this.classList.contains("trigger-enter") &&
        this.classList.add("trigger-enter-active"),
        100
    );
    
    dropBackground.classList.add("open");

    /*get position on mouseover*/
    const dropdown = this.querySelector(".dropdown");
    // console.log(dropdown);
    const dropdownPos = dropdown.getBoundingClientRect();
    // console.log(dropdownPos);
    const navPos = nav.getBoundingClientRect();
    // console.log(navPos);

    const pos = {
        height: dropdownPos.height,
        width: dropdownPos.width,
        top: dropdownPos.top - navPos.top,
        left: dropdownPos.left - navPos.left,
    };

    /*set position of the arrow and submenu on mouseover*/
    dropBackground.style.setProperty("width", `${pos.width}px`);
    dropBackground.style.setProperty("height", `${pos.height}px`);
    dropBackground.style.setProperty(
        "transform",
        `translate(${pos.left}px, ${pos.top}px)`
    );
}

/*deactivate submenu*/
function deactiveSub() {
    this.classList.remove("trigger-enter", "trigger-enter-active");
    dropBackground.classList.remove("open");
}

/*mouse events*/
submenutrigger.forEach((trigger) =>
    trigger.addEventListener("mouseenter", activeSub)
);
submenutrigger.forEach((trigger) =>
    trigger.addEventListener("mouseleave", deactiveSub)
);