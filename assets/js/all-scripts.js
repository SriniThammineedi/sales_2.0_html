// Toggle SideBar/Left Menu

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("sidebarToggle").addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle("collapsed");
  });
});


// Swith Theme
document.addEventListener("DOMContentLoaded", function () {
    const themeSwitcher = document.getElementById("theme-switcher");
    themeSwitcher.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

// COLLAPSIBLE STATS SECTION ---
    const collapseToggle = document.getElementById("collapse-toggle");
    const collapsibleContent = document.getElementById(
        "collapsible-content"
    );
    collapseToggle.addEventListener("click", () => {
        collapsibleContent.classList.toggle("collapsed");
        collapseToggle.classList.toggle("collapsed");
    });

// SIDEBAR NAVIGATION ---
    const navLinks = document.querySelectorAll("#sidebar-nav .nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
        e.preventDefault();
        navLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
        });
    });

// DATA TABLE & ADS PREVIEW ---
    const adData = {
        canara: {
        name: "Canara Bank",
        website: "canarahealingtouch.in",
        logo: "/assets/images/dummy.jpg",
        ads: [
            {
            format: "Half Page Ad",
            value: "2.24 L",
            image: "/assets/images/dummy.jpg",
            },
            {
            format: "Banner Ad",
            value: "1.50 L",
            image: "/assets/images/dummy.jpg",
            },
        ],
        },
        tvs: {
        name: "TVS Motors",
        website: "tvsmotor.com",
        logo: "/assets/images/dummy.jpg",
        ads: [
            {
            format: "Full Page Ad",
            value: "108.02 L",
            image: "/assets/images/dummy.jpg",
            },
        ],
        },
        bhima: {
        name: "Bhima Ktk",
        website: "bhimajewellery.com",
        logo: "/assets/images/dummy.jpg",
        ads: [
            {
            format: "Small Banner",
            value: "1.06 L",
            image: "/assets/images/dummy.jpg",
            },
        ],
        },
        ather: {
        name: "Ather Motors",
        website: "atherenergy.com",
        logo: "/assets/images/dummy.jpg",
        ads: [
            {
            format: "Video Ad",
            value: "7.00 L",
            image: "/assets/images/dummy.jpg",
            },
        ],
        },
        amazon: {
        name: "Amazon",
        website: "amazon.in",
        logo: "/assets/images/dummy.jpg",
        ads: [
            {
            format: "Carousel Ad",
            value: "10.28 L",
            image: "/assets/images/dummy.jpg",
            },
        ],
        },
    };
    const tableRows = document.querySelectorAll("#data-table .table-row");
    const adsPreviewContainer = document.getElementById("ads-preview");

    function updateAdsPreview(clientKey) {
        const client = adData[clientKey];
        if (!client) {
        adsPreviewContainer.innerHTML =
            " < h2 > Ads Preview < /h2> < p > No data available. < /p>";
        return;
        }
        let adCardsHTML = client.ads
        .map(
            (ad) => `
            
    <div class="ad-card">
                ${
                    ad.format === "Half Page Ad"
                    ? `
        <div class="ad-card-header">
            <img src="${client.logo}" alt="${client.name} Logo">
                <div class="ad-title">${client.name}
                    <span>${client.website}</span>
                </div>
            </div>`
                    : ""
                }
                
            <img src="${ad.image}" alt="Ad image for ${client.name}" class="ad-image">
                <div class="ad-card-footer">
                    <p>
                        <span class="label">Ad Format: </span>
                        <span class="value">${ad.format}</span>
                    </p>
                    <p>
                        <span class="label">Estimated Value: </span>
                        <span class="value">${ad.value}</span>
                    </p>
                </div>
            </div>`
        )
        .join("");
        adsPreviewContainer.innerHTML = `
            <h2>Ads Preview</h2>${adCardsHTML}`;
    }
    tableRows.forEach((row) => {
        row.addEventListener("click", function () {
        tableRows.forEach((r) => r.classList.remove("selected"));
        this.classList.add("selected");
        const clientKey = this.dataset.client;
        updateAdsPreview(clientKey);
        });
    });
    updateAdsPreview("canara");
    });


// Dropdown Menu ---
// Select DropDown Item onClick
    var aos = '';
    $('.dropdown-item').click(function (event) {
        event.preventDefault();
        aos = $(this).text();
        $('.dropdown-toggle').text(aos);
    })

// Scroll-to-Top Button with Progress Indicator
    $(document).ready(function(){"use strict";

    //Scroll back to top
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});


// Header Notifications Menu
$(document).ready(function () {
  $('.head-notifications').click(function (e) {
    e.stopPropagation();
    $('#showNotifications').toggleClass('active');
  });

  $('#showNotifications').click(function (e) {
    e.stopPropagation();
  });

  $(document).click(function () {
    $('#showNotifications').removeClass('active');
  });

  $('#closeButton').click(function () {
    $('#showNotifications').removeClass('active');
  });
});

// Header Profile Menu
$(document).ready(function () {
  $('.user-profile').click(function (e) {
    e.stopPropagation();
    $('#showProfileMenu').toggleClass('active');
  });

  $('#showProfileMenu').click(function (e) {
    e.stopPropagation();
  });

  $(document).click(function () {
    $('#showProfileMenu').removeClass('active');
  });

  $('#closeBtn').click(function () {
    $('#showProfileMenu').removeClass('active');
  });
});

// Datepicker Function
$(function () {
  $(".datepicker").datepicker();
});