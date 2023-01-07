import Image from "next/image"

/**
 * @type {Image}
 */
const OriginalImage = Image.default;

Object.defineProperty(Image, "default", {
  configurable: true,
  value: (props) => <OriginalImage {...props} unoptimized/>
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}