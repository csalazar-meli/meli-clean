import { Subject, Subscription } from 'rxjs';

import { Injectable } from '@angular/core';

type Categories = string[];

@Injectable()
export class CategoriesService {
  public subject = new Subject<Categories>();

  private subscription!: Subscription;

  public subscribe(handler: (categories: Categories) => void) {
    this.subscription = this.subject.subscribe(handler);
  }

  public unsubscribe(): void {
    this.subscription?.unsubscribe();
  }

  public emit(categories: Categories): void {
    this.subject.next(categories);
  }
}
