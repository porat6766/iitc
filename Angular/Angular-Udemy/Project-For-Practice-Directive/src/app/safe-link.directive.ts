import { Directive, ElementRef, inject, input, Input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective {
    queryParam = input("myapp", { alias: "appSafeLink" })
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

    constructor() {
        console.log("Safe Link Directive Is Active");
    }

    onConfirmLeavePage(event: MouseEvent) {
        const wantToLive = window.confirm('Do you want to leave the app?')

        if (wantToLive) {
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + "?from=" + this.queryParam()
            return
        }

        event.preventDefault()
    }
}