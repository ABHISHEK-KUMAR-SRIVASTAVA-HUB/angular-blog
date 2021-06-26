import { Component, OnInit } from '@angular/core';
import { BlogApiService } from '../../service/blog-api.service';
import { Router } from '@angular/router';
import { GlobalStoreService } from '../../service/global-store.service';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  allBlogs;
  blogList;
  p: Number = 1;
  constructor(private _BlogApiService: BlogApiService,
              private _GlobalStoreService: GlobalStoreService,
              private route: Router) { }

  ngOnInit() {
    if (this._GlobalStoreService.get('blogList')) {
      this.blogList = this._GlobalStoreService.get('blogList');
      this.allBlogs = this._GlobalStoreService.get('blogList');
    } else {
      this._BlogApiService.getBlogList()
      .subscribe(response => {
        this.blogList = response;
        this.allBlogs = response;
        this._GlobalStoreService.set('blogList', this.blogList);
      });
    }

  }

  onSelect(selectedBlog) {
    console.log(selectedBlog);
    this.route.navigate(['/home/blog/detail', selectedBlog.id]);
  }

  onSearchByText (searchText) {
    const  newList =  this.blogList.filter((blog) => {
      return blog['description'].toLowerCase().indexOf(searchText) !== -1;
    });
    if (newList && newList.length === 0) {
      this.allBlogs = this.blogList;
    } else {
      this.allBlogs = newList;
    }
  }

}
