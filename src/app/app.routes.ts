import { Routes } from '@angular/router';
import { FirstTabComponent } from './first-tab/first-tab.component';
import { SecondTabComponent } from './second-tab/second-tab.component';
import { AcceptedBackgroundColors } from './global-type-def';
import { TrainingTabComponent } from './first-tab/training-tab/training-tab.component';

export type RouteDescriptor = {
  label: string;
  path: string;
  component: any;
  isUnlocked: boolean;
  bgColor: AcceptedBackgroundColors;
  children: RouteDescriptor[];
};

export const routeDescriptors: RouteDescriptor[] = [
  {
    label: 'Adventure',
    path: 'adventure',
    component: FirstTabComponent,
    isUnlocked: true,
    bgColor: 'orange',
    children: [
      {
        label: 'Training',
        path: 'training',
        component: TrainingTabComponent,
        isUnlocked: true,
        bgColor: 'orange',
        children: []
      },
    ]
  },
  {
    label: 'Map',
    path: 'map',
    component: SecondTabComponent,
    isUnlocked: true,
    bgColor: 'yellow',
    children: []
  },
];

function descriptorToRoute(descriptor: RouteDescriptor[]): Routes {
  return descriptor.map(desc => ({
    path: desc.path,
    component: desc.component,
    children: descriptorToRoute(desc.children),
  }))
}

export const routes: Routes = [
  ...descriptorToRoute(routeDescriptors),
  // { path: '**', redirectTo: '/adventure' }
];
