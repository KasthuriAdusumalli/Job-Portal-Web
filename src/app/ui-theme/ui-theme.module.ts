import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
const uiModule = [TableModule, ButtonModule, InputTextModule, RatingModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...uiModule],
  exports: [...uiModule],
})
export class UiThemeModule {}
