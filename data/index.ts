type Season = 'summer' | 'winter' | 'all';

interface Item {
  id: number;
  season: Season;
  quantity?: number;
  name: string;
  notes?: string;
  optional?: boolean;
}

interface ItemGroup {
  id: number;
  title: string;
  lead?: string;
  items: Item[];
}

const data: ItemGroup[] = [
  {
    id: 1,
    title: 'Sleeping',
    lead: 'A good night’s sleep is essential for a good day’s hiking.',
    items: [
      {
        id: 1,
        name: 'Tent',
        season: 'all',
      },
      {
        id: 2,
        name: 'Tent footprint',
        season: 'all',
        optional: true,
      },
      {
        id: 3,
        name: 'Sleeping Bag',
        season: 'winter',
      },
      {
        id: 4,
        name: 'Quilt',
        season: 'summer',
      },
      {
        id: 5,
        name: 'Inflatable Sleeping Pad',
        season: 'all',
      },
      {
        id: 6,
        name: 'Pillow stuff sack',
        season: 'all',
      },
    ],
  },
  {
    id: 2,
    title: 'Cooking & Hydration',
    lead: 'Gotta stay fed and watered.',
    items: [
      {
        id: 1,
        name: 'Stove',
        notes:
          'For longer, colder, or higher trips, consider a petrol stove like the MSR Dragonfly.',
        season: 'all',
      },
      {
        id: 2,
        name: 'Fuel',
        notes:
          'You can’t fly with fuel, so you’ll have to buy it at your destination.',
        season: 'all',
      },
      {
        id: 3,
        name: 'Cooking Pot(s)',
        notes:
          'Take as few pots as you can. If you only need one pot, consider a Jetboil to keep weight to a minimum.',
        season: 'all',
      },
      {
        id: 4,
        name: 'Lighters',
        quantity: 2,
        notes:
          'Take two lighters of different types. Remember you can’t fly with a butane lighter.',
        season: 'all',
      },
      {
        id: 5,
        name: 'Water Bladder',
        season: 'all',
      },
      {
        id: 6,
        name: 'Water Bottle',
        season: 'all',
      },
      {
        id: 7,
        name: 'Water Filter or Purification Tablets',
        optional: true,
        season: 'winter',
      },
      {
        id: 8,
        name: 'Water Filter or Purification Tablets',
        season: 'summer',
      },
      {
        id: 9,
        name: 'Mug',
        notes: 'Go plastic. Metal mugs burn lips.',
        season: 'all',
      },
      {
        id: 10,
        name: 'Spork',
        notes: 'Long handled sporks are the best.',
        season: 'all',
      },
      {
        id: 11,
        name: 'Insulated Food Pouch',
        optional: true,
        notes:
          'If you’re mainly eating freeze dried food, this will help with rehydration and keeping your food warm.',
        season: 'all',
      },
      {
        id: 12,
        name: 'Pot Scrubber',
        optional: true,
        season: 'all',
      },
      {
        id: 13,
        name: 'Salt and Pepper',
        season: 'all',
      },
      {
        id: 14,
        name: 'Burner Sheet',
        optional: true,
        notes:
          'If you’re going to cook inside your tent and you have a footprint, this will help you avoid setting your tent on fire.',
        season: 'all',
      },
      {
        id: 15,
        name: 'Coffee filter',
        season: 'all',
      },
    ],
  },
  {
    id: 3,
    title: 'Clothing',
    lead: 'All of the things that I need to stay warm and dry',
    items: [
      {
        id: 1,
        name: 'Walking Boots',
        season: 'all',
      },
      {
        id: 2,
        name: 'Crocs',
        season: 'summer',
      },
      {
        id: 3,
        quantity: 2,
        name: 'Walking Socks',
        season: 'all',
      },
      {
        id: 4,
        quantity: 2,
        name: 'Liner Socks',
        season: 'all',
      },
      {
        id: 5,
        quantity: 2,
        name: 'Underwear',
        season: 'all',
      },
      {
        id: 6,
        quantity: 2,
        name: 'Long sleeved base layer top',
        season: 'all',
      },
      {
        id: 7,
        quantity: 1,
        name: 'Base layer bottoms',
        season: 'all',
      },
      {
        id: 8,
        quantity: 1,
        name: 'Powerstretch leggings',
        season: 'winter',
      },
      {
        id: 9,
        quantity: 1,
        name: 'Mid layer top',
        season: 'all',
      },
      {
        id: 10,
        quantity: 1,
        name: 'Thick fleece top',
        season: 'winter',
      },
      {
        id: 11,
        quantity: 1,
        name: 'Walking trousers',
        season: 'all',
      },
      {
        id: 12,
        quantity: 1,
        name: 'Walking shorts',
        season: 'summer',
      },
      {
        id: 13,
        name: 'Thin hooded down jacket',
        season: 'all',
      },
      {
        id: 14,
        name: 'Thin synthetic puffy jacket',
        season: 'winter',
      },
      {
        id: 15,
        name: 'Waterproof Jacket',
        season: 'all',
      },
      {
        id: 16,
        name: 'Waterproof Trousers',
        season: 'all',
      },
      {
        id: 17,
        name: 'Gaiters',
        season: 'winter',
      },
      {
        id: 18,
        name: 'Baseball Cap',
        season: 'winter',
      },
      {
        id: 19,
        name: 'Brimmed Hat',
        season: 'summer',
      },
      {
        id: 20,
        name: 'Wooly Hat',
        season: 'all',
      },
      {
        id: 21,
        name: 'Waterproof Mittens',
        season: 'all',
      },
      {
        id: 22,
        name: 'Liner gloves',
        season: 'all',
      },
      {
        id: 23,
        name: 'Neck gaiter',
        season: 'all',
      },
    ],
  },
  {
    id: 4,
    title: 'Hygiene',
    lead: 'All of the things that I need to stay clean and healthy.',
    items: [
      {
        id: 1,
        name: 'Toothbrush',
        season: 'all',
      },
      {
        id: 2,
        name: 'Toothpaste Tablets',
        season: 'all',
      },
      {
        id: 3,
        name: 'Toilet Paper',
        season: 'all',
      },
      {
        id: 4,
        name: 'Hand Sanitizer',
        season: 'all',
      },
      {
        id: 5,
        name: 'Trowel',
        season: 'all',
      },
      {
        id: 6,
        name: 'Lip Balm/Vaseline',
        season: 'all',
      },
      {
        id: 7,
        name: 'SPF 50+ Sunscreen',
        season: 'all',
      },
      {
        id: 8,
        name: 'Insect Repellent',
        season: 'summer',
      },
      {
        id: 9,
        name: 'General Purpose Biodegradable Soap',
        notes: 'Sea to Summit Wilderness Wash is a good choice.',
        season: 'all',
      },
      {
        id: 10,
        name: 'Microfibre Towel',
        season: 'all',
      },
      {
        id: 11,
        name: 'Small scrubby sponge',
        season: 'all',
      },
    ],
  },
  {
    id: 5,
    title: 'Nav & Comms',
    lead: 'Tools to find my way and keep in touch with the outside world.',
    items: [
      {
        id: 1,
        name: 'Phone',
        season: 'all',
      },
      {
        id: 2,
        name: 'Phone Charger',
        season: 'all',
      },
      {
        id: 3,
        name: 'Maps',
        season: 'all',
      },
      {
        id: 4,
        name: 'Compass',
        season: 'all',
      },
      {
        id: 5,
        name: 'inReach Mini 2',
        season: 'all',
      },
      {
        id: 6,
        name: '20,000 mAh Power Bank',
        season: 'all',
      },
      {
        id: 7,
        name: 'USB C to USB C Cable',
        season: 'all',
      },
    ],
  },
  {
    id: 6,
    title: 'Other Stuff',
    lead: 'General stuff I need that doesn’t fit in one of the other sections.',
    items: [
      {
        id: 1,
        name: 'Headlamp',
        season: 'all',
      },
      {
        id: 2,
        name: 'Spare Headlamp Batteries',
        season: 'all',
      },
      {
        id: 3,
        name: 'Spare torch',
        season: 'winter',
      },
      {
        id: 4,
        name: 'Spare torch batteries',
        season: 'winter',
      },
      {
        id: 5,
        name: 'Sunglasses',
        season: 'all',
      },
      {
        id: 9,
        name: 'Watch',
        season: 'all',
      },
      {
        id: 10,
        name: 'Pen',
        season: 'all',
      },
      {
        id: 11,
        name: 'Notebook',
        season: 'all',
      },
      {
        id: 12,
        name: 'First Aid Kit',
        season: 'all',
      },
      {
        id: 13,
        name: 'Repair kit',
        season: 'all',
      },
      {
        id: 14,
        name: 'Ear plugs',
        season: 'all',
      },
      {
        id: 15,
        name: 'Wired headphones',
        season: 'all',
      },
      {
        id: 16,
        name: 'Camera',
        season: 'all',
      },
      {
        id: 17,
        name: 'Camera batteries',
        season: 'all',
      },
      {
        id: 18,
        name: 'Camera lenses',
        season: 'all',
      },
      {
        id: 19,
        name: 'Camera tripod',
        season: 'all',
      },
    ],
  },
];

export default data;
