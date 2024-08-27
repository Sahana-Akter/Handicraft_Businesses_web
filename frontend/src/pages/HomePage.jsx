import React, { useState } from 'react';
import Banner from '../components/Banner';
import BusinessCard from '../components/BusinessCard';

const HomePage = () => {
  // Sample data for businesses
  const allBusinesses = [
    { id: 1, logoUrl: '/images/1.jpg', name: 'Bangla Craft', years: 10, products: 120, likes: 240 },
    { id: 2, logoUrl: '/images/business1.jpg', name: 'Bdcreation', years: 5, products: 85, likes: 150 },
    { id: 3, logoUrl: '/images/2.jpg', name: 'Filingbuzz', years: 10, products: 100, likes: 140 },
    { id: 4, logoUrl: '/images/3.PNG', name: 'Aarong', years: 3, products: 285, likes: 150 },
    { id: 5, logoUrl: '/images/4.jpg', name: 'Traditional pottery Bangladesh', years: 9, products: 895, likes: 240 },
    { id: 6, logoUrl: '/images/5.jpg', name: 'Artist Bangladesh', years: 5, products: 85, likes: 150 },
    { id: 7, logoUrl: '/images/6.jpg', name: 'Bongobeena', years: 10, products: 120, likes: 240 },
    { id: 8, logoUrl: '/images/7.jpg', name: 'Pottery Art', years: 5, products: 85, likes: 150 },
    { id: 9, logoUrl: '/images/8.jpg', name: 'Handloom Sharee', years: 4, products: 200, likes: 180 },
    { id: 10, logoUrl: '/images/9.jpg', name: 'Mud pot business', years: 6, products: 150, likes: 170 },
    // Add more businesses here...
  ];

    // Sample data for products
    const featuredProducts = [
      { id: 1, imageUrl: '/images/product1.jpg', name: 'Handcrafted Vase', price: '$30' },
      { id: 2, imageUrl: '/images/product2.jpg', name: 'Bamboo Basket', price: '$15' },
      { id: 3, imageUrl: '/images/product3.jpg', name: 'Clay Pot', price: '$25' },
      { id: 4, imageUrl: '/images/product4.jpg', name: 'Jamdani Saree', price: '$120' },
      { id: 5, imageUrl: '/images/product5.jpg', name: 'Wooden Sculpture', price: '$70' },
      // Add more products here...
    ];

  const [visibleCount, setVisibleCount] = useState(8); // Default to show the first 8 businesses

  const handleViewAll = () => {
    setVisibleCount(allBusinesses.length); // Show all businesses
  };

  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {/* Banner Section */}
      <Banner />

      {/* Business Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Businesses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allBusinesses.slice(0, visibleCount).map(business => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
        {visibleCount < allBusinesses.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewAll}
              className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-500 dark:hover:bg-blue-600"
            >
              See More
            </button>
          </div>
        )}
      </section>

      {/* Extra Sections */}

      <section className="bg-gray-100 dark:bg-gray-900 py-12">
      {/* Main headline centered */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        Importance and History of Handicrafts in Bangladesh
      </h2>

      {/* Key points and descriptions aligned left */}
      <div className="max-w-4xl mx-auto px-4">
        {/* Introduction */}
        <p className="text-left text-gray-700 dark:text-gray-100 mb-6">
          Bangladesh's handicrafts are a vital link between its artistic traditions and cultural legacy. Crafted by artisans who employ age-old techniques, these handmade items reflect the country's deep historical roots and are a significant part of its economic framework.
        </p>

        {/* Historical Development */}
        <p className="text-left text-lime-400 font-bold mb-2">
          Historical Development:
        </p>
        <p className="text-left text-gray-700 dark:text-gray-100 mb-6">
          <strong className="text-lime-400">Pre-Independence Era:</strong> The history of Bangladeshi handicrafts spans back hundreds of years, rooted in the ancient Bengal civilization. During the Mughal era, Bengal was famed for its luxurious muslin and Jamdani fabrics, prized globally for their delicate patterns and high craftsmanship. Crafts such as pottery, metalwork, and wood carving were integral to everyday life. The British colonial period brought changes, but traditional artisans persisted in preserving their crafts.
        </p>
        
        {!showMore && (
          <div className="text-center mt-8">
            <button
              onClick={toggleShowMore}
              className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-500 dark:hover:bg-blue-600"
            >
              Read More
            </button>
          </div>
        )}

        {showMore && (
          <>
            <p className="text-left text-gray-700 dark:text-gray-100 mb-6">
              <strong className="text-lime-400">Post-Independence Era:</strong> Following Bangladesh’s independence in 1971, the government acknowledged the craft sector’s potential to provide jobs and sustain cultural traditions. Various efforts were made to support artisans and expand their reach to markets. Platforms like Aarong and BRAC became instrumental in promoting these traditional crafts to both local and international audiences, revitalizing and sustaining interest in Bangladeshi handicrafts.
            </p>

            {/* Significance in Contemporary Times */}
            <p className="text-left text-lime-400 font-bold mb-2">
              Significance in Contemporary Times:
            </p>
            <p className="text-left text-gray-700 dark:text-gray-100 mb-6">
              Today, handicrafts in Bangladesh are much more than a reflection of the past; they are essential to the country’s current economy and social fabric. Millions of people, particularly in rural areas, rely on craft-making as a source of income. This industry has been especially empowering for women, offering them economic independence through their craftsmanship.
            </p>

            {/* International Acclaim */}
            <p className="text-left text-lime-400 font-bold mb-2">
              International Acclaim:
            </p>
            <p className="text-left text-gray-700 dark:text-gray-100 mb-6">
              Bangladeshi handicrafts have garnered international recognition for their distinctiveness, quality, and eco-friendliness. Traditional crafts like Jamdani weaving, Nakshi Kantha stitching, and terracotta pottery are now being exported worldwide. These crafts are not just commodities but also carry the stories and heritage of the artisans and their communities, resonating deeply with global buyers.
            </p>

            {/* Challenges and Future Prospects */}
            <p className="text-left text-lime-400 font-bold mb-2">
              Challenges and Future Prospects:
            </p>
            <p className="text-left text-gray-700 dark:text-gray-100 mb-6">
              Despite their importance, Bangladesh's handicrafts sector faces numerous challenges, including competition from mass-produced items, infrastructural shortcomings, and limited global market access. However, with increasing global demand for sustainable and ethically made products, the sector holds vast potential for growth. Continued investment in skills training, technology, and marketing strategies can further empower artisans and help safeguard traditional craft knowledge for future generations.
            </p>

            {/* Conclusion */}
            <p className="text-left text-gray-700 dark:text-gray-100">
              In summary, Bangladeshi handicrafts are a living testament to the nation’s cultural richness and the enduring spirit of its people. As they continue to adapt and grow, these crafts remain integral to Bangladesh’s national identity and contribute significantly to its economic and social progress.
            </p>

            <div className="text-center mt-8">
              <button
                onClick={toggleShowMore}
                className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-500 dark:hover:bg-blue-600"
              >
                Show Less
              </button>
            </div>
          </>
        )}
      </div>
    </section>

      {/* Featured Products Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Add cards for featured products */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
