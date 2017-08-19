import { MyHomeServerPage } from './app.po';

describe('my-home-server App', () => {
  let page: MyHomeServerPage;

  beforeEach(() => {
    page = new MyHomeServerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
