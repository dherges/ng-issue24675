import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DependentService {

  constructor(
    private http: HttpClient
  ) {}

  doTings() {
    console.log("The injected HttpClient is: ", this.http);
    return this.http.get<any>('foo.json');
  }

}

export { DependentService as AliasedDependentService };
