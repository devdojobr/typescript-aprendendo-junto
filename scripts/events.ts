class ClickHandler {
    constructor() {
        let main = document.getElementById("main");
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        if (main !== null && btn1 !== null && btn2 !== null) {
            main.addEventListener("click", ClickHandler.alertEventMain, true);
            btn1.addEventListener("click", ClickHandler.alertEventBtn1, true);
            btn2.addEventListener("click", ClickHandler.alertEventBtn2, true);
        }
    }

    // capturing e bubbling
    static alertEventMain(event: any): void {
        alert("clicked over main");
        event.stopPropagation();
    }

    static alertEventBtn1(): void {
        alert("clicked btn1");
    }

    static alertEventBtn2(): void {
        alert("clicked btn2");
    }
}

const clickHandler = new ClickHandler();