import { Component } from '@angular/core';
import { IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader ,IonCard, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class HomePage {
  constructor() {}
}
