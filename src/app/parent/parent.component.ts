import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  providers: [CommonService], // service at the parent component level
  templateUrl: './parent.component.html',
  changeDetection: ChangeDetectionStrategy.Default // Default strategy
})
export class ParentComponent {
  
  primitiveData: number = 1;
  nonPrimitiveData = { count: 1 };
  parentServiceInformation: string;

  constructor(private commonService: CommonService) {
    this.parentServiceInformation = this.commonService.getServiceInformation();
  }
  
  updatePrimitiveData() {
    this.primitiveData++;
  }

  updateNonPrimitiveData() {
    this.nonPrimitiveData.count++;
  }

}
