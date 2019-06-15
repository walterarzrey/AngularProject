import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular CRUD';

  employeeArray: Employee [] = [
    {id: 1, name: 'Walter', position: 'Manager', email:'WalterArzapalo23@gmail.com'},
    {id: 2, name: 'Luis', position: 'Designer', email:'rokekanto@gmail.com'},
    {id: 3, name: 'Alexander', position: 'Programmer', email:'obispoa1@gmail.com'}
  ];

  selectedEmployee: Employee = new Employee();
  
  addEmployee(){
    if(this.selectedEmployee.id == 0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }
  editEmployee(employee: Employee){
    this.selectedEmployee = employee;
  }
  deleteEmployee(){
    if(confirm('¿Estás seguro de querer eliminarlo?')){
      this.employeeArray = this.employeeArray.filter(i => this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }
}
