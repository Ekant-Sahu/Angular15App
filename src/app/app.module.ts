import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LoginComponent } from './login/login.component';
import {MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import {HttpClientModule} from '@angular/common/http'
import {ToastrModule} from 'ngx-toastr'
import {MatRadioModule} from '@angular/material/radio';
import { TexteditorComponent } from './texteditor/texteditor.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorInterceptor } from './interceptor/token-interceptor.interceptor';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FooterComponent } from './footer/footer.component';
import { EventComponent } from './event/event.component';
import { MessageComponent } from './message/message.component';
import {NgsRevealModule} from 'ngx-scrollreveal';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    NotfoundComponent,
    NavbarComponent,
    SingUpComponent,
    LoginComponent,
    AdminComponent,
    TexteditorComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    EventComponent,
    MessageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule,
    IvyCarouselModule,
    MatTableModule,
    ToastrModule.forRoot(
      {
        timeOut: 100000,
        preventDuplicates: true,
        positionClass: 'toastr-top-left'
      }
    ),
    NgsRevealModule
    
  ],
  providers: [
    //{
    // provide: HTTP_INTERCEPTORS,
    // useClass: TokenInterceptorInterceptor,
    // multi: true
  //}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
