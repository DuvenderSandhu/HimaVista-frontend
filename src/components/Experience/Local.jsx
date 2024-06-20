import React from 'react'
import converthtml from '../../../utils/htmltoreact.js'


function Local() {
    let blog= `  <div class="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg my-6">

    <h1 class="text-4xl font-bold text-gray-800 mb-6 text-center">Local Experiences in Himachal Pradesh</h1>

    <!-- Cooking Local Cuisine -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/HIMACHAL.jpg" alt="Cooking Local Cuisine">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Cooking Local Cuisine</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Immerse yourself in Himachali culture by learning to cook traditional dishes like Chana Madra, Sidu, and Dham under the guidance of local chefs.
      </p>
    </div>

    <!-- Homestay Experience -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/HOMESTAY.jpg" alt="Homestay Experience">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Homestay Experience</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Stay with local families in picturesque villages like Tirthan Valley or Sangla Valley, experiencing their hospitality and daily way of life.
      </p>
    </div>

    <!-- Traditional Festivals -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/FESTIVALS.jpg" alt="Traditional Festivals">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Traditional Festivals</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Participate in vibrant festivals such as Dussehra in Kullu, Losar in Spiti Valley, or Phulaich in Kinnaur, celebrating local culture and customs.
      </p>
    </div>

    <!-- Handicraft Workshops -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/HANDICRAFTS.jpg" alt="Handicraft Workshops">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Handicraft Workshops</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Learn traditional crafts like Pahari painting, wood carving, and wool weaving from skilled artisans in places like Chamba, Kangra, and Shimla.
      </p>
    </div>

    <!-- Local Markets -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/LOCAL_MARKETS.jpg" alt="Local Markets">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Local Markets</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Explore bustling markets like Manu Market in Manali, Lakkar Bazaar in Shimla, or Tibetan Market in Dharamshala for handicrafts, textiles, and local delicacies.
      </p>
    </div>

  </div>`
  let html= converthtml(blog)
    return (
        <div>
            {html}
        </div>
    )
}

export default Local
