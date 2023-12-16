/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "st.kp.yandex.net",
      },
      {
        protocol: "https",
        hostname: "shikimori.one",
      },
      {
        protocol: "https",
        hostname: "i.mydramalist.com",
      },
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
      },
    ],
  },
};

module.exports = nextConfig;
