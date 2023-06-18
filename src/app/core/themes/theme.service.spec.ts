import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  const themeLS = 'theme';
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTheme', () => {
    let matchMediaSpy: jasmine.Spy;
    let localStorageGetSpy: jasmine.Spy;

    afterEach(() => {
      expect(matchMediaSpy).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
    });

    it('should get default browser theme dark', () => {
      matchMediaSpy = spyOn(window, 'matchMedia').and.returnValue({ matches: true } as MediaQueryList);
      const result = service.getTheme();
      expect(result).toEqual('dark-theme');
    });

    it('should get default browser theme light', () => {
      matchMediaSpy = spyOn(window, 'matchMedia').and.returnValue({ matches: false } as MediaQueryList);
      const result = service.getTheme();
      expect(result).toEqual('light-theme');
    });

    it('should localhost theme', () => {
      matchMediaSpy = spyOn(window, 'matchMedia').and.returnValue({ matches: true } as MediaQueryList);
      localStorageGetSpy = spyOn(localStorage, 'getItem').and.returnValue('local-storage-theme')
      const result = service.getTheme();
      expect(result).toEqual('local-storage-theme');
    });
  });

  describe('setTheme', () => {
    let removeThemeSpy: jasmine.Spy;
    let updateThemeSpy: jasmine.Spy;
    let localStorageSetSpy: jasmine.Spy;

    beforeEach(() => {
      removeThemeSpy = spyOn(service, 'removeTheme');
      updateThemeSpy = spyOn(service, 'updateTheme');
    });

    afterEach(() => {
      expect(removeThemeSpy).toHaveBeenCalled();
      expect(updateThemeSpy).toHaveBeenCalled();
    });
    
    it('should set theme', () => {
      const theme = 'custom-theme';
      localStorageSetSpy = spyOn(localStorage, 'setItem');
      service.setTheme(theme);
      expect(localStorageSetSpy).toHaveBeenCalledOnceWith(themeLS, theme);
    });
  });

  describe('removeTheme', () => {
    let bodyClassListRemoveSpy: jasmine.Spy;
    let localStorageRemoveItemSpy: jasmine.Spy;
  
    beforeEach(() => {
      bodyClassListRemoveSpy = spyOn(document.body.classList, 'remove');
      localStorageRemoveItemSpy = spyOn(localStorage, 'removeItem');
    });
  
    afterEach(() => {
      expect(bodyClassListRemoveSpy).toHaveBeenCalledWith(service.getTheme());
      expect(localStorageRemoveItemSpy).toHaveBeenCalledWith(themeLS);
    });
  
    it('should remove localStorage theme', () => {
      service.removeTheme();
    });
  });

  describe('updateTheme', () => {
    let bodyClassListAddSpy: jasmine.Spy;
  
    beforeEach(() => {
      bodyClassListAddSpy = spyOn(document.body.classList, 'add');
    });
  
    afterEach(() => {
      expect(bodyClassListAddSpy).toHaveBeenCalledWith(service.getTheme());
    });
  
    it('should add theme class to body', () => {
      service.updateTheme();
    });
  });
});
