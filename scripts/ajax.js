class AjaxTest {
    constructor() {
        // 0 Uninitialized, 1 Set up, but not sent, 2 sent, 3 In flight, 4 Complete
        this.READY_STAUS_CODE = 4;
    }
    isCompleted(req) {
        return req.readyState === this.READY_STAUS_CODE;
    }
    httpGet(url, callback) {
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
    httpPost(url, data, callback) {
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
ajax.httpGet("http://httpbin.org/ip", (status, response) => {
    let divMain = document.getElementById("main");
    divMain.innerHTML = response;
});
ajax.httpPost("http://httpbin.org/post", "{name: 'William Suane', company:'The DevDojo'}", (status, response) => {
    let divMain = document.getElementById("main");
    divMain.innerHTML = response;
});
//# sourceMappingURL=ajax.js.map