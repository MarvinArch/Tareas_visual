import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tarea: any[]=[]

  tareaMod = {
    id: null,
    name: "",
    complete: false,    
    dateDelivery: undefined
  }

  constructor (private appService: AppService){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.appService.getAll()
    .subscribe((data: any)=> this.tarea=data);
  }

  save(){
    if (this.tareaMod.id) {
      this.appService.update(this.tareaMod.id!, this.tareaMod).subscribe(()=>this.getAll());
    } else {
      this.appService.create(this.tareaMod).subscribe(()=>this.getAll());
    }
    

    this.tareaMod={
      id: null,
    name: "",
    complete: false,
    dateDelivery: undefined
    }
  }

  edit(tarea: any){
    this.tareaMod={
      ...tarea
    };
  }

  delete(tarea: any){
    this.appService.delete(tarea.id).subscribe(()=> this.getAll());
  }

}
