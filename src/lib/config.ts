// Site configuration using environment variables
export const siteConfig = {
    // Site URL
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kyleforkey.com',

    // Social Links
    social: {
        twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://x.com/theesehands',
        github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/xforkey',
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/xforkey/',
        email: process.env.NEXT_PUBLIC_EMAIL?.trim() || 'xforkey@gmail.com',
    },

    // Author Information
    author: {
        name: 'Kyle Forkey',
        email: process.env.NEXT_PUBLIC_EMAIL?.trim() || 'xforkey@gmail.com',
        location: 'Austin, Texas',
    },

    // Site Metadata
    meta: {
        title: 'Kyle Forkey',
        description: 'Engineer, builder, and lifelong systems thinker.',
        tagline: 'I design and build high-performance web applications that balance elegance, efficiency, and real-world utility.',
    }
} as const

// Helper function to get email without mailto:
export const getEmailAddress = () => siteConfig.social.email
export const getMailtoLink = () => `mailto:${siteConfig.social.email}`