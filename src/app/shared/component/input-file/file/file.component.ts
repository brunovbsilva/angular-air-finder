import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  @Input() file?: File = new File([], '');
  @Output() onRemove: EventEmitter<File> = new EventEmitter<File>();

  constructor() { }

  ngOnInit(): void {
  }

  removeFile(event: any) {
    event.stopPropagation();
    this.onRemove.emit(this.file);
  }

}
