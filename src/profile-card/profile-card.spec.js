/**
 * @jest-environment jsdom
 */

var msg = require('./profile-card.js');


describe('profile-card component', () => {

    test('Create empty component', () => {
        const element = document.createElement('profile-card');
        expect(element).not.toBeNull();
    });

    test('Config card attrs', () => {

        const element = document.createElement('profile-card');

        element.setAttribute('fullname', 'Full name test value');
        element.setAttribute('username', 'Username test value');
        element.setAttribute('phone', '55 5555 5555');
        element.setAttribute('email', 'email_test@email.com');
        element.setAttribute('overview', 'Lorem ipsum dolor sit amet.');
        element.setAttribute('facebook-profile', 'https://fb.com');
        element.setAttribute('twitter-profile', 'https://tw.com');
        element.setAttribute('instagram-profile', 'https://ins.com');
        element.setAttribute('youtube-profile', 'https://yt.com');
        element.setAttribute('photo', 'https://photo.com');
        element.setAttribute('background-image', 'https://background.com');

        expect(element.shadowRoot.querySelector('.fullname').innerHTML ).toBe('Full name test value');
        expect(element.shadowRoot.querySelector('.username').innerHTML ).toBe('Username test value');
        expect(element.shadowRoot.querySelector('.phone').innerHTML ).toBe('55 5555 5555');
        expect(element.shadowRoot.querySelector('.email').innerHTML ).toBe('email_test@email.com');
        expect(element.shadowRoot.querySelector('.overview').innerHTML ).toBe('Lorem ipsum dolor sit amet.');
        expect(element.shadowRoot.querySelector('.facebook-profile').href ).toBe('https://fb.com/');
        expect(element.shadowRoot.querySelector('.twitter-profile').href ).toBe('https://tw.com/');
        expect(element.shadowRoot.querySelector('.instagram-profile').href ).toBe('https://ins.com/');
        expect(element.shadowRoot.querySelector('.youtube-profile').href ).toBe('https://yt.com/');
        expect(element.shadowRoot.querySelector('.photo').src ).toBe('https://photo.com/');
        expect(element.shadowRoot.querySelector('.background-image').style.backgroundImage).toBe('url(https://background.com)');

    });
})