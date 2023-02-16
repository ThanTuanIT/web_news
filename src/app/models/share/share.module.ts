import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NewsItemComponent } from '../../components/news-item/news-item.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [NavbarComponent, NewsItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, NewsItemComponent],
})
export class ShareModule {
  
}
