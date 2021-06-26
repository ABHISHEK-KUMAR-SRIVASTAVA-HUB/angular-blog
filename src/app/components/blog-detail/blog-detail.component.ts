import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router  } from '@angular/router';
import { GlobalStoreService } from '../../service/global-store.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  selectedBlog: Object = {};
  constructor(
    private currRoute: ActivatedRoute,
    private _GlobalStoreService: GlobalStoreService,
    private route: Router) {

  }

  ngOnInit() {

    const selectedId = this.currRoute.snapshot.paramMap.get('id');
    const blogList  = this._GlobalStoreService.get('blogList');
    if (blogList) {
      this.selectedBlog = blogList.filter(blog => {
        return blog.id === selectedId;
      })[0];
    } else {
      this.route.navigate(['home/blog/list']);
    }
  }

}
