import "./objective.css"

const objectiveEl = document.getElementById("objective")!

export function objective(title: string, content: string) {
    const el = objectiveEl.appendChild(document.createElement("div"))
    el.innerHTML = `
    <div class="box">
        <h4>${title}</h4>
        <p>${content}</p>
    </div>
    `
    return () => {
        el.remove()
    }
}