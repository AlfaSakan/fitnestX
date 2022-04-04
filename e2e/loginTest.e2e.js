import { by, element, expect, waitFor } from 'detox';

describe('testing login until logout', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('login flow', async () => {
    // await expect(element(by.text(/everybody can train/i))).toBeVisible();
    await expect(element(by.text('Everybody Can Train'))).toBeVisible();

    await waitFor(element(by.text('Get Started')))
      .toBeVisible()
      .withTimeout(2000);

    await element(by.text('Get Started')).tap();

    await element(by.id('button next1')).tap();
    await element(by.id('button next2')).tap();
    await element(by.id('button next3')).tap();
    await element(by.id('button next4')).tap();

    await element(by.text('Login')).tap();
    await element(by.id('email')).typeText('testdetox@gmail.com');
    await element(by.id('password')).typeText('Qwerty123');
    await element(by.text('Login')).tap();
  });

  it('logout flow', async () => {
    await expect(element(by.id('profile tab'))).toBeVisible();

    await element(by.id('profile tab')).tap();
    await element(by.id('scroll profile')).scrollTo('bottom');
    await element(by.text('Logout')).tap();

    await expect(element(by.text('Login'))).toBeVisible();
  });
});
