import { Component } from '@angular/core';
import { IonCardSubtitle, IonCardTitle ,IonCard, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, IonCardContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';

@Component({
  selector: 'task-list',
  templateUrl: 'task-list.page.html',
  styleUrls: ['task-list.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader ,IonCard, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class TaskListPage {

  constructor() {}

}
