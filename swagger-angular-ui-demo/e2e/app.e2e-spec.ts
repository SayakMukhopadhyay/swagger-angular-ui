import { SwaggerAngularUiDemoPage } from './app.po';

describe('swagger-angular-ui-demo App', () => {
  let page: SwaggerAngularUiDemoPage;

  beforeEach(() => {
    page = new SwaggerAngularUiDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
