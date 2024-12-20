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
                label: 'HOME',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Bibliografia',
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
                        label: 'Cerrado Cluster',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/bibliografia/cluster']
                    }
                ]
            },
            {
                label: 'Metodo',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Metodo',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/bibliografia/metodo']
                    }
                ]
            }
        ];
    }
}
