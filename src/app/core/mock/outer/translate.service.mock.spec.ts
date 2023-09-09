import TranslateServiceMock from './translate.service.mock';

describe('TranslateServiceMock', () => {
  it('should transform', () => {
    const translateServiceMock = new TranslateServiceMock();
    const query: string = 'teste';

    translateServiceMock.setDefaultLang();
    const result = translateServiceMock.transform(query);

    expect(result.toString()).toEqual(query.toString());
  });
});
