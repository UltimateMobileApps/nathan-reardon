// JSON-LD Structured Data for SEO
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nathan Reardon',
  description: 'American inventor, entrepreneur, and strategist with 34 patents filed and over 120 patents in development',
  image: 'https://nathanreardon.com/new-nathan.png',
  jobTitle: ['Inventor', 'Entrepreneur', 'Author'],
  url: 'https://nathanreardon.com',
  sameAs: [
    'https://twitter.com/nathanreardon',
    'https://www.linkedin.com/in/nathanreardon',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: undefined, // Add if available
    contactType: 'General',
    email: 'nathan@membershipauto.com',
  },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nathan Reardon',
  description: 'Personal portfolio of inventor Nathan Reardon showcasing patents and innovations',
  url: 'https://nathanreardon.com',
  logo: 'https://nathanreardon.com/og-image.png',
  sameAs: [
    'https://twitter.com/nathanreardon',
    'https://www.linkedin.com/in/nathanreardon',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: undefined, // Add if available
    contactType: 'General',
    email: 'nathan@membershipauto.com',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Detroit',
    addressRegion: 'ME',
    postalCode: '04929',
    addressCountry: 'US',
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const patentSchema = (patent: {
  title: string;
  description: string;
  category: string;
  image: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: patent.title,
  description: patent.description,
  image: `https://nathanreardon.com${patent.image}`,
  url: patent.url,
  creator: {
    '@type': 'Person',
    name: 'Nathan Reardon',
  },
});
