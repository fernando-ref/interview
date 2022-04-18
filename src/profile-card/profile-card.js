

    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            .profile-card {
                border: 1px solid #e1e3e1;
                border-radius: 32px;
                box-shadow: 0px 1rem 1.5rem rgb(0 0 0 / 50%);
                color: #333;
                font-family: "Trebuchet MS";
                font-size: 14px;
                height: 600px;
                min-height: 600px;
                min-width: 360px;
                margin: 0 auto;
                overflow: hidden;
                padding-bottom: 48px;
                position: relative;
                width: 420px;
            }

            .profile-card__background {
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                height: 35%;
                width: 100%;
            }

            .profile-card__photo {
                border-radius: 50%;
                display: block;
                margin: 0 auto;
                margin-top: -120px;
                width: 50%;
            }

            .profile-card__principal-info {
                font-size: 22px;
                font-weight: 600;
                margin: 16px auto;
                text-align: center;
            }

            .profile-card__principal-info p {
                color: #4d4d4d;
                font-size: 16px;
                font-weight: 400;
                margin: 8px 0 0;
            }

            .profile-card__contact-info {
                align-items: center;
                display: flex;
                justify-content: space-between;
                margin: 32px 48px;
            }

            .profile-card__contact-info>li {
                margin: 12px 0;
            }

            .profile-card__overview {
                line-height: 1.4;
                margin: 32px 48px;
                max-height: 120px;
                overflow: scroll;
            }

            .profile-card__social-networks {
                display: flex;
                justify-content: space-between;
                margin: 32px 48px;
            }

            .profile-card__social-networks>a {
                width: 8%;
            }

            .profile-card__social-networks>a>img {
                width: 100%;
            }

            .link {
                color: #1565c0;
            }

            .link:hover {
                color: #1a237e;
                text-decoration: none;
            }
        </style>

    <div class="profile-card">
        <div class="profile-card__background background-image"></div>
        <div>
            <img src="" alt="Profile photo" class="profile-card__photo photo">
            <div class="profile-card__principal-info">
                <span class="fullname"></span>
                <p class="username"></p>
            </div>
            <div class="profile-card__contact-info">
                <div>&phone; <a href="#" class="link phone"></a></div>
                <div>&commat; <a href="#" class="link email"></a></div>
            </div>
            <div class="profile-card__overview overview"></div>
            <div class="profile-card__social-networks">
                <a href="#" class="facebook-profile" target="_blank">
                    <img
                        src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Facebook_2_glyph_svg-256.png">
                </a>
                <a href="#" class="twitter-profile" target="_blank">
                    <img
                        src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Twitter_glyph_svg-256.png">
                </a>
                <a href="#" class="instagram-profile" target="_blank">
                    <img
                        src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/600/Instagram_glyph_svg-256.png">
                </a>
                <a href="#" class="youtube-profile" target="_blank">
                    <img
                        src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-256.png">
                </a>
            </div>
        </div>
    </div>
        `;

    class ProfileCard extends HTMLElement {


        static get observedAttributes() {
            return [
                'fullname',
                'username',
                'phone',
                'email',
                'overview',
                'facebook-profile',
                'twitter-profile',
                'instagram-profile',
                'youtube-profile',
                'background-image',
                'photo'];
        }
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

        connectedCallback() {
        }

        attributeChangedCallback(attr, oldValue, newValue) {
            // Update only the minimun required shadow DOM to reflect the changes
            switch (attr) {
                case 'fullname':
                    this.shadowRoot.querySelector('.fullname').innerHTML = newValue;
                    break;
                case 'username':
                    this.shadowRoot.querySelector('.username').innerHTML = newValue;
                    break;
                case 'phone':
                    this.shadowRoot.querySelector('.phone').innerHTML = newValue;
                    this.shadowRoot.querySelector('.username').href = 'tel:' + newValue;
                    break;
                case 'email':
                    this.shadowRoot.querySelector('.email').innerHTML = newValue;
                    this.shadowRoot.querySelector('.email').href = 'mailto:' + newValue;
                    break;
                case 'overview':
                    this.shadowRoot.querySelector('.overview').innerHTML = newValue;
                    break;
                case 'facebook-profile':
                    this.shadowRoot.querySelector('.facebook-profile').href = newValue;
                    break;
                case 'twitter-profile':
                    this.shadowRoot.querySelector('.twitter-profile').href = newValue;
                    break;
                case 'instagram-profile':
                    this.shadowRoot.querySelector('.instagram-profile').href = newValue;
                    break;
                case 'youtube-profile':
                    this.shadowRoot.querySelector('.youtube-profile').href = newValue;
                    break;
                case 'background-image':
                    this.shadowRoot.querySelector('.background-image').style.backgroundImage = `url(${newValue})`;
                    break;
                case 'photo':
                    this.shadowRoot.querySelector('.photo').src = newValue;
                    break;
            }

        }

    }

    window.customElements.define('profile-card', ProfileCard);


module.exports = ProfileCard;