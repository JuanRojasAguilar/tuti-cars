/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['es','en','fr'],
    defaultLocale: 'es',
  },
  images: {
    domains: ["www.gullwingmotorcars.com", "cdn.motor1.com"],
  }
};

export default nextConfig;
