import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-metodo',
    templateUrl: './metodo.component.html',
    styleUrl: './metodo.component.scss',
    imports: [
      MarkdownModule,
        CommonModule
    ],
    standalone: true
})
export class MetodoComponent implements OnInit {
  
  
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
