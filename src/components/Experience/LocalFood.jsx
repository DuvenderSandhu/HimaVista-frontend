import React from 'react'
import converthtml from '../../../utils/htmltoreact.js'



function LocalFood() {
    let blog= `  <div class="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg my-6">

    <h1 class="text-4xl font-bold text-gray-800 mb-6 text-center">Himachal Food and Recipes</h1>

    <!-- Chana Madra Recipe -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://www.whiskaffair.com/wp-content/uploads/2020/11/Himachali-Chana-Madra.jpg" alt="Chana Madra">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Chana Madra</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        A classic Himachali dish featuring chickpeas cooked in a creamy yogurt gravy with spices like cinnamon, cardamom, and cloves. <br>
        <span class="font-semibold">Ingredients:</span> Chickpeas, yogurt, ghee, spices. <br>
        <span class="font-semibold">Method:</span> Sauté spices, add chickpeas, cook with yogurt until creamy, garnish with cilantro.
      </p>
    </div>

    <!-- Sidu Recipe -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://i.ytimg.com/vi/v7-mKnct6J8/maxresdefault.jpg" alt="Sidu">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Sidu</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        A traditional steamed bread from Himachal made with wheat flour, yeast, and spices. Often stuffed with a filling of paneer or dal. <br>
        <span class="font-semibold">Ingredients:</span> Wheat flour, yeast, salt, ghee. <br>
        <span class="font-semibold">Method:</span> Knead dough, let rise, shape with stuffing, steam until cooked, serve hot with ghee.
      </p>
    </div>

    <!-- Dham Recipe -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://i.ytimg.com/vi/gV5QqXH1sPA/maxresdefault.jpg" alt="Dham">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Dham</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Himachali feast served during festivals and special occasions, consisting of dal, rajma, rice, curd, and desserts like sweets. <br>
        <span class="font-semibold">Ingredients:</span> Lentils, kidney beans, rice, yogurt, spices. <br>
        <span class="font-semibold">Method:</span> Cook lentils and beans, prepare rice, serve with yogurt, garnish with sweets.
      </p>
    </div>

    <!-- Babru Recipe -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://i.ytimg.com/vi/41-Cukc-RfE/maxresdefault.jpg" alt="Babru">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Babru</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Deep-fried bread stuffed with black gram paste, enjoyed as a breakfast or snack item in Himachal Pradesh. <br>
        <span class="font-semibold">Ingredients:</span> Black gram, wheat flour, spices, oil. <br>
        <span class="font-semibold">Method:</span> Make paste, stuff in dough, roll and fry until golden brown, serve hot.
      </p>
    </div>

    <!-- Aktori Recipe -->
    <div class="mb-12">
      <img class="w-full h-auto mb-4 rounded-lg" src="https://i.ytimg.com/vi/B6nYCTpFWjw/maxresdefault.jpg" alt="Aktori">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Aktori</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        A Himachali potato pancake cooked with spices like turmeric, ginger, and coriander, served as a savory dish. <br>
        <span class="font-semibold">Ingredients:</span> Potatoes, spices, ghee, herbs. <br>
        <span class="font-semibold">Method:</span> Grate potatoes, mix with spices, shape into patties, fry until crispy, serve hot.
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

export default LocalFood
