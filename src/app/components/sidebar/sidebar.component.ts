import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    /*   { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
        { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
      { path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },*/

    { path: '/admin/candidats', title: 'Gestion des candidats',  icon:'users_single-02', class: '' },
    { path: '/admin/candidacy', title: 'Gestion des candidatures',  icon:'design_bullet-list-67', class: '' },
    { path: '/admin/univ', title: 'Gestion des universités',  icon:'ui-1_bell-53', class: '' },
    { path: '/admin/etab', title: 'Gestion des etablissements',  icon:'ui-1_bell-53', class: '' },
    { path: '/admin/filiere', title: 'Gestion des filieres',  icon:'ui-1_bell-53', class: '' },

   /* { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }*/

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}