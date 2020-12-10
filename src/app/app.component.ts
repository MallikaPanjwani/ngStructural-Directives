import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Directives";
  selectedChoice = "";
  colors: any[] = ["red", "blue", "green", "yellow", "pink", "orange"];

  choice(selectedColor: any): any {
    this.selectedChoice = selectedColor.target.value;
    if (this.selectedChoice === "Select Color") {
      this.selectedChoice = "white";
    }
  }
}
