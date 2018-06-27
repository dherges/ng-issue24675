import { NgModule } from "@angular/core";
import { DependentService } from './dependent.service';
import { ConsumerService } from './consumer.service';

@NgModule({
  providers: [
    DependentService,
    ConsumerService
  ]
})
export class ReproModule {}
