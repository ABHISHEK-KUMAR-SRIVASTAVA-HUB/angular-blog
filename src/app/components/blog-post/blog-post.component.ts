import { GlobalStoreService } from './../../service/global-store.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  postBlogForm = new FormGroup({
    title : new FormControl('', [Validators.required]),
    description: new FormControl('',  [Validators.required]),
    detail: new FormControl('',  [Validators.required, Validators.minLength(10)]),
  });


  constructor(
    private _GlobalStoreService: GlobalStoreService,
    private route: Router) {
  }

  ngOnInit() {

  }
  onSubmit() {
    console.log(this.postBlogForm);
    const newBlog = this.postBlogForm.value;
    newBlog['id'] = (Math.floor(Math.random() * 99999) + 1) + '';
    newBlog['rating'] = 1;
    const blogList = this._GlobalStoreService.get('blogList');
    blogList.unshift(newBlog);
    this._GlobalStoreService.set('blogList', blogList);
    this.route.navigate(['home/blog/list']);
  }

}
