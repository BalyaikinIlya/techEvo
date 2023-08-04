import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:id', component: ProductDetailComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/items', component: ItemsComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
