import { Component, OnInit } from '@angular/core';
import { SessionUser } from 'src/app/core/common/models/session-user.model';
import { SessionUserService } from 'src/app/core/security/services/session-user.service';

@Component({
  selector: 'app-qrcode-generator',
  templateUrl: './qrcode-generator.component.html',
  styleUrls: ['./qrcode-generator.component.scss']
})
export class QrcodeGeneratorComponent implements OnInit {

  user: SessionUser;

  constructor(
    private sessionUser: SessionUserService
  ) {
    this.user = this.sessionUser.get();
  }

  ngOnInit(): void {
  }
}
