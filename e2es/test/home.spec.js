describe('Home screen tests', () => {
  it('should have a component', () => {
    $('~homeContainer').waitForDisplayed(1000);

    const element = $('~homeContainer');
    expect(element.getText()).toBe('app.tsx');
  });
});
