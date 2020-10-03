import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StructuralDirecticeNgIfComponent } from './structural-directice-ng-if/structural-directice-ng-if.component';
import { StructuralDirecticeNgSwitchComponent } from './structural-directice-ng-switch/structural-directice-ng-switch.component';
import { StructuralDirecticeNgForComponent } from './structural-directice-ng-for/structural-directice-ng-for.component';
import { ClickEventComponent } from './click-event/click-event.component';

const routes: Routes = [
  {
    path:"interpolation",
    component:InterpolationComponent
  },
  {
    path:"twowaybinding",
    component:TwoWayDataBindingComponent
  },
  {
    path:"propertybind",
    component:PropertyBindingComponent
  },
  {
    path:"ngif",
    component:StructuralDirecticeNgIfComponent
  },
  {
    path:"ngswitch",
    component:StructuralDirecticeNgSwitchComponent
  },
  {
    path:"ngfor",
    component:StructuralDirecticeNgForComponent
  },
  {
    path:"clickevent",
    component:ClickEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InterpolationComponent,TwoWayDataBindingComponent,PropertyBindingComponent,
                                  StructuralDirecticeNgIfComponent,StructuralDirecticeNgForComponent,
                                  StructuralDirecticeNgSwitchComponent,ClickEventComponent
                                ]
