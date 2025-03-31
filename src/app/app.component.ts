import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleTabsComponent } from "./demo/sample-tabs/sample-tabs.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, SampleTabsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-experimental';
}
