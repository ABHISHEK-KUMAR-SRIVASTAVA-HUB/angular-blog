import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule , RoutingComponents } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

import { ApiService } from './service/api.service';
import { BlogApiService } from './service/blog-api.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { GlobalStoreService } from './service/global-store.service';
import { BlogRatingComponent } from './components/blog-rating/blog-rating.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { AuthGuardService } from './service/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    BlogListComponent,
    BlogDetailComponent,
    AboutUsComponent,
    SearchBarComponent,
    BlogRatingComponent,
    BlogPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, BlogApiService, GlobalStoreService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
