import { Injectable } from '@angular/core';
import { DependentService, AliasedDependentService } from './dependent.service';

@Injectable()
export class ConsumerService {

  constructor(
    //private dependent: DependentService
    private dependent: AliasedDependentService
  ) {}

  foo() {
    this.dependent.doTings();
  }

}
