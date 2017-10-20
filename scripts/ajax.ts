class AjaxTest {
    // 0 Uninitialized, 1 Set up, but not sent, 2 sent, 3 In flight, 4 Complete
    private READY_STAUS_CODE = 4;

    private isCompleted(req: XMLHttpRequest) {
        return req.readyState === this.READY_STAUS_CODE;
    }

    public httpGet(url: string, callback: (status: number, response: string) => any): void {
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        };

        req.open("GET", url, true);
        req.send();
    }

    public httpPost(url: string, data: string, callback: (status: number, response: string) => any): void {
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        };

        req.open("POST", url, true);
        req.setRequestHeader("Content-type", "application/json");
        req.send(data);
    }
}

let ajax = new AjaxTest();
ajax.httpGet("http://httpbin.org/ip", (status: number, response: string) => {
    let divMain = <HTMLDivElement> document.getElementById("main");
    divMain.innerHTML = response;
});

ajax.httpPost("http://httpbin.org/post", "{name: 'William Suane', company:'The DevDojo'}",
    (status: number, response: string) => {
    let divMain = <HTMLDivElement> document.getElementById("main");
    divMain.innerHTML = response;
});