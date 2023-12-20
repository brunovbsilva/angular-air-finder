import { FileType } from "../enums/file-type.enum";

export class MimeTypeHelper {
  constructor() {}

  public static getMimeType(fileType: FileType): string {
    switch (fileType) {
      case FileType.PDF: 
        return 'application/pdf';
      case FileType.ZIP: 
        return 'application/zip';
      case FileType.RAR: 
        return 'application/x-rar-compressed';
      case FileType.DOCx: 
        return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      case FileType.DOC: 
        return 'application/msword';
      case FileType.XLSx: 
        return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      case FileType.XLS: 
        return 'application/vnd.ms-excel';
      case FileType.PPTx: 
        return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
      case FileType.MSG: 
        return 'application/vnd.ms-outlook';
      case FileType.JPEG: 
        return 'image/jpeg';
      case FileType.PNG: 
        return 'image/png';
      case FileType.SVG: 
        return 'image/svg+xml';
      case FileType.TXT: 
        return 'text/plain';
      case FileType.CSV: 
        return 'text/csv';
    }
  }
}