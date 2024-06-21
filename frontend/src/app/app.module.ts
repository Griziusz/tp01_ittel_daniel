import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreditcardModule } from './creditcard/creditcard.module';
import { RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AppRoutingModule } from './app.routes';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CreditcardModule],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule { }
