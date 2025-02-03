import { Component, DestroyRef, inject, OnInit } from '@angular/core';

import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private distroyRef = inject(DestroyRef)

  ngOnInit(): void {
    const subscreption = interval(1000).pipe(
      map((val) => val ** 2)
    ).subscribe({
      next: (val) => console.log(val)
    })

    this.distroyRef.onDestroy(() => {
      subscreption.unsubscribe()
    })
  }
}
