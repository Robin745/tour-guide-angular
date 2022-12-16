import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateTourComponent } from './update-tour/update-tour.component';

@NgModule({
  declarations: [DashboardComponent, UpdateTourComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule],
})
export class DashboardModule {}
