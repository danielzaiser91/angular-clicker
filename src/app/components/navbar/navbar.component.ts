import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RouteDescriptor, routeDescriptors } from '../../app.routes';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  routes = routeDescriptors;
  routeDesc = signal<RouteDescriptor | undefined>(undefined);

  constructor() {
    this.activatedRoute.snapshot.routeConfig?.children;
    this.router.events
      .pipe(
        filter((event: any) => event || event instanceof NavigationEnd) // or RouterEvent, or whatnot
      )
      .subscribe((event: NavigationEnd) => {
        const route = this.routes.find(
          (route) => route.path === event.url?.match(/\/(\w+)/)?.[1]
        );
        this.routeDesc.set(route);
        console.log(event);
      });
  }
}
