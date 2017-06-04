import { AngularTryoutPage } from './app.po';

describe('angular-tryout App', () => {
  let page: AngularTryoutPage;

  beforeEach(() => {
    page = new AngularTryoutPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
