import { CrudOperationsPage } from './app.po';

describe('crud-operations App', () => {
  let page: CrudOperationsPage;

  beforeEach(() => {
    page = new CrudOperationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
