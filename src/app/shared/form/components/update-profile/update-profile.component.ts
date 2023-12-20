import { Component, Input } from '@angular/core';
import { UpdateProfileForm } from './update-profile.form';
import { FileType } from 'src/app/shared/component/input-file/enums/file-type.enum';

@Component({
  selector: 'update-profile-form',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent {
 @Input() public form!: UpdateProfileForm;
 public allowedTypes: FileType[] = [FileType.PNG, FileType.JPEG];
}
