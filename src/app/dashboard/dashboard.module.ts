import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule],
})
export class DashboardModule {}
