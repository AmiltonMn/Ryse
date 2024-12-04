/** @type {import('next').NextConfig} */
const nextConfig = {

  rewrites: () => {
      return [
        {
            source: "/",
            destination: "/login"

        },
        {
          source: "/cadastro",
          destination: "/register"

        }
      ]
  }
};

export default nextConfig;