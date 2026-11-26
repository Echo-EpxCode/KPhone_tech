const site = {
    // LOADER ANIMATION
    // skeleton
    // logo
    // spinner
    // none
    loader: {
        type: "none",
        text: "Loading...",
        logo: "./assets/images/hero.jpeg",
        animation: "fade",
    },
    // =====================================================
    // BUSINESS INFORMATION
    // =====================================================

    name: "KPhone Tech Center Hub",

    tagline: "We Fix. You Relax.",

    description: "Mabilis. Maayos. Mapagkatiwalaan",

    // =====================================================
    // CONTACT INFORMATION
    // =====================================================

    phone: "0999 583 7313",

    email: "charliecorrompido@gmail.com",

    address: "Matina Crossing, Davao City, Philippines",

    // =====================================================
    // SOCIAL MEDIA
    // =====================================================

    google: "https://www.google.com",

    facebook: "https://www.facebook.com/profile.php?id=61579611569519",

    tiktok: "https://www.tiktok.com/@kibatech01",

    // =====================================================
    // WEBSITE
    // =====================================================

    url: "https://example.com",

    // Float button
    floatingActions: {
        enabled: true,

        items: [
            {
                id: "foodpanda",
                label: "Foodpanda",
                url: "https://www.facebook.com/",
                enabled: false,
                color: "#D70F64",
                icon: "",
                logo: "./assets/images/Foodpanda/Foodpanda_.png",
            },
            {
                id: "grabfood",
                label: "GrabFood",
                url: "https://www.facebook.com/",
                enabled: false,
                color: "#00A859",
                icon: "",
                logo: "./assets/images/Grab/Grab_Logo_6.png",
            },
            {
                id: "phone",
                label: "Call us",
                url: "tel:09995837313",
                enabled: true,
                color: "#15803D",
                icon: "bi-telephone-fill",
                logo: "",
            },
        ],
    },
};

export default site;
