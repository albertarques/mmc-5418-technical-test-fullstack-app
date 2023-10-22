import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
<<<<<<< HEAD
import { TransactionDetailComponent } from './transaction/transaction-detail/transaction-detail.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
=======
import { TransactionDetailComponent } from './transactions/transaction-detail/transaction-detail.component';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
>>>>>>> e467154a51c338636589249adc937dd0729e8a6b
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './shared/components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransactionDetailComponent,
    TransactionListComponent,
    UserDetailComponent,
    UserListComponent,
    FooterComponent,
    LoginComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
