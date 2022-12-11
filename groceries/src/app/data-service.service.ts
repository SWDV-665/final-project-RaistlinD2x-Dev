import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  items: Array<{ name: string; quantity: number }> = [];

  constructor(private http: HttpClient) {}

  getItems() {
    return this.items;
  }

  addItem(item: { name: string; quantity: number }) {
    this.items.push(item);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  updateItem(item: { name: string; quantity: number }, index: number) {
    this.items[index] = item;
  }

  getTextFromServer(): any {
    console.log(
      this.http.get('http://groceries-server-jr.herokuapp.com:3000/')
    );
    return this.http.get('http://groceries-server-jr.herokuapp.com/');
  }
}
