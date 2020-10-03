import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { InterpolationComponent } from './interpolation/interpolation.component';
//import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
// import { PropertyBindingComponent } from './property-binding/property-binding.component';
// import { StructuralDirecticeNgIfComponent } from './structural-directice-ng-if/structural-directice-ng-if.component';
// import { StructuralDirecticeNgSwitchComponent } from './structural-directice-ng-switch/structural-directice-ng-switch.component';
// import { StructuralDirecticeNgForComponent } from './structural-directice-ng-for/structural-directice-ng-for.component';
// import { ClickEventComponent } from './click-event/click-event.component';
import {TestService} from './test.service';
import { DemoComponentsComponent } from './components/demo-components/demo-components.component';
import { DemoComponents123Component } from './components/demo-components123/demo-components123.component';

@NgModule({
  declarations: [
    AppComponent,
    // InterpolationComponent,
    // TwoWayDataBindingComponent,
    // PropertyBindingComponent,
    // StructuralDirecticeNgIfComponent,
    // StructuralDirecticeNgSwitchComponent,
    // StructuralDirecticeNgForComponent,
    // ClickEventComponent,
    routingComponents,
    DemoComponentsComponent,
    DemoComponents123Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
