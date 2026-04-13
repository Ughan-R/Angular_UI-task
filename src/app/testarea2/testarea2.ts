import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testarea2',
  imports: [CommonModule],
  templateUrl: './testarea2.html',
  styleUrl: './testarea2.scss',
})
export class Testarea2 {

  isRTL = false;
  isNavbarFixed = false;

  toggleRTL() {
    if (this.isNavbarFixed) return;
    this.isRTL = !this.isRTL;
  }

  toggleNavbarFix() {
    this.isNavbarFixed = !this.isNavbarFixed;
  }

  showsuccess = false;

register() {
  this.showsuccess = true;

  setTimeout(() => {
    this.showsuccess = false;
  }, 3000);
}
}
