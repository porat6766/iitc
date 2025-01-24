import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class SignUpComponent {
  getWelcomeMessage(): string {
    return 'ברוך הבא לרכיב ההרשמה!';
  }
}
