/** Edit store details and all catalogue content here. Unknown business facts intentionally remain placeholders. */
export const STORE = {
  name: 'YOU AND ME STORE',
  city: 'شبين الكوم، المنوفية، مصر',
  address: 'أضف عنوان المتجر هنا',
  whatsapp: '201XXXXXXXXX', // Replace with international number, digits only
  currency: 'EGP',
  announcement: 'تفاصيل الشحن والاستبدال تُضاف هنا',
  categories: [
    { id: 'gifts', name: 'هدايا', note: 'لحظات تستحق أن تُهدى', icon: '🎁' },
    { id: 'accessories', name: 'إكسسوارات', note: 'تفاصيل تكمل إطلالتك', icon: '✦' },
    { id: 'for-her', name: 'لها', note: 'اختيارات بطابع خاص', icon: '♡' },
    { id: 'for-them', name: 'لهم', note: 'هدية تقول الكثير', icon: '⌁' },
  ],
  products: [
    { id: 'gift-box', name: 'صندوق هدية مميز', category: 'gifts', price: 0, oldPrice: null, badge: 'اختيارك المميز', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=85', description: 'أضف وصف المنتج الحقيقي هنا.', featured: true, occasion: 'birthday' },
    { id: 'jewelry', name: 'إكسسوار أنيق', category: 'accessories', price: 0, oldPrice: null, badge: '', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85', description: 'أضف وصف المنتج الحقيقي هنا.', featured: true, occasion: 'just-because' },
    { id: 'flowers', name: 'هدية بتفاصيل ناعمة', category: 'gifts', price: 0, oldPrice: null, badge: 'هدية', image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85', description: 'أضف وصف المنتج الحقيقي هنا.', featured: true, occasion: 'anniversary' },
    { id: 'bag', name: 'قطعة مميزة', category: 'for-her', price: 0, oldPrice: null, badge: '', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85', description: 'أضف وصف المنتج الحقيقي هنا.', featured: true, occasion: 'just-because' },
  ]
} as const;
