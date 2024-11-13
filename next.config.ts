import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    domains: ['mi-cdn.s3.amazonaws.com'], // Agrega tu dominio aquí
  },
  reactStrictMode: true,
  swcMinify: true, // Habilita la minificación de JS con SWC
};


export default nextConfig;
