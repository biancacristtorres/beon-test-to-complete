import type { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { SearchResultsPage } from './SearchResultsPage';
import { ProductDetailsPage } from './ProductDetailsPage';

export class PageManager {
  constructor(private readonly page: Page) {}

  private _home?: HomePage;
  private _searchResults?: SearchResultsPage;
  private _productDetails?: ProductDetailsPage;

  get home(): HomePage {
    if (!this._home) this._home = new HomePage(this.page);
    return this._home;
  }

  get searchResults(): SearchResultsPage {
    if (!this._searchResults) this._searchResults = new SearchResultsPage(this.page);
    return this._searchResults;
  }

  get productDetails(): ProductDetailsPage {
    if (!this._productDetails) this._productDetails = new ProductDetailsPage(this.page);
    return this._productDetails;
  }
}
