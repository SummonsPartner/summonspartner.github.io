const myDocument = document.querySelector.bind(document);

const howItWorksContent = [
    {id: 1, name: "NYS Penal Law", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "},
    {id: 2, name: "NYPD Patrol Guide", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "},
    {id: 3, name: "Most common TPO", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "},
    {id: 4, name: "Department Phone Book", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "}
];

const reviewItems = [
    {
        id: 1,
        rating: 5,
        text: "If you’re on patrol, you need this app. It includes all the violations needed for all the summonses, and you can save the ones you use the most for easier access. Furthermore, it has TPO narratives when are very important to have, especially for those who are just starting their career. The reference section is useful.\n" +
            "You can have your rdo calendar, pay day, and vacation picks all within the same app too. My most favorite, is definitely the OT calculator, this app makes it very easy to keep track of your ot in a very organized manner.",
        avatarLink: "./user_avatar1.jpg"
    },
    {
        id: 2,
        rating: 5,
        text: "I have been using this app for over half a year and I can honestly say that this app has everything you need when you are on patrol. Whether is looking up violation codes or how to write a story that spells out the crime, it has everything you need. The overtime add on is worth the extra money. It is very easy to use and has everything you need to stay on top of your money.\n" +
            "This app is very user friendly and there are no glitches whatsoever. The creator works hard to constantly update and make changes.",
        avatarLink: "./user_avatar2.png"
    }
]

const featuresItemsContent = [
    {
        id: 1,
        name: "RDO Calendar", 
        description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime ",
        imageLink: "./mobile_screen_rdo_calendar.png"
    },
    {
        id: 2,
        name: "Overtime Calculator", 
        description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime ",
        imageLink: "./mobile_screen_overtime_calculator.png"
    },
    {
        id: 3,
        name: "Overtime History", 
        description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime ",
        imageLink: "./mobile_screen_overtime_history.png"
    }
];

const helpItemsData = [
    {
        id: 1, 
        header: 'Do I need to purchase the app again on the Apple App Store if I bought it on Google Play?',
        details: `If you originally purchased the app on Google Play, it’s important to note that the Apple App 
        Store and Google Play are entirely separate platforms. This means that, unfortunately, you will need to make 
        a separate purchase if you wish to use the app on an iOS device via the Apple App Store, and vice versa. 
        Cross-platform payments or shared purchases are not supported by Apple or Google.`
    },
    {
        id: 2, 
        header: 'What is the cost of your application?',
        details: `We provide two choices for our application. You can opt for a yearly subscription priced at $9.99, 
        which grants access to all features. Alternatively, there is a one-time payment of $49.99, which unlocks 
        both the current and any future features permanently.`
    },
    {
        id: 3, 
        header: 'Is there a free trial version available?',
        details: `Yes, you can enjoy a free 30-day trial when you subscribe. You can cancel anytime if you're not 
        satisfied with our app.`
    },
    {
        id: 4, 
        header: 'What features does your app offer?',
        details: `Our app is an all-in-one solution for your patrol needs. It includes features like reference 
        guide to Summonses, Precinct Maps, TPO guide, RDO Calendar, Overtime Calculator, and the complete Penal Law. 
        We're continually working to add even more valuable features.`
    },
    {
        id: 5, 
        header: 'I have an idea or a problem. How can I get in touch with someone to discuss it?',
        details: `We're committed to providing you with a seamless experience. We thrive on your valuable input and 
        are eager to hear your suggestions. Don't hesitate to connect with us right from the app settings, or drop 
        us an email at summonspartner@gmail.com. Your feedback helps us keep the app at its best!`
    },
    {
        id: 6, 
        header: 'When will I be charged for my subscription?',
        details: `You will be charged at the end the trial, unless you cancel your subscription.`
    },
    {
        id: 7, 
        header: 'How do I cancel my subscription?',
        details: 'Cancel at any time from the Settings tab and then the Manage Subscription section.' 
    },
    {
        id: 8, 
        header: 'Will my subscription renew automatically?',
        details: `Yes, subscriptions automatically renews unless cancelled.`
    },
    {
        id: 9,
        header: 'Are the new features available for all devices?',
        details: `Due to a higher level of interest and demand on the iOS platform, it often receives priority for 
        updates and new features. However, we still aim to support and improve the Android experience. Please note 
        that while we aim to bring updates to Android devices, it may take some time for these updates to become 
        available.`
    },
    {
        id: 10,
        header: 'Can I get a refund?',
        details: `Since payments are handled by Apple, all refunds are also handled by them. You need to contact 
        Apple's support within 14 days of your purchase.`
    },
];

const getAppLinksItems = [
    {
        id: 1,
        redirectLink: "https://apps.apple.com/app/summons-partner/id1329409724",
        imageLink: "./assets/images/app_store_link.png"
    },
    {
        id: 2,
        redirectLink: "https://play.google.com/store/apps/details?id=com.summon.summons",
        imageLink: "./assets/images/google_play_link.png"
    },
];

const loadHowItWorks = () => {
    howItWorksContent.forEach(el => {
        myDocument('.App-howitworks-items-container').insertAdjacentHTML('beforeend', `
            <div class="App-howitworks-about-item">
                <div class="App-icon-wrapper back-light-blue">
                <img src="./assets/images/calendar.png" class="App-icon"/>
                </div>
                <div class="App-howitworks-about-item-name color-dark-blue">${el.name}</div>
                <div class="description-text color-night-blue">${el.description}</div>
            </div>
        `);
    });
}

const loadFeatures = () => {
    featuresItemsContent.forEach(el => {
        myDocument('.App-features-items-container').insertAdjacentHTML('beforeend', `
            <div class="App-features-item">
                <div class="App-features-item-main-info">
                    <div class="App-icon-wrapper back-orange">
                        <img src="./assets/images/calendar.png" class="App-icon"/>
                    </div>
                    <div class="App-features-item-name color-dark-blue">${el.name}</div>
                    <div class="description-text color-night-blue">${el.description}</div>
                </div>
                <div class="App-features-item-image-wrapper">
                    <div class="App-features-item-mobile-screen-outer-container">
                        <div class="App-features-item-mobile-screen-inner-container">
                            <div class="App-mobile-screen-mask"></div>
                            <img class="App-mobile-screen-image" src="./assets/images/${el.imageLink}" alt="Mobile screen"/>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}

const loadRewiews = () => {
    reviewItems.forEach(el => {
        const stars = [];
        for (let i = 0; i < el.rating; i++) {
            stars.push('<img src="./assets/images/rating_star.png" class="App-review-rating-star"/>');
        }

        myDocument('.App-reviews-content').insertAdjacentHTML('beforeend', `
            <div class="App-review-item">
                <div class="App-review-rating-container back-orange">
                    ${stars.join(' ')}
                </div>
                <div class="App-review-text-container">
                    <div class="App-review-text description-text color-night-blue">${el.text}</div>
                    <div class="App-review-text-container-corner"></div>
                    <div class="App-review-text-container-corner-triangle"></div>
                </div>
                <div class="App-review-avatar-wrapper">
                    <img class="App-review-avatar" src="./assets/images/${el.avatarLink}"/>
                </div>
            </div>
        `);
    });
}

const loadHelpItems = () => {
    helpItemsData.forEach(el => {
        myDocument('.App-help-view').insertAdjacentHTML('beforeend', `
            <div class="App-help-item color-black">
            <div class="App-help-item-header">
                <div class="App-help-item-header-text">
                    ${ el.header }
                </div>
                <div>
                    <img id="App-help-item-button-${el.id}" class="App-help-item-button">
                </div>
            </div>
            <div id="App-help-item-details-${el.id}" class="App-help-item-details invisible">
                ${ el.details }
            </div>
        </div> 
        `);

        myDocument(`#App-help-item-button-${el.id}`).addEventListener('click', () => {
            myDocument(`#App-help-item-button-${el.id}`).classList.toggle('close-button');
            myDocument(`#App-help-item-details-${el.id}`).classList.toggle('invisible');
        });
    });
}

const loadGetAppItems = () => {
    getAppLinksItems.forEach(el => {
        myDocument('.App-start-work-get-app-links-container').insertAdjacentHTML('beforeend', `
            <a href="${el.redirectLink}" target="_blank" class="App-start-work-get-app-link-container">
                <img alt="app-link" class="App-start-work-get-app-link-image" src="${el.imageLink}">
            </a>  
        `);
    });
}

const openBurgerMenu = () => {
    myDocument('.App-content-area').classList.add('invisible');
    myDocument('.App-header-overlay').classList.remove('invisible');
    myDocument('.burger-menu-items').classList.remove('invisible');
    myDocument('.burger-menu-button').classList.add('invisible');
    myDocument('.close-menu-button').classList.remove('invisible');
}

const closeBurgerMenu = () => {    
    myDocument('.App-content-area').classList.remove('invisible');
    myDocument('.App-header-overlay').classList.add('invisible');
    myDocument('.burger-menu-items').classList.add('invisible');
    myDocument('.burger-menu-button').classList.remove('invisible');
    myDocument('.close-menu-button').classList.add('invisible');
}

const addBurgerMenuListeners = () => {    
    document.querySelectorAll('.burger-menu-item').forEach(el => {        
        el.addEventListener('click', closeBurgerMenu);
    });
}

const addButtonListeners = () => {
    myDocument('.burger-menu-button').addEventListener('click', openBurgerMenu);
    myDocument('.close-menu-button').addEventListener('click', closeBurgerMenu);
}

window.addEventListener('load', () => {
    loadHowItWorks();
    loadFeatures();
    loadRewiews();
    loadHelpItems();
    loadGetAppItems();
    addBurgerMenuListeners();
    addButtonListeners();
}); 


