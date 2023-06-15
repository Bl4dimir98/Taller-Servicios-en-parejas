import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  // Inyeccion de dependencias, similar a intanciar un objeto
  constructor(private httpClient: HttpClient) { }

  // Método NgOnInit similar al constructor, se ejecuta despues del constructor
  ngOnInit() {
    this.getStudents();
    // this.getStudent();
    // this.createStudent();
    // this.updateStudent();
    this.deleteStudent();
  }

  // Obtener todos los students
  getStudents() {
    // Petición del API y esperando una respuesta
    // Para traer la data desde el backend
    // Suscribe para promesas y observables
    // Se recibe una petición y se asigna una respuesta
    const url = 'https://api.escuelajs.co/api/v1/users';
    this.httpClient.get(url).subscribe(
      response => {
        console.log(response);
      });
  }

  // Obtener un student
  getStudent() {
    const url = 'https://api.escuelajs.co/api/v1/users/3';
    this.httpClient.get(url).subscribe(
      response => {
        console.log(response);
      });
  }

  // Crear nuevo student
  createStudent() {
    const data = {
      email: "chicaiza-huilco@yavirac.edu.ec",
      name: "Roberto | Bladimir",
      password: "AngularServicios",
      role: "admin",
      avatar: "https://api.lorem.space/image/face?w=640&h=480"
    }

    const url = 'https://api.escuelajs.co/api/v1/users';
    this.httpClient.post(url, data).subscribe(
      response => {
        console.log(response);
      });
  }

  // Actualizar student
  updateStudent() {
    const data = {
      email: "serviciosangular@yavirac.com",
      name: "Chicaiza-Huilco-3A",
    }

    const url = 'https://api.escuelajs.co/api/v1/users/54';
    this.httpClient.put(url, data).subscribe(
      response => {
        console.log(response);
      });
  }

  // Eliminar student
  deleteStudent() {
    const url = 'https://api.escuelajs.co/api/v1/users/55';
    this.httpClient.delete(url).subscribe(
      response => {
        console.log(response);
      });
  }

}
