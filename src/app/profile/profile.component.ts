import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private employees : any[] = [];
  private employeeProfile :any={};
  private employeePut :any={};
  private showEmp : any;
  private key : string;
  isEdit : boolean = false;
  isSave : boolean = true;

  
  constructor(private empservice:EmployeeService) { }

  ngOnInit() {
    
     this.empservice.getEmployees().subscribe(
      
      (res:Response) => {
        console.log('The response is ')
        console.log(res)
       var record = res.json();
         
        console.log(record);
      
       var records = Object.keys(record).map(function(key){

          return {key:key,data:record[key]};
        });
        console.log(records);
        this.employees = records;
        console.log(this.employees);
        

    },
      
    (errror)=>{
            
      console.log("Retriving employees failed  :(");
    }
                            
    );
  }


  // saving new employee .... 
    setEmployee(){
    alert("saving employee "+this.employeeProfile);
    console.log(this.employeeProfile);
    this.empservice.postEmployee(this.employeeProfile);
  }

  // showing employee profile ...
  showProfile(emp){
    alert("showing profile")
    this.showEmp = emp;
    console.log(this.showEmp);
  }

  // deleting employe profile ...
  deleteEmployee(){
    
    this.empservice.deleteEmployee(this.showEmp.key);
  }

  edit(employee){
    alert("Editing ... ... ");
    console.log(employee);
    this.isEdit = true;
    this.isSave = false;
    this.employeeProfile = employee.data;
    this.key = employee.key;
    console.log(this.employeeProfile);
  }
  updateEmployee(){
    this.empservice.putEmployee(this.key,this.employeeProfile);
    this.isEdit = false;
    this.isSave = true;
    this.employeeProfile = {};
  }

}
