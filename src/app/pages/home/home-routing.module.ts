import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ClusterComponent} from "../cluster/cluster.component";
import {MetodoComponent} from "../metodo/metodo.component";

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            data: {breadcrumb: 'Cerrado: uma análise cienciométrica'},
            component: HomeComponent },
        {
            path: 'cluster',
            data: {breadcrumb: 'Cerrado'},
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
