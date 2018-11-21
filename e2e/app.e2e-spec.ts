import { SocialHospitalPage } from './app.po';

describe('social-hospital App', () => {
  let page: SocialHospitalPage;

  beforeEach(() => {
    page = new SocialHospitalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
