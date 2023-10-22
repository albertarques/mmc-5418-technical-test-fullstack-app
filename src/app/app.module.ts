import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Sared components
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { TransactionDetailComponent } from './transactions/transaction-detail/transaction-detail.component';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';

// Users components
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserListComponent } from './users/user-list/user-list.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, TransactionDetailComponent, TransactionListComponent, UserDetailComponent, UserListComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
