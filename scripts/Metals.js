import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            console.log("State of data has changed. Regenerating HTML...")
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
                <input type="radio" name="metal" value="${metal.id}" checked/> ${metal.metal}
                </li>`
    }

    html += "</ul>"
    return html
}