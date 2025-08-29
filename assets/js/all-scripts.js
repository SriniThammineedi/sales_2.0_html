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
  const collapsibleContent = document.getElementById("collapsible-content");
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
                
            <img src="${ad.image}" alt="Ad image for ${
          client.name
        }" class="ad-image">
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
    // adsPreviewContainer.innerHTML = `<h2>Ads Preview</h2>${adCardsHTML}`;
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
$(".dropdown-item").click(function (event) {
  event.preventDefault();
  const selectedText = $(this).text();

  $(this).closest(".dropdown").find(".dropdown-toggle").text(selectedText);
});

// Scroll-to-Top Button with Progress Indicator
$(document).ready(function () {
  "use strict";

  //Scroll back to top
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
});

// Header Notifications Menu
$(document).ready(function () {
  $(".head-notifications").click(function (e) {
    e.stopPropagation();
    $("#showNotifications").toggleClass("active");
  });

  $("#showNotifications").click(function (e) {
    e.stopPropagation();
  });

  $(document).click(function () {
    $("#showNotifications").removeClass("active");
  });

  $("#closeButton").click(function () {
    $("#showNotifications").removeClass("active");
  });
});

// Header Profile Menu
$(document).ready(function () {
  $(".user-profile").click(function (e) {
    e.stopPropagation();
    $("#showProfileMenu").toggleClass("active");
  });

  $("#showProfileMenu").click(function (e) {
    e.stopPropagation();
  });

  $(document).click(function () {
    $("#showProfileMenu").removeClass("active");
  });

  $("#closeBtn").click(function () {
    $("#showProfileMenu").removeClass("active");
  });
});

// Datepicker Function
$(function () {
  $(".datepicker").datepicker();
});

// Sticky Date Notifier on Data Table
document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.getElementById("tableContainer");
  const notifier = document.getElementById("dateNotifier");
  const threshold = 50;
  let isVisible = false;

  wrapper.addEventListener("scroll", function () {
    const st = this.scrollTop;

    if (st >= threshold && !isVisible) {
      notifier.classList.add("visible");
      notifier.style.position = "sticky";
      isVisible = true;
    } else if (st < threshold && isVisible) {
      notifier.classList.remove("visible");
      isVisible = false;
    }
  });
});

// Show preview pane based on Table Row
$(document).ready(function () {
  $(".previewPane").removeClass("active");

  $("#dboardBrands tbody tr").on("click", function () {
    const clientName = $(this)
      .data("client")
      .toLowerCase()
      .replace(/\s+/g, "-");

    $(".previewPane").addClass("active");
    $(".preview-cards").removeClass("active");
    $("#" + clientName).addClass("active");
  });

  $(".closePreview").on("click", function () {
    $(".previewPane").removeClass("active");
    $(".preview-cards").removeClass("active");
  });
});

// Show preview pane based on Daywise Card
$(document).ready(function () {
  $(".previewPane").removeClass("active");

  $("#dayWiseStats .dayCards .brandCard").on("click", function () {
    const clientName = $(this)
      .data("client")
      .toLowerCase()
      .replace(/\s+/g, "-");

    $(".previewPane").addClass("active");
    $(".preview-cards").removeClass("active");
    $("#" + clientName).addClass("active");
  });

  $(".closePreview").on("click", function () {
    $(".previewPane").removeClass("active");
    $(".preview-cards").removeClass("active");
  });
});

// Initialize Swiper Slider for Reminders
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Add active class to buttons
document.querySelectorAll(".usr-list button").forEach((button) => {
  button.addEventListener("click", () => {
    const isActive = button.classList.toggle("active");

    const existingIcon = button.querySelector("i");
    if (existingIcon) existingIcon.remove();

    if (isActive) {
      const icon = document.createElement("i");
      button.appendChild(icon);
    }
  });
});

// OnClick toggle div from right
const openBtn = document.getElementById("add-poc");
const closeModal = document.getElementById("closeBtn");
const rightPanel = document.getElementById("sidePanel");

openBtn.addEventListener("click", () => {
  rightPanel.classList.add("active");
});

rightPanel.addEventListener("click", (e) => e.stopPropagation());
closeModal.addEventListener("click", (e) => {
  e.stopPropagation();
  rightPanel.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (
    rightPanel.classList.contains("active") &&
    !rightPanel.contains(e.target) &&
    !openBtn.contains(e.target)
  ) {
    rightPanel.classList.remove("active");
  }
});

// Toggle Modal for Client Details
const parentDivs = document.querySelectorAll(".clientDetails");
const contentDiv = document.getElementById("toggleContent");
const closeBtn = document.getElementById("close-modal");

parentDivs.forEach((parent) => {
  parent.addEventListener("click", function (e) {
    if (e.target.closest(".column.int-actions")) {
      return;
    }

    parent.after(contentDiv);

    if (
      contentDiv.style.display === "none" ||
      contentDiv.style.display === ""
    ) {
      contentDiv.style.display = "flex";
      contentDiv.classList.add("show");
    } else {
      contentDiv.style.display = "none";
      contentDiv.classList.remove("show");
    }
  });
});