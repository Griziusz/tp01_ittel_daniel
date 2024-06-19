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
    CreditcardModule],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule { }
