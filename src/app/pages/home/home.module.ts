import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { GridContainerComponent } from 'src/app/components/grid-container/grid-container.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { CommonModule } from '@angular/common';
import { TaskActionsPanelComponent } from 'src/app/components/task-actions-panel/task-actions-panel.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    GridContainerComponent,
    CardComponent,
    TaskActionsPanelComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
