let divMain = document.getElementById("main");
// divMain.innerHTML = "<span> DevDojo is freaking awesome </span>";
// divMain.textContent = "<span> DevDojo is freaking awesome </span>";
// divMain.textContent = "DevDojo is freaking awesome";
let newDiv = document.createElement("div");
newDiv.textContent = "DevDojo is freaking awesome";
// divMain.appendChild(newDiv);
divMain.insertBefore(newDiv, divMain.firstChild);
//# sourceMappingURL=changingelements.js.map