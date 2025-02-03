import { ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MessagesService } from '../message.service';
import { subscribeOn, Subscription } from 'rxjs';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
})
export class MessagesListComponent implements OnInit {
  private messageService = inject(MessagesService)
  private cdRef = inject(ChangeDetectorRef)
  private distroyRef = inject(DestroyRef)

  messages: string[] = []

  ngOnInit() {
    const subscription = this.messageService.messages$.subscribe((messages) => {
      this.messages = messages
      this.cdRef.markForCheck()
    })
    this.distroyRef.onDestroy(() => {
      subscription.unsubscribe()
    })
  }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
