import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TransactionDetailComponent } from './transaction/transaction-detail/transaction-detail.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserComponent } from './user/service/user/user.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, TransactionDetailComponent, TransactionListComponent, UserDetailComponent, UserListComponent, FooterComponent, UserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}