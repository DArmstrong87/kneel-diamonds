import { getTypes } from "./database.js";



export const Types = () => {
    const types = getTypes()
    let html = `<ul>`
    const listTypes = types.map(
        type => {
            html += `<li>
                <input type="radio" name="type" value="type.id">
                    ${type.type}</input></li>`
        }
    )
    html += `</ul>`
    return html
}