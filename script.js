/* Case */
const drop = document.querySelector(".drop");
// const folders = document.querySelectorAll(".folder");
const folder = document.querySelector(".folder");
const main = document.querySelector("main");

// for (const folder of folders) {
folder.addEventListener("dragstart", dragStart);
folder.addEventListener("dragend", dragEnd);
// }

function dragStart(e) {
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "folder";
}

/* Event drop */
drop.addEventListener("dragover", dragOver);
drop.addEventListener("dragenter", dragEnter);
drop.addEventListener("dragleave", dragLeave);
drop.addEventListener("drop", dragDrop);

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "drop";
}

function dragDrop(e) {
  folder.remove();
  e.preventDefault();
  this.className = "drop";

  createLoadFiles();
}

function createLoadFiles() {
  const divLoadFiles = document.querySelector(".load-files");
  divLoadFiles.style.display = "block";

  const divContentLoad = document.createElement("div");
  divContentLoad.setAttribute("class", "content-load");

  const imgFolder = document.createElement("img");
  imgFolder.setAttribute("src", "zip.svg");

  const divContentProgress = document.createElement("div");
  divContentProgress.setAttribute("class", "content-progress");

  const divFileInfos = document.createElement("div");
  divFileInfos.setAttribute("class", "file-infos");

  const p = document.createElement("p");
  p.innerText = "Défi_drag_and_drop";

  // const span = document.createElement("span");
  // span.innerText = "100%";

  const divProgressBar = document.createElement("div");
  divProgressBar.setAttribute("class", "progress-bar zip");
  setTimeout(() => divProgressBar.classList.add("active"), 0);

  const divBulle = document.createElement("div");
  divBulle.setAttribute("class", "bulle bulle--valid");

  const spanIconBulle = document.createElement("span");
  spanIconBulle.setAttribute("class", "iconify");
  spanIconBulle.setAttribute("data-inline", "false");
  spanIconBulle.setAttribute("data-icon", "akar-icons:check");
  spanIconBulle.style.color = "#ffffff";
  spanIconBulle.style.fontSize = "24px";

  divLoadFiles.appendChild(divContentLoad);
  divContentLoad.appendChild(imgFolder);
  divContentLoad.appendChild(divContentProgress);
  divContentProgress.appendChild(divFileInfos);
  divFileInfos.appendChild(p);
  // divFileInfos.appendChild(span);
  divContentProgress.appendChild(divProgressBar);
  divContentLoad.appendChild(divBulle);
  divBulle.appendChild(spanIconBulle);
}
