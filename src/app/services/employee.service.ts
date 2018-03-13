import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService implements OnInit {

  
  constructor(private http:Http) { }

  ngOnInit(){
    
   
  }

  getEmployees():Observable<any>{
    
    return this.http.get('https://kiyo-94ffa.firebaseio.com/employees.json');
    
  }

  

// =================================getEmployee ===================================================


public postEmployee(employee){
          
          this.http.post('https://kiyo-94ffa.firebaseio.com/employees.json',employee).subscribe(
            (data)=>{},
            (errror)=>{
              console.log("Adding employee failed  :( ");
            }
          );
}
//==================================post Employee ==================================================================


public putEmployee(key,employee){
  
            this.http.put('https://kiyo-94ffa.firebaseio.com/employees/'+key+'.json',employee).subscribe(
              (data)=>{},
              (errror)=>{
                console.log("Updating employee failed  :( ");
              }
            );
  }

  //================================putEmployee=================================================================

  public deleteEmployee(key){
            
              this.http.delete('https://kiyo-94ffa.firebaseio.com/employees/'+key+'.json').subscribe(
                (data)=>{},
                (errror)=>{
                  console.log("Failed to delete Employee  :( ");
                }
              );
    }
}