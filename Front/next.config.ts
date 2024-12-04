/** @type {import('next').NextConfig} */
const nextConfig = {

  rewrites: () => {
      return [
          {
              source: "/about",
              destination: "/"

          }
      ]
  }
};

export default nextConfig;