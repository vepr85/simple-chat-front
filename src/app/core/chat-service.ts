import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({providedIn: "root"})
export class ChatService {
  constructor(private readonly httpClient: HttpClient) {
  }

  test(): Observable<string> {
    return this.httpClient.get(`${environment.apiEndpoint}/chat/test`, {
      responseType: 'text'
    })
  }
}
