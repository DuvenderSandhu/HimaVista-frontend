import React from 'react'
import converthtml from '../../../utils/htmltoreact.js'


function CulturalEvent() {
    let blog= ` <div class="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg my-6">

    <h1 class="text-4xl font-bold text-gray-800 mb-6 text-center">Cultural Events and Festivals in Himachal Pradesh</h1>

    <!-- Kullu Dussehra -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.tourmyindia.com/blog/wp-content/uploads/2019/09/IMG_2247-768x512.jpg" alt="Kullu Dussehra">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Kullu Dussehra</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        One of the most famous festivals in Himachal Pradesh, Kullu Dussehra is a week-long celebration featuring processions, cultural performances, and rituals honoring Hindu deities.
      </p>
    </div>

    <!-- Lavi Fair -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.tourmyindia.com/blog/wp-content/uploads/2018/08/Lavi-Mela-768x432.jpg" alt="Lavi Fair">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Lavi Fair</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Held annually in Rampur, Lavi Fair is Himachal's oldest trade fair dating back to the 17th century, showcasing local crafts, livestock, and cultural performances.
      </p>
    </div>

    <!-- Losar Festival -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.tourmyindia.com/blog/wp-content/uploads/2020/01/Losar-Festival-768x432.jpg" alt="Losar Festival">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Losar Festival</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Celebrated in Tibetan communities across Himachal, Losar marks the Tibetan New Year with prayers, rituals, masked dances, and colorful decorations.
      </p>
    </div>

    <!-- Phulaich Festival -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.tourmyindia.com/blog/wp-content/uploads/2018/11/Phulaich-768x512.jpg" alt="Phulaich Festival">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Phulaich Festival</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Unique to Kinnaur, Phulaich is a spring festival celebrating the blossoming of flowers with dance, music, and rituals performed by locals in traditional attire.
      </p>
    </div>

    <!-- Winter Carnival -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.tourmyindia.com/blog/wp-content/uploads/2018/12/Winter-Carnival-768x512.jpg" alt="Winter Carnival">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Winter Carnival</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Held in Manali during December-January, Winter Carnival features ice skating, skiing competitions, folk performances, and local food stalls amidst snow-covered landscapes.
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

export default CulturalEvent
