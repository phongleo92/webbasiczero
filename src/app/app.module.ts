import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ModalModule, CollapseModule, ButtonsModule, AlertModule, CarouselModule, BsDropdownModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';

import { PostsComponent } from './posts/posts.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';

import { PostsService } from './posts.service';
import { FileUploadService } from './file-upload.service';
import { FileUploadFakeService } from './file-upload.fake.service';

//DEFINE THE ROUTES
const ROUTES = [
  {
      path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: 'upload', component: UploadfileComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UploadfileComponent,
    PostsComponent,
    HomeComponent,
    TopNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,MatButtonModule, MatCheckboxModule, MatGridListModule,
    MatIconModule, MatCardModule,
    AlertModule.forRoot(),BsDropdownModule.forRoot(),CarouselModule.forRoot(),
    ButtonsModule.forRoot(),CollapseModule.forRoot(),ModalModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService, { provide: FileUploadService, useClass: FileUploadFakeService } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
