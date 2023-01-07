import {ShoppingCart} from "./ShoppingCart"
import {ComponentStory, ComponentMeta} from "@storybook/react"

export default {
    component: ShoppingCart
} as ComponentMeta<typeof ShoppingCart>

export const Unactive: ComponentStory<typeof ShoppingCart> = () => <ShoppingCart/>
export const Active: ComponentStory<typeof ShoppingCart> = () => <ShoppingCart count={1}/>
