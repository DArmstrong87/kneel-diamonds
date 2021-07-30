import { getOrderBuilder, getStyles, setStyle } from "./database.js"
import { renderAllHTML } from "./main.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"
    const orderBuilder = getOrderBuilder()

    const listItemsArray = styles.map(
        style => {
            if (style.id === orderBuilder.styleId) {
                return html += `<li>
                    <input type="radio" name="style" value="${style.id}" checked/>
                    ${style.style}</li>`
            } else {
                return html += `<li>
                    <input type="radio" name="style" value="${style.id}"/>
                    ${style.style}</li>`
            }
        }
    ).join("")

    html += "</ul>"
    return html
}

