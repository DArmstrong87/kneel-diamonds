import { getOrderBuilder, getSizes, setSize } from "./dataAccess.js"
import { renderAllHTML } from "./main.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"
    const orderBuilder = getOrderBuilder()

    const listItems = sizes.map(size => {
        if (size.id === orderBuilder.sizeId) {
            return html += `<li>
                <input type="radio" name="size" value="${size.id}" checked/> ${size.carets}
                </li>` } else {
            return html += `<li>
                <input type="radio" name="size" value="${size.id}"/> ${size.carets}
                </li>`
        }
    }
    ).join("")

    html += "</ul>"

    return html
}

