/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "*.png" {
  import type { DefineComponent } from 'vue'
  const value: DefineComponent<{}, {}, any>
  export default value;
}
