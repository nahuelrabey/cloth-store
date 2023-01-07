import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SearchBar } from "./SearchBar"

export default {
    component: SearchBar,
} as ComponentMeta<typeof SearchBar>

export const Prime: ComponentStory<typeof SearchBar> = () => <SearchBar />