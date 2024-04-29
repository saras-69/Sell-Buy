import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ProductComponent } from './product/product.component';
import { SiginSignupComponent } from './customer/sigin-signup/sigin-signup.component';
import { SellerDashboardComponent } from './customer/seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './customer/buyer/buyer-dashboard/buyer-dashboard.component';
import { CheckoutComponent } from './customer/buyer/checkout/checkout.component';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';
import { AdminAuthGaurdService, AdminAuthGuardLogin, BuyerAuthGaurdService, SellerAuthGaurdService, SellerBuyerAuthGuardLogin } from './shared/services/auth-guard.service';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "my-profile", component: UserComponent },
    { path: "contact", component: ContactComponent },
    //admin
    {
        path: '', canActivate:[AdminAuthGuardLogin] ,children: [
            { path: "admin-login", component: AdminLoginComponent }
        ]
    },
    {
        path: '',canActivate:[AdminAuthGaurdService], children: [
            { path: "admin-dashboard", component: AdminDashboardComponent },
            { path: "admin/user", component: UserComponent },
            { path: "admin/product", component: ProductComponent }
        ]
    },
    {
        path:'',canActivate:[SellerBuyerAuthGuardLogin],children:[
            {path:"sign-in",component:SiginSignupComponent},
            {path:"sign-up",component:SiginSignupComponent},
        
        ]
    },
    {
        path:'', canActivate:[SellerAuthGaurdService], children:[
            {path:"seller-dashboard",component:SellerDashboardComponent},
            {path:"seller/product",component:ProductComponent}


        ]
        
    },
    {
        path:'',canActivate:[BuyerAuthGaurdService], children:[
            {path:"buyer-dashboard",component:BuyerDashboardComponent},
            {path:"checkout",component:CheckoutComponent}
        ]
    },
    {path:"**",component:PageNotFoundComponent}
];
