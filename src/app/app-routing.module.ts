import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TimelineComponent } from './timeline/timeline.component';
import { UploadPostComponent } from './upload-post/upload-post.component';

const routes: Routes = [
  {path: '', component: AuthComponent, data: {formType : "login"}},
  {path: 'register', component: AuthComponent, data: {formType : "register"}},
  {path:'timeline', component: TimelineComponent},
  {path:'addpost', component: UploadPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
