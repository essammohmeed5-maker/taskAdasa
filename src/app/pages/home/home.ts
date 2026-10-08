import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostCard } from '../../shared/components/post-card/post-card';
import { posts, categories } from '../../data/data';
import { News } from '../../shared/components/news/news';
import { Button } from '../../shared/components/button/button';
import { SectionLabel } from '../../shared/components/section-label/section-label';

@Component({
  selector: 'app-home',
imports: [RouterLink, PostCard, News, Button, SectionLabel],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  featuredPosts = posts.filter(post => post.featured);
  latestPosts = posts.filter(post => !post.featured).slice(0, 6);
  categories = categories;
}
