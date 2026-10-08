import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { posts } from '../../data/data';
import { Post } from '../../data/interface';

@Component({
  selector: 'app-blog-details',
  imports: [RouterLink],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css'
})
export class BlogDetails implements OnInit {

  post!: Post;
  posts = posts;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.post = posts.find(
      post => post.id === id
    )!;

    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });

  }

}
