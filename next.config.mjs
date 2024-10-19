// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['randomuser.me', 'assets.aceternity.com'], // Add the external domains here
//   },
 
// };

// export default nextConfig;


  
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['randomuser.me', 'assets.aceternity.com'], // Add the external domains here
  },
  webpack: (config) => {
    // Add rule for handling .node files
    config.module.rules.push({
      test: /\.node$/,
      use: 'file-loader',
    });

    return config; // Return updated config
  },
};

export default nextConfig;


  
