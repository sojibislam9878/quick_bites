// /** @type {import('next').NextConfig} */
// const nextConfig = {
//      images: {
//     domains: ['i.ibb.co'],
//   },
// };



// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable image optimization to allow images from all domains
  },
};

export default nextConfig;
