import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'listing', loadComponent: () => import('./listing/listing/listing.component').then(m => m.ListingComponent) },
    { path: 'details/:id', loadComponent: () => import('./listing/details-listing/details-listing.component').then(m => m.DetailsListingComponent) },
    { path: 'posting', loadComponent: () => import('./posting/posting/posting.component').then(m => m.PostingComponent) },
    { path: 'postingdetails/:id', loadComponent: () => import('./posting/posting-detalis/posting-detalis.component').then(m => m.PostingDetalisComponent) },
    { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
    { path: 'register', loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent) },
    { path: 'forget', loadComponent: () => import('./auth/forgetpassword/forgetpassword.component').then(m => m.ForgetpasswordComponent) },
    { path: 'reset', loadComponent: () => import('./auth/resetpassword/resetpassword.component').then(m => m.ResetpasswordComponent) },
    { path: 'contact-us', loadComponent: () => import('./auth/contact-us/contact-us.component').then(m => m.ContactUsComponent) },
    { path: 'terms', loadComponent: () => import('./shared/terms-conditions/terms-conditions.component').then(m => m.TermsConditionsComponent) },
    { path: 'state', title: 'State', loadComponent: () => import('./shared/state/state.component').then(m => m.StateComponent) },
    { path: 'city', title: 'City', loadComponent: () => import('./shared/city/city.component').then(m => m.CityComponent) },
    // { path: 'mapviewlisting', loadComponent: () => import('./listing/list-map/list-map.component').then(m => m.ListMapComponent) },
    { path: 'buysell', loadComponent: () => import('./buyandsell/buy-sell/buy-sell.component').then(m => m.BuySellComponent) },
    { path: 'BuySelldetails/:id', loadComponent: () => import('./buyandsell/buy-sell-detalis/buy-sell-detalis.component').then(m => m.BuySellDetalisComponent) }



];
