import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { Userinfo } from './billinfo/userinfo';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface BillingInfo {
  name: string;
  companyName: string;
  email: string;
  vatNumber: string;
}

interface Invoice {
  date: string;
  id: string;
  amount: number;
  pdf: string;
}

interface Transaction {
  name: string;
  date: string;
  amount: number;
  type: 'credit' | 'debit';
  status: 'up' | 'down';
  isOpen: true | false ;
}

@Component({
  selector: 'app-billing',
  imports: [CommonModule,MatExpansionModule,ReactiveFormsModule],
  templateUrl: './billing.html',
  styleUrl: './billing.scss',
})
export class Billing {
 
  billingform!:FormGroup;
  newinfobill={
    name:'',
    companyName:'',
    email:'',
    vatNumber:''
  }

  billinginfo:BillingInfo[] = [];

  constructor(private userinfo: Userinfo, private crd:ChangeDetectorRef,private fb:FormBuilder) { 

    this.billingform=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      companyName:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      vatNumber:['',[Validators.required,Validators.minLength(5)]]
    });
  }
  
  ngOnInit() {
    this.getuserinfo();
  }

  addinfo=false;

  openinfobox(){
    this.addinfo=!this.addinfo;
  }

  msg='';
  failmsg='';
  getuserinfo(){
    this.userinfo.getuserinfo().subscribe({
      next:(data:any)=>{
        this.billinginfo = data as any[];
        this.msg="data loaded successfully";
        this.crd.detectChanges();
      },
      error:(err)=>{
        this.failmsg = "failed to load the data";
        this.crd.detectChanges();
      }
    })
  }

  newbillinginfo(){
    this.billingform.markAllAsTouched();

    if(this.billingform.invalid){
      return;
    }

    this.userinfo.postuserinfo(this.billingform.value).subscribe({
      next:(data:any)=>{
        this.msg = "data is uploaded successfully";
        this.getuserinfo();
        this.crd.detectChanges();
        // this.billingform.reset();
        this.addinfo=false;
        this.resetform();
      },
      error:(err)=>{
        this.failmsg = "failed to upload the data";
        this.crd.detectChanges();
        this.crd.detectChanges();
        // this.billingform.reset();
        this.addinfo=false;
        this.resetform();
      }
    })
  }

  editmode=false;
  editid!:number;

  editinfo(data:any){

    this.editmode=true;

    this.selectedbillinginfo = data;
    this.editid=data.id;

    this.billingform.patchValue({
      name:data.name,
      companyName:data.companyName,
      email:data.email,
      vatNumber:data.vatNumber
    });
  }

  updateinfo(){

    // let payload ={
    //   name:this.billingform.get('name')?.value,
    //   companyName:this.billingform.get('companyName')?.value,
    //   email:this.billingform.get('email')?.value,
    //   vatNumber:this.billingform.get('vatNumber')?.value
    // }

    this.userinfo.updateuserinfo(this.editid,this.billingform.value).subscribe({
      next:(data:any)=>{
        this.msg = "data is updated successfully";
        this.getuserinfo();
        this.crd.detectChanges();
        this.editmode=false;
        this.resetform();
      },
      error:(err)=>{
        this.failmsg = "failed to update the data";
        this.crd.detectChanges();
        this.editmode=false;
        this.resetform();
      }
    })
  }

  deleteinfo(data:any){
    let dataid = data.id;
    this.userinfo.deleteuserinfo(dataid).subscribe({
      next:(data:any)=>{
        this.msg = "data was deleted from the server";
        this.getuserinfo();
        this.editmode=false;
      },
      error:(err)=>{
        this.failmsg = "failed to delete the data";
        this.editmode=false;
      }
    })
  }

  resetform(){
    this.billingform.reset();
    this.editmode=false;
    this.addinfo=false;
  }

  selectedbillinginfo:any = {};

  invoices: Invoice[] = [
    { date: 'March,01,2020', id: 'CL_7483947', amount: 180 ,pdf:'/examplejsnotes.pdf'},
    { date: 'February,10,2021', id: '#RV_126749', amount: 250 ,pdf:'/examplejsnotes.pdf'},
    { date: 'April,05,2020', id: '#QW-103578', amount: 120 ,pdf:'/examplejsnotes.pdf'},
    { date: 'April,05,2020', id: '#AR-803481', amount: 300 ,pdf:'/examplejsnotes.pdf'}
  ];

  newestTransactions: Transaction[] = [
    { name: 'Netflix', date: '27 March 2020,at 12.30 PM', amount: 2500, type: 'debit', status: 'down', isOpen :false },
    { name: 'Apple', date: '27 March 2020,at 4.30 AM', amount: 2000, type: 'credit', status: 'up',isOpen :false }
  ];

  olderTransactions: Transaction[] = [
    { name: 'Stripe', date: '26 March 2020,at 3.45 PM', amount: 750, type: 'credit', status: 'up' ,isOpen :false},
    { name: 'Hubspot', date: '26 March 2020,at 12.30 PM', amount: 1000, type: 'credit', status: 'up' ,isOpen :false},
    { name: 'Creative Tim', date: '26 March 2020,at 8.30 PM', amount: 1500, type: 'credit', status: 'up',isOpen :false },
    { name: 'Netflix', date: '27 March 2020,at 12.30 PM', amount: 2500, type: 'debit', status: 'down' ,isOpen :false}
  ];

  toggletx(data: any){
    data.isOpen = !data.isOpen;
  }

  showinvoicepopup: boolean = false;

  popupbox() {
    this.showinvoicepopup = !this.showinvoicepopup;
    console.log(this.showinvoicepopup);
  }

  openPdf(pdfPath: string) {
  window.open(pdfPath, '_blank');
}

editoption=false;

openedit(info:any){
  this.selectedbillinginfo = {...info};
  this.editoption=true;
}
}
