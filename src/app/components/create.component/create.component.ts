import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create.component',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {

  @ViewChild("cajanumero") cajanumero!: ElementRef;
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad!: ElementRef;

  constructor(private _service: ServiceDepartamentos, private _router: Router){}

  crearDepartamento(): void {
    let departamento = new Departamento(parseInt(this.cajanumero.nativeElement.value), this.cajanombre.nativeElement.value, this.cajalocalidad.nativeElement.value);
    this._service.createDepartamento(departamento).subscribe(response => {
      console.log("Insertado");
      this._router.navigate(['/']);
    })
  }
}
