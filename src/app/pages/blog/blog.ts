import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { posts } from '../../data/data';
import { PostCard } from '../../shared/components/post-card/post-card';
import { PageNavigation } from '../../shared/components/page-navigation/page-navigation';
import { SectionLabel } from '../../shared/components/section-label/section-label';

@Component({
  selector: 'app-blog',
  imports: [FormsModule, RouterOutlet, PostCard, PageNavigation, SectionLabel],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  posts = posts;

  searchTerm = '';
  selectedCategory = '';
  viewMode: 'grid' | 'list' = 'grid';

  currentPage = 1;
  postsPerPage = 6;

  get filteredPosts() {
    return this.posts.filter(post =>
      post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedCategory === '' ||
        post.category === this.selectedCategory)
    );
  }

  get paginatedPosts() {
    const start = (this.currentPage - 1) * this.postsPerPage;
    const end = start + this.postsPerPage;

    return this.filteredPosts.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.filteredPosts.length / this.postsPerPage);
  }

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
}
