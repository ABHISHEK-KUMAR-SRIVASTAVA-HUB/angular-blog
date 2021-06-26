import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-rating',
  templateUrl: './blog-rating.component.html',
  styleUrls: ['./blog-rating.component.css']
})
export class BlogRatingComponent implements OnInit {
  @Input() rating;

  constructor() {

  }

  ngOnInit() {
    console.log(this.rating);
  }

}
