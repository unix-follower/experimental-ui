import { Component, signal } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { ShapePicker } from "@/app/components/shape-picker/shape-picker"

@Component({
  selector: "app-root",
  imports: [RouterOutlet, ShapePicker],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("experimental-css-on-angular")
}
