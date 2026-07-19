import { Routes } from "@angular/router"

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./components/home/home").then((module) => module.Home),
  },
  {
    path: "css/shape-picker",
    loadComponent: () =>
      import("./components/css/shape-picker/shape-picker").then((module) => module.ShapePicker),
  },
  {
    path: "gsap/basic/example1",
    loadComponent: () =>
      import("./components/gsap/basic/example1/example1").then((module) => module.Example1),
  },
  {
    path: "gsap/basic/example2",
    loadComponent: () =>
      import("./components/gsap/basic/example2/example2").then((module) => module.Example2),
  },
]
