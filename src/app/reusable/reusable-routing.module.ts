import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './component/video/video.component';

const routes: Routes = [
  {
    path:"",
    component: VideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReusableRoutingModule { }
