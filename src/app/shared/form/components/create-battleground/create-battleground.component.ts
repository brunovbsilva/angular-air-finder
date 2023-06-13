import { AfterViewInit, Component, Input } from '@angular/core';
import { CreateBattlegroundForm } from './create-battleground.form';
import { ViacepService } from 'src/app/shared/utils/services/viacep.service';

@Component({
  selector: 'battleground-form',
  templateUrl: './create-battleground.component.html',
  styleUrls: ['./create-battleground.component.scss']
})
export class CreateBattlegroundComponent implements AfterViewInit {
  
  @Input() createBGForm!: CreateBattlegroundForm;

  constructor(private viacep: ViacepService) {}

  ngAfterViewInit(): void {
    this.createBGForm.cep.valueChanges.subscribe(v => {
      if(v.length == 8){
        this.viacep.getAddress(v).subscribe(v => {
          this.createBGForm.address.patchValue(v.logradouro);
          this.createBGForm.neighborhood.patchValue(v.bairro);
          this.createBGForm.city.patchValue(v.localidade);
          this.createBGForm.state.patchValue(v.uf);
        });
      }
      else {
        this.createBGForm.address.reset();
        this.createBGForm.neighborhood.reset();
        this.createBGForm.city.reset();
        this.createBGForm.state.reset();
        this.createBGForm.number.reset();
      }
    });
    this.createBGForm.address.valueChanges.subscribe(v => {
      if(v != null && v != '') this.createBGForm.number.enable();
      else this.createBGForm.number.disable();
    })
  }
}
