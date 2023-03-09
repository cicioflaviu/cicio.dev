module.exports = {
    siteMetadata: {
        description: "Cicio's Personal Page",
        locale: "en",
        title: "Flaviu Cicio",
        formspreeEndpoint: "https://formspree.io/f/xyyajagk"
    },
    plugins: [
        {
            resolve: "@wkocjan/gatsby-theme-intro",
            options: {
                basePath: "/",
                contentPath: "content/",
                theme: "blue",
                showThemeLogo: false,
            },
        },
        // {
        //     resolve: 'gatsby-plugin-manifest',
        //     options: {
        //         icon: 'static/favicon.png',
        //     },
        // },
    ],
}