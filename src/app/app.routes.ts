import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './dashboard/profile/profile';
import { Settings } from './dashboard/settings/settings';
import { Product } from './product/product';
import { ProductPage } from './product-page/product-page';

export const routes: Routes = [
    {
        path : 'dashboard',
        component : Dashboard,
        children : [
            {path : "profile" , component : Profile},
            {path : "settings" , component : Settings}
        ]
    }
    ,
    {
        path : 'product/:id', component : Product
    },
    {
        path :"products", component : ProductPage
    },
    {path : "", redirectTo : 'dashboard', pathMatch : 'full'}
    
];
