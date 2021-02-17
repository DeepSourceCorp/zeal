declare module '*.svg' {
  const content: HTMLOrSVGElement
  export default content
}

declare module 'frappe-charts/dist/frappe-charts.esm.js' {
  const Chart
  export { Chart }
}

declare module 'tailwindcss/resolveConfig' {
  const resolveConfig
  export default resolveConfig
}

declare module '@/../tailwind.config.js' {
  const tailwindConfig
  export { tailwindConfig }
}
