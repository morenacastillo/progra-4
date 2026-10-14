import { ChangeDetectorRef, Component, EventEmitter, input, Input, OnChanges, OnInit, output, Output, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-hijo',
  styleUrl: './hijo.css',
  templateUrl: './hijo.html',
})

export class Hijo implements OnInit, OnChanges{

  constructor(private cdr: ChangeDetectorRef){}

  dataSignal = input<string>() // ideal
  datoDelHijoSignal= output<string>() // el output es un emisor de eventos - se envia un dato envuelto en un evento para q alguien lo capture
  miModelo = model();

  @Input() data: any;
  @Output() datoDelHijo: EventEmitter<string> = new EventEmitter<string>()



  ngOnChanges(change: any) {
    console.log(change)
    this.cdr.detectChanges()
  }

  ngOnInit() {
    //this.datoDelHijo.emit("Dato desde el hijo")
  }
  emitirDato() {
    this.datoDelHijoSignal.emit("Dato desde el hijo")
    //this.datoDelHijo.emit("Dato desde el hijo 2")


  }

}
