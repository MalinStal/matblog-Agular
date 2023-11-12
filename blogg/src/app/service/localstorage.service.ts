import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  getFromLocalStorage(id: string) {
    localStorage.getItem(id);
  }

  addToLocalStorage(id: string, item: any) {
    localStorage.setItem(id, JSON.stringify(item));
  }
  removeFromLocalStorage(id: string) {
    localStorage.removeItem(id);
  }
}
