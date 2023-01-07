import {OldShoppingCart} from "./ShoppingCart"
import {ComponentStory, ComponentMeta} from "@storybook/react"

export default {
    component: OldShoppingCart
} as ComponentMeta<typeof OldShoppingCart>

export const Primary: ComponentStory<typeof OldShoppingCart> = () => <OldShoppingCart/>
