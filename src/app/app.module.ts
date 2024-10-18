import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApodComponent } from './components/apod/apod.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { TechtransferModule } from './components/techtransfer/techtransfer.module';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
// import { CreateTaskModule } from './pages/create-task/create-task.module';
import { HomeModule } from './pages/home/home.module';
import { DynamicRouteGuard } from './guards/dynamic-route.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-Auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApodComponent,
    AboutComponent,
    NotFoundComponent,
    // EditTaskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterOutlet,
    HighchartsChartModule,
    NgbModule,
    HomeModule,
  ],
  providers: [DynamicRouteGuard, AuthGuard, NoAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
