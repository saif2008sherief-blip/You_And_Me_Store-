# YOU AND ME STORE — starter storefront

A responsive Arabic RTL Next.js storefront concept with a lightweight interactive Three.js gift scene, Framer Motion transitions, product filtering/search, favorites, cart persistence, gift finder UI, and WhatsApp order-message flow.

## Run locally
1. Install Node.js 18.17+.
2. In this folder run `npm install`.
3. Run `npm run dev` and open `http://localhost:3000`.

## Before publishing
- Edit `lib/config.ts` to add the store's real WhatsApp number, exact address, product names, real prices, product descriptions, categories and real photos.
- Product prices are intentionally set to `0` (displayed as “السعر يُضاف قريبًا”) so no invented prices are shown.
- Replace the demo Unsplash images with images of the actual products.
- The current gift finder is a UI prototype; connect recommendation rules to real catalogue attributes before production.
- Add payment/shipping integrations and real policies only after the store owner confirms them.

## Main stack
Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, Three.js, React Three Fiber, Drei, Lucide.
