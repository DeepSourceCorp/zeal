declare module '*.svg' {
  const content: HTMLOrSVGElement
  export default content
}

declare module 'frappe-charts/dist/frappe-charts.esm.js' {
  const Chart
  export { Chart }
}

declare module '@/helpers/tailwind/colors' {
  const colors: Record<string, string | Record<string, string>>
  export default colors
}
