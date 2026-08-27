import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-detalle',
  styleUrl: './detalle.css',
  templateUrl: './detalle.html',
})
export class Detalle implements OnInit{

  items = [
    {id: 1, name: 'item 1'},
    {id: 2, name: 'item 2'},
    {id: 3, name: 'item 3'},
    {id: 4, name: 'item 4'},
  ];

  itemEncontrado = signal<{ id: number, name: string} | null>({id: 1, name: 'Item 1'});

  constructor (private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
  }

  

  ngOnInit() {
    this.route.snapshot.paramMap.get('id');
    
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id')

      if (id === null){
        console.log('id no proporcionado');
        return;
      }

      const item = this.items.find(i => i.id === +id);

      if (item) {
        this.itemEncontrado.set(item);
        console.log('item encontrado:', item)

      } else {
        console.log('item no encontrado')
      }
    })
  }
}

/*
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id')

      if (id === null){
        console.log('id no proporcionado');
        return;
      }

      const item = this.items.find(i => i.id === +id);

      if (item) {
        this.itemEncontrado.set(item);
        console.log('item encontrado:', item)

      } else {
        console.log('item no encontrado')
      }
    })



    

    snapshot:  es una foto de los parametros de la ruta en el momento en que se accede a este componente
    
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id === null){
        console.log('id no proporcionado');
        return;
      }

      const item = this.items.find(i => i.id === +id);

      if (item) {
        this.itemEncontrado.set(item);
        console.log('item encontrado:', item)

      } else {
        console.log('item no encontrado')
      }
    }
      */
    