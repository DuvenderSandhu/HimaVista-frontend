import React from 'react'
import converthtml from '../../../utils/htmltoreact.js'

function Attractions() {
    const tourist= `  <div class="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg my-6">

<h1 class="text-4xl font-bold text-gray-800 mb-6 text-center">Tourist Attractions in Himachal Pradesh</h1>

<!-- Kullu Valley -->
<div class="mb-12">
  <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/KULLU.jpg" alt="Kullu Valley">
  <h2 class="text-3xl font-bold text-gray-800 mb-2">Kullu Valley</h2>
  <p class="text-lg text-gray-700 mb-4 leading-relaxed">
    Kullu Valley, known as the "Valley of Gods," is famed for its picturesque landscapes adorned with pine and deodar forests, sprawling apple orchards, and vibrant cultural heritage. It is a haven for adventure enthusiasts offering activities like skiing, paragliding, and river rafting. Tourist spots include the Great Himalayan National Park, Raghunath Temple, and Bijli Mahadev.
  </p>
</div>

<!-- Manali -->
<div class="mb-12">
  <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/MANALI.jpg" alt="Manali">
  <h2 class="text-3xl font-bold text-gray-800 mb-2">Manali</h2>
  <p class="text-lg text-gray-700 mb-4 leading-relaxed">
    Manali, nestled in the Kullu Valley, is a popular hill station known for its snow-covered mountains, lush valleys, and gushing rivers. It offers breathtaking views of the Himalayas and is a gateway to adventure activities like trekking, paragliding, and skiing. Must-visit places include Solang Valley, Rohtang Pass, Hadimba Temple, and Old Manali.
  </p>
</div>

<!-- Shimla -->
<div class="mb-12">
  <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/SHIMLA.jpg" alt="Shimla">
  <h2 class="text-3xl font-bold text-gray-800 mb-2">Shimla</h2>
  <p class="text-lg text-gray-700 mb-4 leading-relaxed">
    Shimla, the capital city of Himachal Pradesh, is renowned for its colonial architecture, bustling markets, and pleasant weather. It was the summer capital of British India and boasts landmarks like The Ridge, Christ Church, and the Viceregal Lodge. Visitors can enjoy a stroll along the Mall Road, visit Jakhoo Temple, and explore the State Museum.
  </p>
</div>

<!-- Dharamshala -->
<div class="mb-12">
  <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/DHARAMSHALA.jpg" alt="Dharamshala">
  <h2 class="text-3xl font-bold text-gray-800 mb-2">Dharamshala</h2>
  <p class="text-lg text-gray-700 mb-4 leading-relaxed">
    Dharamshala, located in the Kangra Valley, is known for its Tibetan culture and the residence of the Dalai Lama. It offers panoramic views of the Dhauladhar Range and is a center for Buddhist learning and meditation. Must-see attractions include Tsuglagkhang Complex, Namgyal Monastery, Bhagsu Waterfall, and Triund trek.
  </p>
</div>

<!-- Dalhousie -->
<div class="mb-12">
  <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/DALHOUSIE.jpg" alt="Dalhousie">
  <h2 class="text-3xl font-bold text-gray-800 mb-2">Dalhousie</h2>
  <p class="text-lg text-gray-700 mb-4 leading-relaxed">
    Dalhousie, a quaint hill station in the Chamba district, is known for its colonial-era architecture, pine-clad valleys, and panoramic views of the snow-capped Himalayas. It offers serene landscapes, charming churches, and picturesque trekking trails. Popular attractions include Khajjiar, Kalatop Wildlife Sanctuary, St. John's Church, and Satdhara Falls.
  </p>
</div>

</div>`
    const html = converthtml(tourist)
    return (
        <div>
            {html}
        </div>
    )
}

export default Attractions
