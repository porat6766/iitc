import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<"user" | "guest" | "admin">({ alias: "appAuth" })
  private authService = inject(AuthService)
  private templateRef = inject(TemplateRef)
  private viewContainerRef = inject(ViewContainerRef)

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef)
        console.log("Show element");
      } else {
        this.viewContainerRef.clear()
        console.log("Do not show element");
      }
    })
  }

}
