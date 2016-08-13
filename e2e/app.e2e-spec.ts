import { Fc2LiveViewer2Page } from './app.po';

describe('fc2-live-viewer2 App', function() {
  let page: Fc2LiveViewer2Page;

  beforeEach(() => {
    page = new Fc2LiveViewer2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
