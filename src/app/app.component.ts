import { Component } from '@angular/core';
import { RespuestasService } from './services/respuestas.service';
import { select2, select3, select4 } from './modelos/selects';

// CORS https://www.youtube.com/watch?v=zq48aSVEwbQ

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RespuestasService]
})
export class AppComponent {
  title = 'sagaji-api';
  opcion1: string[] = ["ArmadoraModeloDescripcion", "LineaDescripcionModelo", "DescripcionModeloLinea", "ModeloDescripcionPeriodo"];
  opcion2: select2[];
  opcion3: select3[];
  opcion4: select4[];

  url_p: string = '';
  clclave1: string = '';
  clclave2: string = '';
  clclave3: string = '';
  clclave4: string = '';


  constructor(
    private resService: RespuestasService
  ) { }

  capOption1(name: string) {
    if (name === '0') this.opcion2 = [];
    else {
      this.clclave1 = name;
      this.url_p = '/MVC?id=CategoriaProductos&tipo=' + name;
      this.resService.url_select2 = this.url_p;

      this.resService.getSelect2().subscribe(
        res => {
          this.opcion2 = res;
        });
    }
  }


  capOption2(clclave: string) {
    if (clclave === '0') this.opcion3 = [];
    else {
      this.clclave2 = clclave;
      this.resService.url_select3 = this.resService.url_select2 + "&primera=" + clclave

      this.resService.getSelect3().subscribe(
        res => {
          this.opcion3 = res;
        });
    }
  }


  capOption3(clclave: string) {
    if (clclave === '0') this.opcion4 = [];
    else {
      this.clclave3 = clclave;
      this.resService.url_select4 = this.resService.url_select3 + "&segunda=" + clclave


      this.resService.getSelect4().subscribe(
        res => {
          this.opcion4 = res;
        });
    }
  }

  capOption4(clclave: string) {
    if (clclave === '0') console.log('Nada que mostrar');
    else {
      this.resService.url_busqueda = "MVC?id=BusquedaProductosCategoria&tipo=" + this.clclave1
        + "&primera=" + this.clclave2 + "&segunda=" + this.clclave3 + "&tercera="
        + clclave + "&cuarta=&pagina=0";


      this.resService.getBusqueda().subscribe(
        res => {
          console.log(res.productos);
        });
    }
  }
}
