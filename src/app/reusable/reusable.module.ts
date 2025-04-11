import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableRoutingModule } from './reusable-routing.module';
import { VideoComponent } from './component/video/video.component';
import { NgOptimizedImage } from '@angular/common'

@NgModule({
  declarations: [
    VideoComponent
  ],
  imports: [
    CommonModule,
    ReusableRoutingModule,
    NgOptimizedImage
  ]
})
export class ReusableModule { }
