import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../core/auth-service";
import {ChatService} from "../../core/chat-service";

@Component({
  selector: 'app-app-auth',
  templateUrl: './app-auth.component.html',
  styleUrls: ['./app-auth.component.scss']
})
export class AppAuthComponent {
  form = this.fb.group({
    email: [''],
    password: [''],
  })

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly chatService: ChatService,
  ) {
  }

  signIn() {
    const {email, password} = this.form.value;
    this.authService.signIn(email as string, password as string).subscribe(() => {
      this.chatService.test().subscribe(it => console.log(it));
    });
  }
}
