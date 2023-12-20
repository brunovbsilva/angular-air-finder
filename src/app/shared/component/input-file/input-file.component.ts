import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileType } from './enums/file-type.enum';
import { TextsModel } from './models/texts/texts.model';
import { TextsService } from './services/texts.service';
import { MessageComponent } from './message/message.component';
import { ErrorMessage } from './models/errors.model';
import { MimeTypeHelper } from './helpers/mime-type.helper';
import { dragoverAnimation } from './animations/dragover.animation';
import { showHideAnimations } from './animations/show-hide.animations';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
  animations: [
    dragoverAnimation,
    showHideAnimations
  ]
})
export class InputFileComponent implements OnInit, AfterViewInit {

  @ViewChild('message') message!: MessageComponent;

  internalForm = new FormGroup({});

  @Input() name!: string;
  @Input() form!: FormGroup;
  @Input() idButton: string = '';
  @Input() messageTimeout: number = 1500;
  @Input() isRequired: boolean = false;
  @Input() maxSize: number = 15;
  private _maxLength: number = 10;
  @Input() set maxLength(value: number) {
    this.configureMaxLength(value);
  }
  get maxLength() {
    return this._maxLength;
  }
  private _allowedTypes: FileType[] = [];
  @Input() set allowedTypes(values: FileType[]) {
    this._allowedTypes = values;
    this.configureAllowedTypes(values);
  }
  get allowedTypes() {
    return this._allowedTypes;
  }
  @Input() texts?: TextsModel;
  @Output() onChanges: EventEmitter<File[]> = new EventEmitter<File[]>();
  _files: File[] = [];
  _types: string[] = [];
  _isDragover: boolean = false;


  constructor(private textsService: TextsService) { }

  ngOnInit(): void {
    this.adjustForms();
    this.checkRequiredForm();
  }

  //#region CONFIGURATIONS
  private configureMaxLength(value: number) {
    this._maxLength = value > 10 ? 10 :
      value < 1 ? 1 :
        value;
  }

  private configureAllowedTypes(values: FileType[]) {
    this._types = [];
    values.forEach(type => this._types.push(MimeTypeHelper.getMimeType(type)));
  }
  //#endregion CONFIGURATIONS

  //#region FORM
  private adjustForms() {
    this.form.addControl(this.name, new FormControl(''));
    this.internalForm.addControl(this.name, new FormControl(''));
    this.form.get(this.name)?.valueChanges.subscribe(v => {
      if (v == null) {
        this._files = [];
        this.onChanges.emit(this._files);
      }
    });
  }
  private checkRequiredForm() {
    const hasValidator = this.form.get(this.name)!.hasValidator(Validators.required);
    if (this.isRequired && !hasValidator)
      this.form.get(this.name)?.addValidators(Validators.required);
    else
      this.isRequired = hasValidator;
  }

  private updateForm() {
    this.form.get(this.name)?.patchValue(
      this._files
    );
    this.onChanges.emit(this._files);
  }
  //#endregion FORM

  //#region TEXTS
  ngAfterViewInit(): void {
    this.setTexts(this.texts);
  }

  ngOnChanges(): void {
    this.setTexts(this.texts);
  }

  private setTexts(model?: TextsModel) {
    this.textsService.setTexts(model);
    this.texts = this.textsService.getText(this.maxSize, this.allowedTypes);
  }
  //#endregion TEXTS

  //#region FILES
  public onFileChange(event: any) {
    const fileList = event.target.files as FileList;
    let validation: ErrorMessage[] = [];
    for (let index = 0; index < fileList.length; index++) {
      const file = fileList.item(index)!;
      validation.push(this.validateFile(file));
    }
    this.showMessage(validation);
    this.updateForm();
    this.internalForm.reset();
  }

  private validateFile(file: File): ErrorMessage {
    if (this.isBiggerThanMaxSize())
      return { message: this.texts?.messages?.maxLengthError!, success: false };

    if (this.hasNotFileType(file) || this.isSameFileName(file) || this.hasNotSize(file))
      return { message: this.texts?.messages?.invalidFile!, success: false };

    if (this.maxSize && file.size > this.getMaxSizeMB())
      return { message: this.texts?.messages?.maxSizeError!, success: false };

    this._files.push(file);
    return { message: this.texts?.messages?.success!, success: true };
  }

  public showMessage(models: ErrorMessage[]) {
    this.message.open(models.filter(x => x.success === false)[0] ?? models[0]);
    setTimeout(() => {
      this.message.close();
    }, this.messageTimeout);
  }

  public removeFile(file: File) {
    this._files = this._files.filter(f => f !== file);
    this.updateForm();
  }

  public removeAllFiles() {
    this._files = [];
    this.updateForm();
  }

  private getMaxSizeMB() {
    return this.maxSize * 1024 * 1024;
  }

  private hasNotSize(file: File) {
    return file.size == 0;
  }

  private hasNotFileType(file: File) {
    return !this._types.includes(file.type)
  }

  private isSameFileName(file: File) {
    return this._files.filter(x => x.name === file.name).length > 0
  }

  private isBiggerThanMaxSize() {
    return this._files.length >= this._maxLength
  }

  //#endregion FILES

  //#region DRAG AND DROP
  setDragover(value: boolean) {
    this._isDragover = value;
  }
  //#endregion DRAG AND DROP

}
