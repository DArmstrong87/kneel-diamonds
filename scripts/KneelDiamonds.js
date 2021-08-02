
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import { addCustomOrder, getOrderBuilder } from "./dataAccess.js"
import { Types } from "./JewelryTypes.js"

const orderBuilder = getOrderBuilder()

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === 'orderButton') {
        if (orderBuilder.metalId === 0 || orderBuilder.sizeId === 0 || orderBuilder.styleId === 0 || orderBuilder.typeId === 0) {
            window.alert('Please make all selections.')
        } else {
            addCustomOrder()
        }
    }
})

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article class="type__order">
            <section class="choices__types">
                ${Types()}
            </section>
            <section class="choices__types">
                <button id="orderButton">Create Custom Order</button>
            </section>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
                ${Orders()}
        </article>
    `
}