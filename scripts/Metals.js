import { getMetals, setMetal, getOrderBuilder } from "./database.js"
import { renderAllHTML } from "./main.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "metal") {
            setMetal(parseInt(changeEvent.target.value))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
)

export const Metals = () => {
    let html = "<ul>"
    const orderBuilder = getOrderBuilder()
    for (const metal of metals) {
        if (metal.id === orderBuilder.metalId) {
            html += `<li>
                <input type="radio" name="metal" value="${metal.id}" checked/> ${metal.metal}
                </li>`
        } else {
            html += `<li>
                <input type="radio" name="metal" value="${metal.id}"/> ${metal.metal}
                </li>`
        }
    }

    html += "</ul>"
    return html
}