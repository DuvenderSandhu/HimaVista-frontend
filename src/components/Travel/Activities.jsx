import React from 'react'
import converthtml from '../../../../utils/htmltoreact'

function Activites() {

    const activities= `<div class="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg my-6">

    <h1 class="text-4xl font-bold text-gray-800 mb-6 text-center">Adventure Activities in Himachal Pradesh</h1>
    
    <!-- Skiing -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/SOLANG_VALLEY.jpg" alt="Skiing in Solang Valley">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Skiing in Solang Valley</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Experience exhilarating skiing adventures in Solang Valley, Manali. Glide down pristine slopes amidst breathtaking Himalayan scenery, perfect for beginners and enthusiasts alike.
      </p>
    </div>
    
    <!-- Paragliding -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/BIR.jpg" alt="Paragliding in Bir-Billing">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Paragliding in Bir-Billing</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Soar through the skies of Bir-Billing, renowned as the paragliding capital of India. Enjoy panoramic views of the Dhauladhar range and the lush Kangra Valley below.
      </p>
    </div>
    
    <!-- Trekking -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/TREKKING.jpg" alt="Trekking in Himachal Pradesh">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Trekking in Himachal Pradesh</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Embark on unforgettable trekking adventures across Himachal's diverse landscapes. Explore trails like Triund near McLeod Ganj, Hampta Pass near Manali, and Pin Parvati in the Parvati Valley.
      </p>
    </div>
    
    <!-- River Rafting -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/KULLU.jpg" alt="River Rafting in Kullu">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">River Rafting in Kullu</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Challenge the rapids of the Beas River in Kullu Valley with thrilling river rafting expeditions. Enjoy adrenaline-pumping rides amidst stunning valley landscapes.
      </p>
    </div>
    
    <!-- Rock Climbing -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/ROCK_CLIMBING.jpg" alt="Rock Climbing in Himachal">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Rock Climbing in Himachal</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Scale rugged cliffs and conquer challenging rock faces in Himachal Pradesh. Test your skills at popular climbing spots like Manali, Dharamshala, and Parvati Valley.
      </p>
    </div>
    
    </div>`
    const html = converthtml(activities)
    return (
        <div>
            {html}
        </div>
    )
}

export default Activites
