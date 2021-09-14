import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
const uiModule = [TableModule, ButtonModule, InputTextModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...uiModule],
  exports: [...uiModule],
})
export class UiThemeModule {}
