import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePromedComponent } from './create-promed/create-promed.component';
import { PromedDetailsComponent } from './promed-details/promed-details.component';
import { PromedListComponent } from './promed-list/promed-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UpdatePromedComponent } from './update-promed/update-promed.component';
import { LoginComponent } from './login/login.component';
import {HttpInterceptorService} from './httpInterceptor.service';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    CreatePromedComponent,
    PromedDetailsComponent,
    PromedListComponent,
    UpdatePromedComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
