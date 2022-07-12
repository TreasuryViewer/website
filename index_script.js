/*!
* Start Bootstrap - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
* Copyright 2013-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/StartBootstrap/${packageJSON.name}/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {
    let android_url = "android.com";
    let apple_url = "https://apps.apple.com/us/app/treasuryviewer/id1632859091";

    let app_store_url;
    const userAgent = navigator.userAgent;
    if(/iPad|iPhone|iPod/i.test(userAgent)) app_store_url=apple_url;
    else app_store_url=android_url;

    // document.getElementById("download-button").href = app_store_url;
    document.getElementById("download-button").href = apple_url;

    for (let e of document.getElementsByClassName('apple-link'))
        e.href = apple_url;
    for (let e of document.getElementsByClassName('android-link'))
        e.href = android_url;

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

