import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BillingModule } from './billing/billing.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BillingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'billing';
}
