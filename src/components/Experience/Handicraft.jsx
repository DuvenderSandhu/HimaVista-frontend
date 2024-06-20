import React from 'react'
import converthtml from '../../../utils/htmltoreact.js'



function HandiCraft() {
    let blog= ` <div class="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg my-6">

    <h1 class="text-4xl font-bold text-gray-800 mb-6 text-center">Handicrafts and Handloom of Himachal Pradesh</h1>

    <!-- Chamba Rumal -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/cmsuploads/compressed/600px-Crafts_of_Himachal_Pradesh-20200327163943.jpg" alt="Chamba Rumal">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Chamba Rumal</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Intricately embroidered handkerchiefs from Chamba, featuring motifs of flora, fauna, and historical scenes, crafted by skilled artisans.
      </p>
    </div>

    <!-- Kangra Painting -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://i.ytimg.com/vi/O5m9-7KDsCo/maxresdefault.jpg" alt="Kangra Painting">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Kangra Painting</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Traditional miniature paintings from Kangra Valley, depicting Hindu mythology, love stories, and royal court scenes, known for their detailed artistry.
      </p>
    </div>

    <!-- Kullu Shawl -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://i.pinimg.com/originals/04/df/04/04df04d8e666f6f3e5985b1472d927b4.jpg" alt="Kullu Shawl">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Kullu Shawl</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Woolen shawls woven in intricate patterns and vibrant colors in the Kullu region, using traditional weaving techniques passed down through generations.
      </p>
    </div>

    <!-- Himachali Caps -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://i.ytimg.com/vi/qBhSvhMru5w/maxresdefault.jpg" alt="Himachali Caps">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Himachali Caps</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Colorful Pahari caps made from wool or felt, adorned with pom-poms and intricate embroidery, representing various communities and traditions.
      </p>
    </div>

    <!-- Metal Crafts -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://i.pinimg.com/originals/94/9a/48/949a48b8f4cc92b06e5e8e3d938e83b6.jpg" alt="Metal Crafts">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Metal Crafts</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Handcrafted metalware including utensils, lamps, and jewelry made from brass, copper, and silver, showcasing the skill of Himachali metalworkers.
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

export default HandiCraft
