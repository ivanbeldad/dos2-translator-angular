import { Dos2TranslatorAngularPage } from './app.po';

describe('dos2-translator-angular App', () => {
  let page: Dos2TranslatorAngularPage;

  beforeEach(() => {
    page = new Dos2TranslatorAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
