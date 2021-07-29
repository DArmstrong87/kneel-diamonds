import { getTypes, setType } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type"){
            setType(parseInt(event.target.value))
        }
    }
)

export const Types = () => {
    const types = getTypes()
    let html = `<ul>`
    const listTypes = types.map(
        type => {
            html += `<li>
                <input type="radio" name="type" value="${type.id}">
                    ${type.type}</input></li>`
        }
    )
    html += `</ul>`
    return html
}