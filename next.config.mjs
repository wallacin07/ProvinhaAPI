/** @type {import('next').NextConfig} */
const nextConfig = {}

rewrites: () => {
    return [
            {
                source:"/",
                destination:"/home",
                },

            {
                source:"/imc",
                destination:"/imc",
                },

            {
                source:"/media",
                estination:"/media",
                },
        ]
    }



export default nextConfig;
