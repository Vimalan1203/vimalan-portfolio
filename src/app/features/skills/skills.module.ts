import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SkillsComponent } from './skills.component';

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: SkillsComponent }]), MatCardModule, MatProgressSpinnerModule]
})
export class SkillsModule {}
