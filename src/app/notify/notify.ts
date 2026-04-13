import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-notify',
  imports: [CommonModule],
  templateUrl: './notify.html',
  styleUrl: './notify.scss',
})
export class Notify {

  constructor(private crd:ChangeDetectorRef){}

  showsuccess = false;
    opensuccess(){
      this.showsuccess = true;

      setTimeout(() => {
        this.showsuccess = false;
        this.crd.detectChanges();
      }, 2000);
    }

    showinfo = false;
    openinfo(){
      this.showinfo = true;

      setTimeout(() => {
        this.showinfo = false;
        this.crd.detectChanges();
      }, 2000);
    }

    showwarning = false;
    openwarning(){
      this.showwarning = true;

      setTimeout(() => {
        this.showwarning = false;
        this.crd.detectChanges();
      }, 2000);
    }

    showerror = false;
    openerror(){
      this.showerror = true;

      setTimeout(() => {
        this.showerror = false;
        this.crd.detectChanges();
      }, 2000);
    }
}
