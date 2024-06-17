import React from 'react'
import converthtml from '../../../../utils/htmltoreact'

function Itineraries() {

    const planing= `<div class="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg my-6">

<h1 class="text-4xl font-bold text-gray-800 mb-6 text-center">Tour Itineraries in Himachal Pradesh</h1>

<!-- Adventure Tour -->
<div class="mb-12">
  <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/HIMACHAL.jpg" alt="Adventure Tour">
  <h2 class="text-3xl font-bold text-gray-800 mb-2">Adventure Tour</h2>
  <div class="text-lg text-gray-700 mb-4 leading-relaxed">
    <p><span class="font-bold">Day 1:</span> Arrive in Manali, visit Hadimba Temple and explore Old Manali.</p>
    <p><span class="font-bold">Day 2:</span> Drive to Solang Valley for skiing and paragliding.</p>
    <p><span class="font-bold">Day 3:</span> Journey to Rohtang Pass for breathtaking views and snow activities.</p>
    <p><span class="font-bold">Day 4:</span> Continue to Kullu for river rafting.</p>
    <p><span class="font-bold">Day 5:</span> Return to Manali and shop at Mall Road.</p>
  </div>
</div>

<!-- Cultural Tour -->
<div class="mb-12">
  <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/KULLU.jpg" alt="Cultural Tour">
  <h2 class="text-3xl font-bold text-gray-800 mb-2">Cultural Tour</h2>
  <div class="text-lg text-gray-700 mb-4 leading-relaxed">
    <p><span class="font-bold">Day 1:</span> Arrive in Shimla, visit Christ Church and stroll on The Ridge.</p>
    <p><span class="font-bold">Day 2:</span> Explore Shimla's colonial architecture and visit Viceregal Lodge.</p>
    <p><span class="font-bold">Day 3:</span> Travel to Kufri and enjoy horse riding and Himalayan views.</p>
    <p><span class="font-bold">Day 4:</span> Head to Dharamshala, visit Tsuglagkhang Complex and Namgyal Monastery.</p>
    <p><span class="font-bold">Day 5:</span> Discover Kangra Fort and shop for local handicrafts.</p>
  </div>
</div>

<!-- Nature Tour -->
<div class="mb-12">
  <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/MANALI.jpg" alt="Nature Tour">
  <h2 class="text-3xl font-bold text-gray-800 mb-2">Nature Tour</h2>
  <div class="text-lg text-gray-700 mb-4 leading-relaxed">
    <p><span class="font-bold">Day 1:</span> Arrive in Dalhousie, visit Khajjiar and Kalatop Wildlife Sanctuary.</p>
    <p><span class="font-bold">Day 2:</span> Trek to Dainkund Peak for panoramic views.</p>
    <p><span class="font-bold">Day 3:</span> Journey to Chamba for its temples and handicrafts.</p>
    <p><span class="font-bold">Day 4:</span> Travel to Manali, explore Solang Valley and Rohtang Pass.</p>
    <p><span class="font-bold">Day 5:</span> Return to Shimla, relax at Annandale and Chadwick Falls.</p>
  </div>
</div>

<!-- Hill Station Tour -->
<div class="mb-12">
  <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/SHIMLA.jpg" alt="Hill Station Tour">
  <h2 class="text-3xl font-bold text-gray-800 mb-2">Hill Station Tour</h2>
  <div class="text-lg text-gray-700 mb-4 leading-relaxed">
    <p><span class="font-bold">Day 1:</span> Arrive in Shimla, visit The Ridge and Mall Road.</p>
    <p><span class="font-bold">Day 2:</span> Explore Kufri and enjoy adventure activities.</p>
    <p><span class="font-bold">Day 3:</span> Travel to Kasauli, visit Monkey Point and Christ Church.</p>
    <p><span class="font-bold">Day 4:</span> Journey to Dharamshala, explore McLeod Ganj and Bhagsu Nag Temple.</p>
    <p><span class="font-bold">Day 5:</span> Return to Shimla, visit Jakhoo Temple and State Museum.</p>
  </div>
</div>

<!-- Family Tour -->
<div class="mb-12">
  <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/DHARAMSHALA.jpg" alt="Family Tour">
  <h2 class="text-3xl font-bold text-gray-800 mb-2">Family Tour</h2>
  <div class="text-lg text-gray-700 mb-4 leading-relaxed">
    <p><span class="font-bold">Day 1:</span> Arrive in Dharamshala, visit Dal Lake and St. John's Church.</p>
    <p><span class="font-bold">Day 2:</span> Explore Kangra Fort and Kangra Art Museum.</p>
    <p><span class="font-bold">Day 3:</span> Journey to Manali, visit Hadimba Temple and Vashisht Hot Springs.</p>
    <p><span class="font-bold">Day 4:</span> Drive to Solang Valley for adventure activities.</p>
    <p><span class="font-bold">Day 5:</span> Return to Shimla, shop at Lakkar Bazaar and enjoy local cuisine.</p>
  </div>
</div>

</div>`
    const html = converthtml(planing)
    return (
        <div>
            {html}
        </div>
    )
}

export default Itineraries
