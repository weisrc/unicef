import "./dialog.css";
const dialogEl = document.getElementById("dialog")!;
const imgEl = document.getElementById("dialog-img")! as HTMLImageElement;
const titleEl = document.getElementById("dialog-title")!;
const contentEl = document.getElementById("dialog-content")!;
const closeEl = document.getElementById("dialog-close")!

export function closeDialog() {
  dialogEl.style.display = "none";
}

closeEl.onclick = closeDialog

export function dialog(img: string, title: string, content: string) {
  dialogEl.style.display = "flex";
  titleEl.innerHTML = title;
  contentEl.innerHTML = content;
  imgEl.src = img;
}
