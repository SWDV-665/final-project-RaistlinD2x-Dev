import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataServiceService } from '../data-service.service';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  myArray: string[] = [];

  constructor(
    private alertController: AlertController,
    private dialogService: DialogService,
    private dataService: DataServiceService
  ) {}

  loadItems() {
    return this.dataService.getItems();
  }

  removeItem(index: any) {
    this.dialogService.removeItem(index);
  }

  addItem() {
    this.dialogService.addItem();
  }

  editItem(item: any, index: any) {
    this.dialogService.editItem(item, index);
  }

  getText(): any {
    this.dataService.getTextFromServer();
  }
}
