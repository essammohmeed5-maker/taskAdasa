import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-navigation',
  imports: [],
  templateUrl: './page-navigation.html',
  styleUrl: './page-navigation.css'
})
export class PageNavigation {

  @Input() currentPage = 1;
  @Input() totalPages = 1;

  @Output() pageChange = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from(
      { length: this.totalPages },
      (_, i) => i + 1
    );
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.pageChange.emit(page);
  }
}
