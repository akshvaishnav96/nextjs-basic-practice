

/** @type {import('next').NextConfig} */
const nextConfig = {


    images: {
        // remotePatterns: ['encrypted-tbn0.gstatic.com', 'i.ibb.co', 'i.imgur.com'],
        dangerouslyAllowSVG: true,
     
        remotePatterns: [
            {
                // protocol: 'https',  
                // port: '',
                // pathname: '/my-bucket/**',
                hostname: 'encrypted-tbn0.gstatic.com'
            },
            {
                hostname: 'i.ibb.co',
            }, {
                hostname: 'i.imgur.com'
            }, {
                hostname: "w3.org"
            }, {
                hostname: "images.unsplash.com"
            },{
                hostname:"tailwindui.com"
            },
            {
                hostname:"images.pexels.com"
            }
        ],

    },
};




export default nextConfig;
