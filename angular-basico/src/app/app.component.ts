import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from "./componente-01/componente-01.component";
import { Componente02Component } from "./componente02/componente02.component";
import { Componente03Component } from "./componente03/componente03.component";
import { Componente04Component } from "./componente04/componente04.component";
import { Componente05Component } from "./componente05/componente05.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Componente01Component, Componente02Component, Componente03Component, Componente04Component, Componente05Component]
})
export class AppComponent {
  title = 'angular-basico';
}
