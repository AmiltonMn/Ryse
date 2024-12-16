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

        },
        {
          source: "/home",
          destination: "/home"
        },
        {
          source: "/forum",
          destination: "/forum"
        }, 
        {
          source: "/chats",
          destination: "/chats"
        },
        {
          source: "/chat",
          destination: "/chat"
        },
        {
          source: "/groups",
          destination: "/groups"
        },
        {
          source: "/ideas",
          destination: "/ideas"
        },
        {
          source: "/profile",
          destination: "/profile"
        },
        {
          source: "/question",
          destination: "/question"
        },
        {
          source: "/groupchat",
          destination: "/groupchat"
        },
        {
          source: "/hardSkills",
          destination: "/hardSkills"
        },
        {
          source: "/events",
          destination: "/events"
        },
        {
          source: "/news",
          destination: "/news"
        },

      ]
  }
};

export default nextConfig;