import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'createTask',
    component: CreateTaskComponent,
  },
  {
    path: 'editTask/:id',
    component: EditTaskComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
