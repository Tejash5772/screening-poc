import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-child',
  standalone: true,
  providers: [CommonService], // service at the parent component level
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush // OnPush strategy
})
export class ChildComponent {
  
  @Input() data: any;

  childData: number = 1;
  childServiceInformation: string;

  constructor(private commonService: CommonService) {
    this.childServiceInformation = this.commonService.getServiceInformation();
  }

  updateChildData() {
    this.childData++;
  }
}
