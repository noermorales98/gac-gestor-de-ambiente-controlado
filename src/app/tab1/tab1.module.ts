import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { Tab1PageRoutingModule } from './tab1-routing.module';




@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "showUnits": false,
      "title":"Bienvenido",
      "subtitle":"°Centigrados",
      "showTitle": true,
      "titleColor" : "var(--ion-color-dark)",
      "animateTitle": false,
      "animation": false,
      "animationDuration": 0,
      "showSubtitle": true,
      "showBackground": false,
      "clockwise": false,
      "responsive": true,
      "lazy":false,
      "startFromZero": false,
      "showZeroOuterStroke": false})
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
