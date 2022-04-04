import { by, element, expect, waitFor } from 'detox';

describe('testing register account', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('register flow', async () => {
    await expect(element(by.text('Everybody Can Train'))).toBeVisible();
    await waitFor(element(by.text('Get Started')))
      .toBeVisible()
      .withTimeout(3000);
    await element(by.text('Get Started')).tap();
    await element(by.id('button next1')).tap();
    await element(by.id('button next2')).tap();
    await element(by.id('button next3')).tap();
    await element(by.id('button next4')).tap();
    await element(by.id('first name')).typeText('Ahmad');
    await element(by.id('last name')).typeText('Alfa Sakan');
    await element(by.id('email')).typeText('alfasakan11@gmail.com');
    await element(by.id('password')).typeText('Qwerty123');
    await element(by.id('checkbox')).tap();
    await element(by.text('Register')).tap();

    await element(by.text('male')).tap();
    await element(by.text('Male')).tap();
    await element(by.id('weight')).typeText('80');
    await element(by.id('height')).typeText('180');
    await element(by.text('Next >')).tap();
  });
});
