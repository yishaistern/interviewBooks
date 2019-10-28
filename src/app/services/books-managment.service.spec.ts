import { TestBed } from '@angular/core/testing';

import { BooksManagmentService } from './books-managment.service';

describe('BooksManagmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksManagmentService = TestBed.get(BooksManagmentService);
    expect(service).toBeTruthy();
  });
});
