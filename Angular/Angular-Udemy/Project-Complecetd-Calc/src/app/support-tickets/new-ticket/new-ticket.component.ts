import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { ControlComponent } from "../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  // @Output() add = new EventEmitter()
  enteredTitle = ''
  enteredRequest = ''
  add = output<{ title: string, text: string }>()

  // private form = viewChild.required<ElementRef<HTMLFormElement>>("form")

  // ngOnInit(): void {
  //   console.log("On init");
  //   console.log(this.form.nativeElement);
  // }

  // ngAfterViewInit(): void {
  //   console.log("AFTER VIEW INIT");
  //   console.log(this.form.nativeElement);
  // }

  // ngAfterContent
  //afterRender
  //afterNextRender

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredRequest })
    // this.form.nativeElement.reset()
    this.enteredRequest = ""
    this.enteredTitle = ""
  }
}
