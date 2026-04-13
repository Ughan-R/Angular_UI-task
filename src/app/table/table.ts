import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Getapidata } from './apicall/getapidata';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  authors = [
    {
      name: 'John Michael',
      email: 'john@creative-tim.com',
      role: 'Manager',
      department: 'Organization',
      status: 'ONLINE',
      date: '23/04/18',
      rawDate: new Date(2018, 3, 23),
    },
    {
      name: 'Alexa Liras',
      email: 'alexa@creative-tim.com',
      role: 'Executive',
      department: 'Developer',
      status: 'OFFLINE',
      date: '11/01/19',
      rawDate: new Date(2019, 0, 11),
    },
    {
      name: 'Laurent Perrier',
      email: 'laurent@creative-tim.com',
      role: 'programator',
      department: 'Developer',
      status: 'ONLINE',
      date: '19/09/17',
      rawDate: new Date(2017, 8, 19),
    },
    {
      name: 'Richard Gran',
      email: 'richard@creative-tim.com',
      role: 'Manager',
      department: 'Executive',
      status: 'ONLINE',
      date: '24/12/08',
      rawDate: new Date(2008, 11, 24),
    },
    {
      name: 'Miriam Eric',
      email: 'miriam@creative-tim.com',
      role: 'programator',
      department: 'Developer',
      status: 'ONLINE',
      date: '04/10/21',
      rawDate: new Date(2021, 9, 4),
    },
  ];

  authorSortCol: string = '';
  authorSortAsc: boolean = true;

  

  sortAuthors(col: string) {
    if (this.authorSortCol === col) {
      this.authorSortAsc = !this.authorSortAsc;
    } else {
      this.authorSortCol = col;
      this.authorSortAsc = true;
    }

    this.authors.sort((a: any, b: any) => {
      let valA = a[col];
      let valB = b[col];

      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();

      if (valA < valB) return this.authorSortAsc ? -1 : 1;
      if (valA > valB) return this.authorSortAsc ? 1 : -1;
      return 0;
    });
  }

  // API calling

  iseditform!:FormGroup;
  newprojectform!:FormGroup;


  constructor(
    private servicedata: Getapidata,
    private crd: ChangeDetectorRef,
    private fb: FormBuilder
  ) {

    this.iseditform=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      total:['',[Validators.required,Validators.min(100)]],
      grade:['',[Validators.required,Validators.pattern('^[A-Za-z]+$')]],
      maths:['',[Validators.required,Validators.min(0),Validators.max(100)]]
    });

    this.newprojectform=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      total:['',[Validators.required,Validators.min(100)]],
      grade:['',[Validators.required,Validators.pattern('^[A-Za-z]+$')]],
      maths:['',[Validators.required,Validators.min(0),Validators.max(100)]],
      chemistry:['0'],
      physics:['0'],
      english:['0'],
      history:['0'],
    });  

  }


  projectstore: any[] = []; //for getmethod

  searchprojectstore: any[] = []; //for search
  iseditmode = false;
  isemployeeid!: number;

  msg='';
  failmsg='';

  openedit(employee: any) {
    this.isemployeeid = employee.id;
    this.iseditmode = true;

    this.iseditform.patchValue({
      name: employee.name,
      total: employee.total,
      grade: employee.grade.toUpperCase(),
      maths: employee.maths
    });
  }
  closedit() {
    this.iseditmode = false;
  }

  ngOnInit() {
    this.getusers();
  }

  isdataloaded = true;

  getusers() {
    this.servicedata.getdata().subscribe({
      next: (data: any) => {
        this.projectstore = data as any[];
        this.searchprojectstore = [...this.projectstore]; //a copy of orginal api data for search

        this.updatepaginateddata();
        this.crd.detectChanges();
        this.msg='data loaded successfully';
        setTimeout(() => {
          this.msg='';
        }, 2000);
        console.log(this.projectstore);
      },
      error: (err) => {
        this.failmsg='data loaded failed';
        setTimeout(() => {
          this.failmsg='';
        }, 2000);
        console.log(err);
        this.isdataloaded = false;
      },
    });
  }

  updateemployeedata() {

    let payload = {
      name: this.iseditform.value.name,
      maths: Number(this.iseditform.value.maths),
      total: this.iseditform.value.total,
      grade: this.iseditform.value.grade.toUpperCase(),
    };

    this.servicedata.upgradedata(this.isemployeeid, payload).subscribe({
      next: (data: any) => {
        this.getusers();   // refresh 
        this.crd.detectChanges(); 
        this.iseditmode = false;
        this.msg='data updated successfully';
        setTimeout(() => {
          this.msg='';
        }, 2000);
      },
      error: (err) => {
        this.failmsg='data updated failed';
        setTimeout(() => {
          this.failmsg='';
        }, 2000);
        console.log(err);
        this.iseditmode = false;
      }
    });
  }

  isdelete = false;
  deleteopen(dataId: number) {
    this.isdelete = true;
    this.isemployeeid = dataId;
  }
  cancelDelete() {
    this.isdelete = false;
  }
  deleteemployee() {
    this.servicedata.deletedata(this.isemployeeid).subscribe({
      next: (data: any) => {
        this.msg='data deleted successfully';
        setTimeout(() => {
          this.msg='';
        }, 2000);
        this.getusers();
        this.isdelete = false;
      },
      error: (err) => {
        this.failmsg='failed to delete the data';
        setTimeout(() => {
          this.failmsg='';
        }, 2000);
        console.log(err);
      },
    });
  }

  // add project
  isaddproject = false;

  openaddproject() {
    this.isaddproject = true;
  }

  closeproject() {
    this.isaddproject = false;
  }

  newprojectdata() {

    this.newprojectform.markAllAsTouched();

    if(this.newprojectform.invalid){
      return;
    }

    this.servicedata.postdata(this.newprojectform.value).subscribe({
      next: (data: any) => {
        this.getusers();
        this.crd.detectChanges();
        this.resetfunction();
        this.msg='data added successfully';
        setTimeout(() => {
          this.msg='';
        }, 2000);
      },
      error: (err: any) => {
        this.failmsg='failed to add the data';
        setTimeout(() => {
          this.failmsg='';
        }, 2000);
        console.log(err);
        this.resetfunction();
      },
    });
  }

  // search project
  searchvalue = '';

  filtersearch() {
    if (!this.searchvalue) {
      this.searchprojectstore = [...this.projectstore];
      this.currentpage = 1;
      this.updatepaginateddata(); //refresh page after search
      return;
    } 
    else {
      this.searchprojectstore = this.projectstore.filter((item: any) => {
        return item.name.toLowerCase().includes(this.searchvalue.toLowerCase());
      });
      this.currentpage = 1;
      this.updatepaginateddata();
    }
  }

  resetfunction() {
    this.newprojectform.reset();
    this.newprojectform.patchValue({
      name: '',
      total: '',
      grade: '',
      maths: '',
      chemistry: '0',
      physics: '0',
      english: '0',
      history: '0',
    });
    this.isaddproject = false;
    this.crd.detectChanges();
  }

  // sortProjects(col: string) {
  //   if (this.projectSortCol === col) {
  //     this.projectSortAsc = !this.projectSortAsc;
  //   } else {
  //     this.projectSortCol = col;
  //     this.projectSortAsc = true;
  //   }

  //   this.projects.sort((a: any, b: any) => {
  //     let valA = a[col];
  //     let valB = b[col];

  //     if (typeof valA === 'string') valA = valA.toLowerCase();
  //     if (typeof valB === 'string') valB = valB.toLowerCase();

  //     if (valA < valB) return this.projectSortAsc ? -1 : 1;
  //     if (valA > valB) return this.projectSortAsc ? 1 : -1;
  //     return 0;
  //   });
  // }

  
  // pagination logic

  currentpage = 1;
  pagesize = 5;
  paginationdata: any[] = [];

  updatepaginateddata() {
    const start = (this.currentpage - 1) * this.pagesize;
    const end = start + this.pagesize;
    this.paginationdata = this.searchprojectstore.slice(start, end);
  }

  nextpage() {
    this.currentpage = this.currentpage + 1;
    this.updatepaginateddata();
  }

  previouspage() {
    this.currentpage = this.currentpage - 1;
    this.updatepaginateddata();
  }
}
