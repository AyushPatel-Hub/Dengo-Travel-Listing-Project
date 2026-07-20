const sampleListings = [
  {
    title: "Minimalist Nordic Forest Cabin",
    discription: "A beautifully designed Scandinavian-style cabin hidden deep in the pine woods. Floor-to-ceiling windows offer a completely immersive nature view.",
    image: {
      url:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 1750,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Chic Penthouse with Skyline Views",
    discription: "Live high above the city in this luxurious penthouse. Boasts a private rooftop terrace, high-end kitchen appliances, and an open-concept living space.",
    image: {
      url:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 2900,
    location: "Punjab",
    country: "India"
  },
  {
    title: "Cliffside Infinity Villa",
    discription: "Perched dramatically over the Mediterranean Sea, this villa features an expansive deck, private infinity pool, and open-air dining areas.",
    image: {
      url:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop",
     filename:"listingImage"
    },
    price: 4900,
    location: "New Delhi",
    country: "India"
  },
  {
    title: "Artsy Loft in Creative District",
    discription: "A vibrant loft covered in local artwork and independent design. Steps away from the city's finest galleries, underground clubs, and record stores.",
    image: {
      url:"https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 1150,
    location: "Varanasi",
    country: "India"
  },
  {
    title: "Bamboo Eco-Cottage",
    discription: "An architectural marvel constructed entirely out of sustainable bamboo. Situated right beside a rushing river and beautiful green rice paddies.",
    image: {
      url:"https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 950,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Authentic Desert Adobe Home",
    discription: "Experience the magic of the Southwest in this historic mud-brick home. Enjoy cozy evenings by the outdoor kiva fireplace under a star-filled sky.",
    image: {
      url:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 1350,
    location: "Rajesthan",
    country: "India"
  },
  {
    title: "Elegant Georgian Townhouse",
    discription: "A grand and historically preserved townhouse featuring high ceilings, grand chandeliers, and a private manicured English garden out back.",
    image:{
      url: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 2400,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Tropical Treehouse Villa",
    discription: "Suspended safely above the jungle canopy, this luxury treehouse offers extreme privacy and front-row seats to incredible daily birdwatching.",
    image: {
      url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 2000,
    location: "kerela",
    country: "India"
  },
  {
    title: "Lakeside Boathouse Retreat",
    discription: "Wake up to water lapping right beneath your floorboards. Features a spacious private dock perfect for swimming, fishing, and evening sunrises.",
    image: {
      url:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 1600,
    location: "Goa",
    country: "India"
  },
  {
    title: "Modernist Desert Cube",
    discription: "Striking geometric architecture in the middle of a vast desert expanse. Perfect for a quiet, distraction-free creative retreat.",
    image: {
      url:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 2150,
    location: "Rajesthan",
    country: "India"
  },
  {
    title: "Historic Spanish Hacienda",
    discription: "A sweeping, historic estate featuring authentic terracotta tile roofing, a stone fountain central courtyard, and sprawling shaded archways.",
    image: {
      url:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 2750,
    location: "Pune",
    country: "India"
  },
  {
    title: "Futuristic Urban Studio",
    discription: "A compact, hyper-optimized smart apartment packed with hidden neon lighting, automated voice controls, and incredible city skyline views.",
    image: {
      url:"https://images.unsplash.com/photo-1502672085616-523f865a1109?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 1050,
    location: "Banglore",
    country: "India"
  },
  {
    title: "Snowy Alpine Lodge",
    discription: "A massive log cabin designed for large ski groups. Features a roaring indoor stone fireplace, heavy wool blankets, and an outdoor hot tub.",
    image: {
      url:"https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 3500,
    location: "Srinagr",
    country: "India"
  },
  {
    title: "Luxurious Cave Suite",
    discription: "Carved entirely into the natural stone hillside. Stay remarkably cool in the summer and cozy in the winter inside this uniquely historic space.",
    image: {
      url:"https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 1850,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Coastal Modern Beach House",
    discription: "A bright, airy, sun-drenched home with pristine minimalist decor. Slide open the back glass wall to walk right out onto the sand dunes.",
    image: {
      url:"https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 3100,
    location: "Daman",
    country: "India"
  },
  {
    title: "Renovated Windmill Cottage",
    discription: "Stay inside a beautifully converted 19th-century traditional windmill, complete with original wooden gears and a panoramic viewing deck.",
    image: {
      url:"https://images.unsplash.com/photo-1506974210756-8e1b8985d348?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 1450,
    location: "Tamil Nadu",
    country: "India"
  },
  {
    title: "Industrial Waterfront Flat",
    discription: "An edgy, converted warehouse apartment overlooking the active harbor. Features massive steel-frame windows and gorgeous exposed pipes.",
    image: {
      url:"https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 1250,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Charming Country Farmhouse",
    discription: "A peaceful countryside escape complete with wild flower gardens, a large wraparound porch, and a friendly family of local horses next door.",
    image: {
      url:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 1100,
    location: "Jharkhand",
    country: "India"
  },
  {
    title: "Luxury Safari Glamping Tent",
    discription: "A high-end canvas tent featuring a king-sized bed, en-suite bathroom, and a private wooden viewing deck overlooking a local watering hole.",
    image: {
      url:"https://images.unsplash.com/photo-1533632325163-9b8801d91041?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 2600,
    location: "Madhya Pradesh",
    country: "India"
  },
  {
    title: "Art Deco Apartment",
    discription: "Impeccably styled apartment featuring classic 1930s architecture, geometric gold finishings, and a lively balcony facing the avenues.",
    image: {
      url:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop",
      filename:"listingImage"
    },
    price: 1300,
    location: "Lucknow",
    country: "India"
  },
  {
    title: "Luxury Beach Villa",
    discription: "Relax in a luxurious beachfront villa featuring a private pool, spacious rooms, and breathtaking ocean views.",
    image: {
      url:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename:"listingImage"
    },
    price: 3200,
    location: "Goa",
    country: "India"
  },
  {
    title: "Modern City Apartment",
    discription: "A stylish apartment located in the city center, close to restaurants, shopping malls, and nightlife.",
    image: {
      url:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      filename:"listingImage"
    },
    price: 1450,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Cozy Mountain Cabin",
    discription: "Escape to a peaceful wooden cabin surrounded by majestic mountains and lush greenery.",
    image: {
      url:"https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      filename:"listingImage"
    },
    price: 1800,
    location: "Manali",
    country: "India"
  },
  {
    title: "Lake View Cottage",
    discription: "A charming lakeside cottage with stunning sunrise views and modern comforts for a relaxing vacation.",
    image: {
      url:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      filename:"listingImage"
    },
    price: 1650,
    location: "Nainital",
    country: "India"
  },
  {
    title: "Luxury Palace Stay",
    discription: "Experience royal living in a beautifully restored palace offering premium hospitality and heritage charm.",
    image: {
      url:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename:"listingImage"
    },
    price: 4100,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Tropical Island Resort",
    discription: "Enjoy crystal-clear waters, white sandy beaches, and luxury villas in a tropical paradise.",
    image: {
      url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename:"listingImage"
    },
    price: 4700,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Luxury Penthouse",
    discription: "Stay in a premium penthouse offering panoramic skyline views and world-class amenities.",
    image: {
      url:"https://images.unsplash.com/photo-1484154218962-a197022b5858",
      filename:"listingImage"
    },
    price: 5500,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Forest Treehouse",
    discription: "A unique treehouse nestled in a lush forest, perfect for nature lovers and adventure seekers.",
    image: {
      url:"https://images.unsplash.com/photo-1518780664697-55e3ad937233",
      filename:"listingImage"
    },
    price: 1950,
    location: "Kerela",
    country: "India"
  },
  {
    title: "Oceanfront Glass House",
    discription: "Modern glass house with uninterrupted ocean views, luxurious interiors, and private beach access.",
    image: {
      url:"https://images.unsplash.com/photo-1494526585095-c41746248156",
      filename:"listingImage"
    },
    price: 4900,
    location: "Uttar Pradesh",
    country: "India"
  },
  {
    title: "Snow Peak Chalet",
    discription: "A beautiful alpine chalet surrounded by snow-capped mountains, ideal for winter holidays and skiing.",
    image:{
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename:"listingImage"
    },
    price: 3400,
    location: "Himachal Pradesh",
    country: "India"
  }
];

module.exports = { data: sampleListings };