import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/User Profile/orders/orders.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UsersComponent } from './components/Dashboard/Adel/users/users.component';
import { UserDetailsComponent } from './components/Dashboard/Adel/user-details/user-details.component';
import { OrdersDashboardComponent } from './components/Dashboard/Adel/orders-dashboard/orders-dashboard.component';
import { OrderDetailsDashboardComponent } from './components/Dashboard/Adel/order-details-dashboard/order-details-dashboard.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AuthenticationGuardGuard } from './Guards/authentication.guard';
import { AddUserComponent } from './components/Dashboard/Adel/add-user/add-user.component';
import { OrderEditDashboardComponent } from './components/Dashboard/Adel/order-edit-dashboard/order-edit-dashboard.component';
import { CategoriesComponent } from './components/Dashboard/Ahmed/categories/categories.component';
import { AddCategoryComponent } from './components/Dashboard/Ahmed/add-category/add-category.component';
import { EditCategoryComponent } from './components/Dashboard/Ahmed/edit-category/edit-category.component';

const routes: Routes = [
  // Abdo
  { path: '', component: HomeComponent },
  {
    path: 'cart',
    canActivate: [AuthenticationGuardGuard],
    component: CartComponent,
  },
  { path: 'checkout', component: CheckoutComponent },

  // Ali

  // Making an Lazy Loading
  {
    path: 'Authentication',
    loadChildren: () =>
      import('./components/Authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },

  // Adel
  { path: 'dashboard/users', component: UsersComponent },
  { path: 'dashboard/users/:id', component: UserDetailsComponent },
  { path: 'dashboard/register/admin', component: AddUserComponent },
  { path: 'dashboard/orders', component: OrdersDashboardComponent },
  { path: 'dashboard/orders/:id', component: OrderDetailsDashboardComponent },
  { path: 'dashboard/edit/order/:id', component: OrderEditDashboardComponent },
  { path: 'dashboard/categories', component: CategoriesComponent },
  { path: 'dashboard/add/category', component: AddCategoryComponent },
  { path: 'dashboard/categories/:id', component: EditCategoryComponent },
  // Reham Abdelrhman
  { path: 'Home', component: HomeComponent },
  { path: 'Products', component: ProductComponent },
  { path: 'Products/:id', component: ProductDetailsComponent },

  // Reham Sayed

  // Ahmed Hamdi
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
