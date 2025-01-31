import { Component, ContentChild, contentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "control",
    "(click)": "onClick()"
  }
})
export class ControlComponent {
  // @HostBinding("class") className = "control"
  // @HostListener("click")
  // @ContentChild("input") private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>("input")

  private el = inject(ElementRef)

  onClick() {
    console.log("Clicked");
    console.log(this.el);
    console.log(this.control());

  }
  label = input.required<string>()

}
