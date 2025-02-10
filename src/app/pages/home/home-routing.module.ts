import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ClusterComponent} from "../cluster/cluster.component";
import {MetodoComponent} from "../metodo/metodo.component";

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            data: {breadcrumb: 'Metodologia de busca - Base ampla'},
            component: HomeComponent 
        },
        {
            path: 'amplo',
            data: {breadcrumb: 'Busca Ampla',  type_source: 'cerrado-2025-02-amplo'},
            component: ClusterComponent
        },
        {
            path: 'restrito',
            data: {breadcrumb: 'Busca Restrito',  type_source: 'cerrado-2025-02-restrito'},
            component: ClusterComponent
        },
        {
            path: 'metodo',
            data: {breadcrumb: 'Metodo'},
            component: MetodoComponent
        }
    ])],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
