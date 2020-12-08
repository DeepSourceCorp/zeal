module.exports = {
  css: {
    loaderOptions: {
      scss: {
        data: `@import "@/assets/css/tailwind.scss"`,
        additionalData: `@import "~/assets/css/_utilities.scss`
      }
    }
  }
}
