import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { StarRatingComponent } from './star-rating.component';

@NgModule({
  declarations: [
    StarRatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [StarRatingComponent]
})
export class AppModule { 

  constructor(private injector: Injector) {
    const component = createCustomElement(StarRatingComponent, {injector});
    customElements.define('star-rating', component);
  }

  ngDoBootstrap(){}

}
