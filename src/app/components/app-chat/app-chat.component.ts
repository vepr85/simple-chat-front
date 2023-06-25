import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-app-chat',
  templateUrl: './app-chat.component.html',
  styleUrls: ['./app-chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppChatComponent {

}
