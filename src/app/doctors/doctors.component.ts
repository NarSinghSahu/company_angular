import { Component, OnInit} from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

 private docs : any[] =[
  { name:"Rohit " ,age :23 ,spec : "dermologist",pic :"./assets/images/rohit.png" },
  { name:"Rohini " ,age :23 ,spec: "cardologist",pic :"./assets/images/rohini.jpg" },
  { name:"Rohan " ,age :23 ,spec : "somlogist",pic:"./assets/images/rohan.png"},
  
 ];

 showTemplate: boolean = false;
 showProfile:boolean = false;

 private newDoc:any = {};
 private profileDoc:any = {};
 docData:any[] = [] ;
 isEdit:boolean = false;
 isAdd:boolean = false;


  constructor(public http:Http) { }

  ngOnInit() {
      this.fetchDoctor();
    
  }

 
  fetchDoctor(){

    this.http.get('https://kiyo-94ffa.firebaseio.com/user.json').subscribe(
      (res:Response) => {
        console.log('The response is ')
        console.log(res)
       var temp = res.json();
         
        console.log(temp);
      
       var record = Object.keys(temp).map(function(key){
        console.log( "Received data ---------- "+key);

          return {key:key,data:temp[key]};
        });
        console.log(record);
        this.docData = record;
        
      
      

    },
   (error) =>{
     console.log("Error retriving data ...............");
   }
  
  );


  }//...................fetchdoctor...........................................


  deleteDoctor(key:string){
    
    alert("delete doctor "+key + this.profileDoc.key);
    if(key==="1"){
       key = this.profileDoc.key;
     
    }

    this.http.delete('https://kiyo-94ffa.firebaseio.com/user/'+key+'.json').subscribe(
      (error)=>{
        console.log("error retriving data ------------");
      }
    );

    
  }//.....................deleteDoctor...............................................

 


  profile(doc){
    this.showProfile = true;
    alert("profile of "+doc.data.name);
    this.profileDoc = doc;

  }

  edit(data){
    this.toggle(2);
    alert("edit doctor "+data.name);
    this.newDoc = data;
    
  }

  update(key){

      this.http.put('https://kiyo-94ffa.firebaseio.com/user/'+key+'.json',this.newDoc).subscribe(
        (error)=>{
          console.log("error updating data ------------");
        }

      );
  }



  public add(){

       
          alert("new doctor ");
          this.http.post('https://kiyo-94ffa.firebaseio.com/user.json',this.newDoc).subscribe(data => {
          },
        (error) =>{
          console.log("Error sending data ...............");
        }
        
        );
        
  } //  .................add () ........................

  public toggle(data : number){

            if(data ===  1){
              this.showTemplate = true;
              this.isEdit = false;
              this.isAdd = true;

            }if(data === 2){
              this.isEdit = true;
              this.isAdd = false;
              this.showTemplate = true;
            }

  }






}
