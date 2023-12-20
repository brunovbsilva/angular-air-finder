import { TestBed } from "@angular/core/testing";
import { FileType } from "../enums/file-type.enum";
import { MimeTypeHelper } from "./mime-type.helper";

describe('MimeTypeHelper', () => {
  let helper: MimeTypeHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MimeTypeHelper]
    });
    helper = TestBed.inject(MimeTypeHelper);
  });

  [
    FileType.PDF,
    FileType.ZIP,
    FileType.RAR,
    FileType.DOCx,
    FileType.DOC,
    FileType.XLSx,
    FileType.XLS,
    FileType.PPTx,
    FileType.MSG,
    FileType.JPEG,
    FileType.PNG,
    FileType.SVG,
    FileType.TXT,
    FileType.CSV
  ].forEach((fileType) => {
    it('should return mime type for ' + FileType[fileType], () => {
      // Act
      const result = MimeTypeHelper.getMimeType(fileType);
      // Assert
      expect(result).toBeTruthy();
    });
  });
});