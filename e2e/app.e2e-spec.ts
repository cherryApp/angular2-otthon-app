import { OtthonPage } from './app.po';

describe('otthon App', () => {
  let page: OtthonPage;

  beforeEach(() => {
    page = new OtthonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
