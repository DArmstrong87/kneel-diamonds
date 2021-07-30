import { getOrderBuilder, getTypes, setType } from "./database.js";
import { renderAllHTML } from "./main.js";

const orderBuilder = getOrderBuilder()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "type"){
            setType(parseInt(changeEvent.target.value))
            console.log("State of data has changed. Regenerating HTML...")
        }
    }
)

export const Types = () => {
    const types = getTypes()
    let html = `<ul>`
    const listTypes = types.map(
        type => {
                html += `<li>
                        <input type="radio" name="type" value="${type.id}"/> ${type.type}
                        </li>`
        }
    )
    html += listTypes.join("")
    html += `</ul>`
    return html
}