import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';


interface Transaction {
  name: string;
  date: string;
  amount: number;
  type: 'credit' | 'debit';
  status: 'up' | 'down';
  isOpen: string ;
}

@Component({
  selector: 'app-testarea',
  imports: [MatExpansionModule,CommonModule],
  templateUrl: './testarea.html',
  styleUrl: './testarea.scss',
})
export class Testarea {

  isRight = false;

toggleNavbar() {
  this.isRight = !this.isRight;
}


loginWithGoogle() {
  window.open('https://accounts.google.com/', '_blank');
}

loginWithGithub() {
  window.open('https://github.com/login', '_blank');
}

loginWithX() {
  window.open('https://X.com/login', '_blank');
}
  newestTransactions: Transaction[] = [
    { name: 'Netflix', date: '27 March 2020,at 12.30 PM', amount: 2500, type: 'debit', status: 'down', isOpen :' netfix loremasdbada d ad  ad jas nasd ad asdjankdnskjda d aknsd a' },
    { name: 'Apple', date: '27 March 2020,at 4.30 AM', amount: 2000, type: 'credit', status: 'up',isOpen :'Apple loremasdbada d ad  ad jas nasd ad asdjankdnskjda d aknsd a' }
  ];

  olderTransactions: Transaction[] = [
    { name: 'Stripe', date: '26 March 2020,at 3.45 PM', amount: 750, type: 'credit', status: 'up' ,isOpen :' strip loremasdbada d ad  ad jas nasd ad asdjankdnskjda d aknsd a'},
    { name: 'Hubspot', date: '26 March 2020,at 12.30 PM', amount: 1000, type: 'credit', status: 'up' ,isOpen :'loremasdbada d ad  ad jas nasd ad asdjankdnskjda d aknsd a'},
    { name: 'Creative Tim', date: '26 March 2020,at 8.30 PM', amount: 1500, type: 'credit', status: 'up',isOpen :'loremasdbada d ad  ad jas nasd ad asdjankdnskjda d aknsd a'},
    { name: 'Netflix', date: '27 March 2020,at 12.30 PM', amount: 2500, type: 'debit', status: 'down' ,isOpen :'loremasdbada d ad  ad jas nasd ad asdjankdnskjda d aknsd a'}
  ];

  toggletx(data: any){
    data.isOpen = !data.isOpen;
  }

isSettingsOpen = false;

toggleSettings() {
  this.isSettingsOpen = !this.isSettingsOpen;
}


sidebarColor = 'green';   // default color

changeSidebarColor(color: string) {
  this.sidebarColor = color;
}


// new toggle without angular material
toggleTx(tx: any) {
  tx.isOpen = !tx.isOpen;
}

}
