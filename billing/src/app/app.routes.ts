import { Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';

export const routes: Routes = [
    {
        path: '',
        component: BillingComponent
    },
    {
        path: 'billing',
        loadChildren: () => import('./billing/billing.module').then(m =>
        m.BillingModule)
    }
];
