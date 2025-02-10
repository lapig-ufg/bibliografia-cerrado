import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TableServices } from '../../service/table.service';
import {ButtonModule} from "primeng/button";
import {TableComponent} from "../../shared/table/table.component";
import {ImageModule} from "primeng/image";
import { TabPanel,TabViewModule } from 'primeng/tabview';

import { CommonModule } from '@angular/common';
import { environment } from './../../../environments/environment';
import { StatusSource } from 'src/app/shared/interface/source';
import { StatusSourceService } from 'src/app/service/status-source';
import { MarkdownModule } from 'ngx-markdown';
@Component({
    selector: 'app-cluster',
    templateUrl: './cluster.component.html',
    styleUrl: './cluster.component.scss',
    imports: [
        ButtonModule,
        TableComponent,
        ImageModule,
        TabViewModule,
        CommonModule,
        MarkdownModule
    ],
    standalone: true
})
export class ClusterComponent implements OnInit {
  @ViewChildren(TabPanel) tabs: QueryList<TabPanel>  = new QueryList<TabPanel>();
  type_source: string = '';
  max_cluter: number = 0;
  cluster_id: number| undefined = 0;
  imageLoaded: { [key: string]: boolean } = {};
  imageList = ['numero_publicacoes_por_ano', 'top_10_autores', 'top_10_instituicoes', 'top_10_keywords','type_cluster'];
  statisSource!: StatusSource;
  
  
  constructor(private route: ActivatedRoute,
    private tableService: TableServices,
    private statusSource: StatusSourceService, ) { }

  ngOnInit(): void {
    this.statusSource.statusSource$.subscribe(dados => {
      console.log(dados)
      this.statisSource = dados;
      this.max_cluter = dados.max_cluster
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.tableService.setInfo(this.type_source,this.cluster_id)
    });
    this.route.data.subscribe((data) => {
      this.type_source = data['type_source'];
      this.tableService.setInfo(this.type_source,this.cluster_id) // Atribui o valor baseado na rota
  });
  }

  activeTabId: string | null = null;

  // Verifica a aba ativa na inicialização
  ngAfterViewInit() {
    this.updateActiveTabId();
    console.log('Aba inicial:', this.activeTabId);
  }
  onTabChange() {
    this.updateActiveTabId();
    console.log('Aba alterada para:', this.activeTabId);
  }

  // Método para atualizar o ID da aba ativa
  private updateActiveTabId() {
    const activeTab = this.tabs.find(tab => tab.selected);
    
    
    this.activeTabId = activeTab?.el.nativeElement.getAttribute('data-id') || null;
    if (this.activeTabId !== undefined){
      if (this.activeTabId === 'table-cluster'){
        this.tableService.setInfo(this.type_source,this.cluster_id) 
      }
      if (this.activeTabId === 'table-full'){
        
        this.tableService.setInfo(this.type_source,undefined) 
      }
    }
  }
  setCluster(direction: boolean): void {
    if ( this.cluster_id !== undefined){
      if (direction){
          if (this.cluster_id === this.max_cluter) {
            this.cluster_id = 0
          }else{
            this.cluster_id = this.cluster_id +1
          }

      }else{
        if (this.cluster_id === 0) {
          this.cluster_id = this.max_cluter
        }else{
          this.cluster_id = this.cluster_id -1
        }
      }
    }
    this.tableService.setInfo(this.type_source,this.cluster_id) 

  }
  
  getImageUrl(): string {
    if (this.cluster_id === undefined){
      return ''
    }
    let id = this.cluster_id.toString().padStart(3, '0')

    let info:string[] = this.type_source.split('-')
    
    return `https://s3.lapig.iesa.ufg.br/public/literatura/${info[0]}/${info[1]}/${info[3]}/${id}_keywords.png`
  }

  getImageAgrupamentoTematico(name:string): string {
    if (this.cluster_id === undefined){
      return ''
    }
    let id = this.cluster_id.toString()

    let info:string[] = this.type_source.split('-')

    return `https://s3.lapig.iesa.ufg.br/public/literatura/${info[0]}/${info[1]}/${info[3]}/clusters/${id}_${name}.png`

  }

  getMarkdown(name:string): string {
    

    let info:string[] = this.type_source.split('-')

    return `https://s3.lapig.iesa.ufg.br/public/literatura/${info[0]}/${info[1]}/${info[3]}/markdown/${name}.md`

  }
}
