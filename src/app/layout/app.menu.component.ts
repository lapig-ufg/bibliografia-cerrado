import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Metodologia',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Descrição',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/bibliografia']
                    }
                ]
            },
            {
                label: 'Cluster',
                icon: 'pi pi-home',
                items: [
                    
                    {
                        label: 'Busca Amplo',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/bibliografia/amplo']
                    },
                    {
                        label: 'Busca Restrito',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/bibliografia/restrito']
                    }
                ]
            },
           
        ];
    }
}
