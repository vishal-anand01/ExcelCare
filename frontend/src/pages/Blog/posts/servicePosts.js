const services = [
  [
    "Laundry",
    "laundry",
    "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1200&q=80",
    [
      "How to Keep Everyday Laundry Fresh for Longer",
      "A Simple Guide to Sorting Clothes Before Washing",
      "Best Way to Wash Whites Without Dulling Them",
      "How Often Should You Wash Towels and Bedsheets?",
      "Laundry Habits That Help Clothes Last Longer",
    ],
  ],
  [
    "Dry Cleaning",
    "dry-cleaning",
    "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=1200&q=80",
    [
      "When Should You Choose Dry Cleaning for Your Clothes?",
      "How Dry Cleaning Protects Delicate Fabrics",
      "Care Tips for Suits, Blazers and Occasion Wear",
      "How to Store Dry-Cleaned Clothes the Right Way",
      "Common Dry Cleaning Myths Explained",
    ],
  ],
  [
    "Ironing",
    "ironing",
    "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=80",
    [
      "How to Get a Crisp, Professional Ironing Finish",
      "The Right Ironing Temperature for Every Fabric",
      "How to Iron Shirts Without Leaving Creases",
      "Why Steam Ironing Is Better for Delicate Clothes",
      "Easy Ways to Keep Ironed Clothes Wrinkle-Free",
    ],
  ],
  [
    "Shoe Cleaning",
    "shoe-cleaning",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    [
      "How to Clean Sneakers Without Damaging Them",
      "Simple Shoe Care Tips for Every Season",
      "How to Remove Everyday Dirt From White Shoes",
      "When Professional Shoe Cleaning Makes Sense",
      "How to Store Shoes to Keep Them Looking New",
    ],
  ],
  [
    "Curtain Cleaning",
    "curtain-cleaning",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    [
      "How Often Should You Clean Curtains at Home?",
      "Why Curtain Cleaning Improves Your Indoor Air",
      "How to Care for Delicate Sheer Curtains",
      "Easy Signs Your Curtains Need Professional Cleaning",
      "How Clean Curtains Refresh Your Entire Room",
    ],
  ],
  [
    "Carpet Cleaning",
    "carpet-cleaning",
    "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1200&q=80",
    [
      "How Often Should You Get Your Carpet Cleaned?",
      "How to Remove Common Carpet Stains Safely",
      "Why Deep Carpet Cleaning Matters for Your Home",
      "Simple Tips to Keep Rugs Looking Fresh",
      "When to Call a Professional Carpet Cleaner",
    ],
  ],
];
const content = (service, title) => [
  {
    type: "p",
    text: `${title} is an important part of keeping your belongings fresh, clean and well cared for. A consistent routine helps prevent avoidable damage and makes everyday care easier.`,
  },
  {
    type: "p",
    text: `Many people only think about ${service.toLowerCase()} when a problem becomes visible. A better approach is to use simple habits that protect materials before dirt, odour or wear becomes difficult to manage.`,
  },
  { type: "h2", text: `Why ${service} Care Matters` },
  {
    type: "p",
    text: `The right method protects appearance, comfort and longevity. It also helps remove the buildup that regular surface cleaning can leave behind.`,
  },
  { type: "h2", text: "A Practical Step-by-Step Routine" },
  { type: "h3", text: "1. Check instructions first" },
  {
    type: "p",
    text: "Read care labels and product directions before using heat, water or cleaning products. Different materials can respond very differently to the same treatment.",
  },
  { type: "h3", text: "2. Treat problems early" },
  {
    type: "p",
    text: "Prompt attention gives stains, dust and odours less time to settle. Use gentle, fabric-appropriate care rather than aggressive shortcuts.",
  },
  { type: "h3", text: "3. Allow complete drying and storage" },
  {
    type: "p",
    text: "Dry and store items correctly. Good airflow and clean storage prevent stale smells, moisture-related damage and unnecessary repeat cleaning.",
  },
  { type: "h2", text: "Common Mistakes to Avoid" },
  {
    type: "p",
    text: "Avoid overusing detergent or chemicals, ignoring care labels, applying too much heat and storing items when damp. Stronger treatment is not always safer or more effective.",
  },
  { type: "h2", text: "When Professional Care Helps" },
  {
    type: "p",
    text: `Professional ${service.toLowerCase()} is useful for delicate, valuable or heavily soiled items, and whenever home care has not achieved the result you need. ExcelCare can arrange convenient doorstep support.`,
  },
];
export default services.flatMap(([service, slug, image, titles]) =>
  titles.map((title, index) => ({
    slug: `${slug}-${index + 1}`,
    title,
    excerpt: `${service} care made simple with expert guidance for cleaner, fresher and longer-lasting results.`,
    image,
    category: service.toUpperCase(),
    author: "ExcelCare Team",
    date: `September ${String(7 - index).padStart(2, "0")}, 2026`,
    body: content(service, title),
  })),
);
