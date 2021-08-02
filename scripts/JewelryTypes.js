import { getOrderBuilder, getTypes, setType } from "./dataAccess.js";
import { renderAllHTML } from "./main.js";

const orderBuilder = getOrderBuilder()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "type") {
            setType(parseInt(changeEvent.target.value))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
)

export const Types = () => {
    const types = getTypes()
    const orderBuilder = getOrderBuilder()
    let html = `<ul>`

    const listTypes = types.map(
        type => {
            if (type.id === orderBuilder.typeId) {
                html += `<li>
                        <input type="radio" name="type" value="${type.id}" checked/> ${type.type}
                        </li>`
            } else {
                html += `<li>
                        <input type="radio" name="type" value="${type.id}"/> ${type.type}
                        </li>`
            }
        }
    ).join("")

    html += `</ul>`
    return html
}