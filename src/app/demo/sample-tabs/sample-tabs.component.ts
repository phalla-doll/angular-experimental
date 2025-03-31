import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-sample-tabs',
  standalone: true,
  imports: [
    MatTabsModule
  ],
  templateUrl: './sample-tabs.component.html',
  styleUrls: ['./sample-tabs.component.scss']
})
export class SampleTabsComponent {

}
