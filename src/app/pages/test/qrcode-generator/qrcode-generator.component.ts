import { Component, OnInit } from '@angular/core';
import { SessionUserService } from 'src/app/core/security/services/session-user.service';

@Component({
  selector: 'app-qrcode-generator',
  templateUrl: './qrcode-generator.component.html',
  styleUrls: ['./qrcode-generator.component.scss']
})
export class QrcodeGeneratorComponent implements OnInit {

  user: any;

  constructor(
    private sessionUser: SessionUserService
  ) {
    this.user = sessionUser.get();
  }

  ngOnInit(): void {
  }
}
