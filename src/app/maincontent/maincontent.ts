import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggle } from '@angular/material/slide-toggle';


import {
  Router,
  RouterOutlet,
  NavigationEnd,
  RouterLinkActive,
  RouterLink,
} from '@angular/router';
import { Loginserv } from '../login/service/loginserv';

@Component({
  selector: 'app-maincontent',
  imports: [RouterOutlet, CommonModule, FormsModule, RouterLinkActive, RouterLink, MatSlideToggle],
  templateUrl: './maincontent.html',
  styleUrl: './maincontent.scss',
})
export class Maincontent {
  signchange = '';
  private router = inject(Router);
  searchinput = '';

  routernoti(){
    this.router.navigate(['/maincontent/notification']);
  }

  routerprofile(){
    this.router.navigate(['/maincontent/profile']);
  }
  pageTitle = 'Dashboard';

  // rtl --------------------------------
  Right = false;

  isRight() {
    this.Right = !this.Right;
  }
  // ------------------------------------

  // ----------------------------------------------
  constructor(private loginserv:Loginserv) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // here I used instanceof NavigationEnd for check the event is NavigationEnd , if yes the code runs as true
        this.updateTitle(event.urlAfterRedirects); // here I used urlAfterRedirects for get the url after the redirect
      }
    });

    // Handle initial load
    setTimeout(() => {
      this.updateTitle(this.router.url);
    }, 1000);
  }

  updateTitle(url: string) {
    if (url.includes('/billing')) {
      this.pageTitle = 'Billing';
    } else if (url.includes('/tables')) {
      this.pageTitle = 'Tables';
    } else if (url.includes('/rtl')) {
      this.pageTitle = 'RTL';
    } else if (url.includes('/notification')) {
      this.pageTitle = 'Notifications';
    } else if (url.includes('/profile')) {
      this.pageTitle = 'Profile';
    } else {
      this.pageTitle = 'Dashboard';
    }
  }

  dashboard() {
    this.router.navigate(['/maincontent/home']);
  }

  notifybell() {
    this.router.navigate(['/maincontent/notification']);
  }
  profile() {
    this.router.navigate(['/maincontent/profile']);
  }
  billing() {
    this.router.navigate(['/maincontent/billing']);
  }

  logout(){
    this.loginserv.isloggedout();
    this.router.navigate(['/login']);
  }

  islogoutconfirm = false;

  logoutconf(){
    this.islogoutconfirm = true;
  }

  cancelLogout(){
    this.islogoutconfirm = false;
  }



  // settings open and close
  
  sidebarcolor = '';
  issetopen = false;
  sidebarcolorchange = 'black';

  ngOnInit() {
    const newcolor = localStorage.getItem('sidebarcolor');
    if (newcolor) {
      this.sidebarcolorchange = newcolor;
    }
  }

  togglesettings() {
    this.issetopen = !this.issetopen;
  }

  changecolor(color: string) {
    this.sidebarcolorchange = color;
    localStorage.setItem('sidebarcolor', color);
  }

  selectedoption = 'dark';

  setoption(data: string) {
    this.selectedoption = data;
  }
  // ----------------------------------------------

  isdarktheme = false ;

  toggleTheme() {
    const themebody = document.body;   // first whole body 

    this.isdarktheme = !this.isdarktheme; // this is for icons 

    if (themebody.classList.contains('dark-theme')) {  // if body has dark-theme class then remove it
      themebody.classList.remove('dark-theme');
    } else {
      themebody.classList.add('dark-theme');  // else add dark-theme class
    }
  }

  isNavbarFixed = true;

  isnavbarfixed(){
    this.isNavbarFixed = !this.isNavbarFixed;
  }

  isprofileactive=false;
  profileclick(){
    this.isprofileactive = !this.isprofileactive;
  }
  closeprofilemanual(){
    this.isprofileactive = false;
  }

}
