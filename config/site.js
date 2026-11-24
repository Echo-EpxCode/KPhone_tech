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

    phone: "+63 919 445 7269",

    email: "hello@example.com",

    address: "Matina Crossing, Davao City, Philippines",

    // =====================================================
    // SOCIAL MEDIA
    // =====================================================

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
                id: "messenger",
                label: "Chat with us",
                 url: "https://m.me/61579611569519",
                enabled: true,
                color: "#042249",
                icon: "",
                logo: "./assets/icons/messenger.svg",
            },
        ],
    },
};

export default site;
