import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";

interface TokenResult {
  authToken: string
}

@Injectable({providedIn: "root"})
export class AuthService {
  public authToken: string | null = null;

  constructor(private readonly httpClient: HttpClient) {
  }

  signIn(email: string, password: string): Observable<void> {
    return this.httpClient.post<TokenResult>(`${environment.apiEndpoint}/auth/sign-in`, {
      email, password
    }).pipe(
      map(it => this.authToken = it.authToken),
      map(() => void 0)
    );
  }

  signUp(email: string, password: string) {
    return this.httpClient.post<TokenResult>(`${environment.apiEndpoint}/auth/sign-up`, {
      email, password
    }).pipe(
      map(it => this.authToken = it.authToken),
      map(() => void 0)
    );
  }

}
