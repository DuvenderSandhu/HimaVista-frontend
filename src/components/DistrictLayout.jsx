import { useParams } from "react-router-dom";
import converthtml from "../../../utils/htmltoreact";

function DistrictLayout() {
    let params= useParams().district

//     const htmlInput =`<div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//     <h1 class="text-4xl font-bold text-gray-800 mb-6">Political View of Himachal Pradesh</h1>
//     <img class="w-full h-auto mb-6 rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Nati_Dance_Costume%2C_Kangra%2C_Himachal_Pradesh%2C_India.jpg/800px-Nati_Dance_Costume%2C_Kangra%2C_Himachal_Pradesh%2C_India.jpg?20220228073221" alt="Himachal Pradesh Politics">
//     <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//       Himachal Pradesh, nestled in the lap of the Himalayas, is not just known for its natural beauty but also for its vibrant political landscape. Since its establishment as a state, Himachal Pradesh has seen a dynamic political journey characterized by active participation and evolving governance.
//     </p>
//     <h2 class="text-2xl font-semibold text-gray-800 mb-4">Historical Background</h2>
//     <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//       The political history of Himachal Pradesh dates back to the post-independence era when it was formed as a Chief Commissioner's province in 1948. Over the years, it underwent several transformations, becoming a Union Territory in 1956, and eventually attaining full statehood on January 25, 1971.
//     </p>
//     <h2 class="text-2xl font-semibold text-gray-800 mb-4">Political Structure</h2>
//     <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//       The state operates under a parliamentary system of representative democracy. The Governor, appointed by the President of India, serves as the ceremonial head of the state. The Chief Minister, elected by the legislative assembly, is the head of the government and exercises executive powers. The legislative assembly of Himachal Pradesh is unicameral, consisting of 68 members.
//     </p>
//     <h2 class="text-2xl font-semibold text-gray-800 mb-4">Major Political Parties</h2>
//     <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//       The political scene in Himachal Pradesh is dominated by two major parties: the Indian National Congress (INC) and the Bharatiya Janata Party (BJP). These parties have alternated in power, shaping the policies and development trajectory of the state. Regional parties and independent candidates also play a significant role in the local political fabric.
//     </p>
//     <h2 class="text-2xl font-semibold text-gray-800 mb-4">Elections and Governance</h2>
//     <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//       Elections in Himachal Pradesh are conducted with a high voter turnout, reflecting the active political engagement of its citizens. The state's governance focuses on sustainable development, tourism, education, and healthcare. Policies and schemes are often crafted to balance ecological preservation with economic growth.
//     </p>
//     <h2 class="text-2xl font-semibold text-gray-800 mb-4">Recent Developments</h2>
//     <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//       In recent years, Himachal Pradesh has seen significant political developments, including infrastructure projects, digital governance initiatives, and social welfare schemes. The state continues to strive for inclusive growth, with an emphasis on rural development and women's empowerment.
//     </p>
//     <h2 class="text-2xl font-semibold text-gray-800 mb-4">Challenges and Future Outlook</h2>
//     <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//       While Himachal Pradesh has made notable progress, it faces challenges such as environmental sustainability, infrastructure development, and managing migration trends. The future political landscape will likely focus on addressing these issues while leveraging technology and innovation for governance.
//     </p>
//     <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//       Overall, the political view of Himachal Pradesh is a testament to its resilience and adaptability. The state's commitment to democratic values and sustainable development continues to guide its journey towards a prosperous future.
//     </p>
//   </div>
//   `
// const htmlInput= `<div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
// <h1 class="text-4xl font-bold text-gray-800 mb-6">Exploring Kangra District, Himachal Pradesh</h1>
// <img class="w-full h-auto mb-6 rounded-lg" src="https://www.holidify.com/images/bgImages/KANGRA.jpg" alt="Kangra Valley">
// <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//   Kangra District, one of the most picturesque regions of Himachal Pradesh, is known for its lush green valleys, serene landscapes, and rich cultural heritage. Nestled in the western Himalayas, Kangra offers a perfect blend of natural beauty and historical significance, making it a must-visit destination for travelers.
// </p>
// <h2 class="text-2xl font-semibold text-gray-800 mb-4">Historical Significance</h2>
// <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//   The history of Kangra dates back to ancient times, with references in various Hindu scriptures. The district is home to the Kangra Fort, one of the oldest forts in India, which stands as a testament to the region's historical and architectural grandeur. The fort has witnessed numerous battles and has been a significant stronghold for various dynasties.
// </p>
// <h2 class="text-2xl font-semibold text-gray-800 mb-4">Cultural Heritage</h2>
// <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//   Kangra is renowned for its vibrant cultural heritage, including traditional arts, crafts, and festivals. The famous Kangra paintings, known for their unique style and intricate details, originated here. The district also celebrates various festivals with great enthusiasm, such as Navratri, Lohri, and the local Minjar fair, reflecting the rich cultural tapestry of the region.
// </p>
// <h2 class="text-2xl font-semibold text-gray-800 mb-4">Natural Beauty</h2>
// <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//   The natural beauty of Kangra is unparalleled, with its sprawling tea gardens, dense forests, and pristine rivers. The Dhauladhar mountain range provides a stunning backdrop to the district, offering numerous trekking and hiking opportunities for adventure enthusiasts. The serene environment and pleasant climate make Kangra an ideal destination for nature lovers.
// </p>
// <h2 class="text-2xl font-semibold text-gray-800 mb-4">Tourist Attractions</h2>
// <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//   Kangra boasts several tourist attractions, including the Masroor Rock Cut Temples, a group of monolithic rock-cut temples dating back to the 8th century. The picturesque town of McLeod Ganj, often referred to as "Little Lhasa," is home to the Tibetan spiritual leader, the Dalai Lama, and attracts visitors from around the globe. The Baijnath Temple, dedicated to Lord Shiva, is another significant religious site in the district.
// </p>
// <h2 class="text-2xl font-semibold text-gray-800 mb-4">Local Cuisine</h2>
// <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//   Kangra's local cuisine is a delightful blend of flavors, influenced by the region's agricultural produce and cultural traditions. Dishes like Dham, a traditional festive meal, and Siddu, a steamed bread, are popular among locals and visitors alike. The district's tea gardens produce some of the finest tea, which is a must-try for tea connoisseurs.
// </p>
// <h2 class="text-2xl font-semibold text-gray-800 mb-4">Adventure Activities</h2>
// <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//   For adventure seekers, Kangra offers a plethora of activities such as trekking, paragliding, and rock climbing. The Bir Billing area is renowned for being one of the best paragliding sites in the world, attracting enthusiasts from all over. The district's diverse terrain and natural resources provide ample opportunities for outdoor adventures.
// </p>
// <p class="text-lg text-gray-700 mb-6 leading-relaxed">
//   In conclusion, Kangra District is a treasure trove of natural beauty, cultural richness, and historical significance. Whether you are a nature lover, history buff, or adventure enthusiast, Kangra has something to offer for everyone. Its serene landscapes, vibrant culture, and warm hospitality make it a captivating destination to explore in Himachal Pradesh.
// </p>
// </div>
// `
const kangra= `<div class="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg my-6">
<h1 class="text-4xl font-bold text-gray-800 mb-4">Exploring Kangra District, Himachal Pradesh</h1>
<img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/KANGRA.jpg" alt="Kangra Valley">
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  Kangra District, one of the most picturesque regions of Himachal Pradesh, is known for its lush green valleys, serene landscapes, and rich cultural heritage. Nestled in the western Himalayas, Kangra offers a perfect blend of natural beauty and historical significance, making it a must-visit destination for travelers.
</p>
<h2 class="text-2xl font-semibold text-gray-800 mb-2">Historical Significance</h2>
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  The history of Kangra dates back to ancient times, with references in various Hindu scriptures. The district is home to the Kangra Fort, one of the oldest forts in India, which stands as a testament to the region's historical and architectural grandeur. The fort has witnessed numerous battles and has been a significant stronghold for various dynasties.
</p>
<h2 class="text-2xl font-semibold text-gray-800 mb-2">Cultural Heritage</h2>
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  Kangra is renowned for its vibrant cultural heritage, including traditional arts, crafts, and festivals. The famous Kangra paintings, known for their unique style and intricate details, originated here. The district also celebrates various festivals with great enthusiasm, such as Navratri, Lohri, and the local Minjar fair, reflecting the rich cultural tapestry of the region.
</p>
<h2 class="text-2xl font-semibold text-gray-800 mb-2">Natural Beauty</h2>
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  The natural beauty of Kangra is unparalleled, with its sprawling tea gardens, dense forests, and pristine rivers. The Dhauladhar mountain range provides a stunning backdrop to the district, offering numerous trekking and hiking opportunities for adventure enthusiasts. The serene environment and pleasant climate make Kangra an ideal destination for nature lovers.
</p>
<h2 class="text-2xl font-semibold text-gray-800 mb-2">Tourist Attractions</h2>
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  Kangra boasts several tourist attractions, including the Masroor Rock Cut Temples, a group of monolithic rock-cut temples dating back to the 8th century. The picturesque town of McLeod Ganj, often referred to as "Little Lhasa," is home to the Tibetan spiritual leader, the Dalai Lama, and attracts visitors from around the globe. The Baijnath Temple, dedicated to Lord Shiva, is another significant religious site in the district.
</p>
<h2 class="text-2xl font-semibold text-gray-800 mb-2">Local Cuisine</h2>
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  Kangra's local cuisine is a delightful blend of flavors, influenced by the region's agricultural produce and cultural traditions. Dishes like Dham, a traditional festive meal, and Siddu, a steamed bread, are popular among locals and visitors alike. The district's tea gardens produce some of the finest tea, which is a must-try for tea connoisseurs.
</p>
<h2 class="text-2xl font-semibold text-gray-800 mb-2">Adventure Activities</h2>
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  For adventure seekers, Kangra offers a plethora of activities such as trekking, paragliding, and rock climbing. The Bir Billing area is renowned for being one of the best paragliding sites in the world, attracting enthusiasts from all over. The district's diverse terrain and natural resources provide ample opportunities for outdoor adventures.
</p>
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  In conclusion, Kangra District is a treasure trove of natural beauty, cultural richness, and historical significance. Whether you are a nature lover, history buff, or adventure enthusiast, Kangra has something to offer for everyone. Its serene landscapes, vibrant culture, and warm hospitality make it a captivating destination to explore in Himachal Pradesh.
</p>
</div>`

const shimla= `<section id="shimla" class="mb-12">
<h2 class="text-3xl font-bold text-gray-800 mb-4">Shimla District</h2>
<img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/SHIMLA.jpg" alt="Shimla">
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  Shimla, the capital city of Himachal Pradesh, is often referred to as the "Queen of Hills." Known for its colonial architecture, bustling markets, and pleasant weather, Shimla has been a favorite destination for tourists and honeymooners alike. Its scenic beauty and historical significance make it a must-visit destination.
</p>
<h3 class="text-2xl font-semibold text-gray-800 mb-2">Historical Significance</h3>
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  Shimla was the summer capital of British India, and this colonial legacy is reflected in its architecture and layout. The Ridge, Christ Church, and the Viceregal Lodge are some of the prominent landmarks that showcase the town's historical importance.
</p>
<h3 class="text-2xl font-semibold text-gray-800 mb-2">Tourist Attractions</h3>
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  Apart from its historical sites, Shimla offers several tourist attractions such as the Mall Road, Jakhoo Temple, and the State Museum. The town is also a gateway to various adventure activities including trekking, skiing, and ice skating.
</p>
<h3 class="text-2xl font-semibold text-gray-800 mb-2">Natural Beauty</h3>
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  Surrounded by lush green hills and dense forests, Shimla is a paradise for nature lovers. The nearby Kufri and Naldehra offer picturesque landscapes and a chance to experience the natural beauty of the Himalayas.
</p>
<h3 class="text-2xl font-semibold text-gray-800 mb-2">Local Cuisine</h3>
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  The local cuisine of Shimla includes dishes like Chana Madra, Dham, and Siddu. The town also offers a variety of cafes and restaurants where visitors can enjoy both local and international cuisine.
</p>
</section>

<!-- Kullu District -->
<section id="kullu" class="mb-12">
<h2 class="text-3xl font-bold text-gray-800 mb-4">Kullu District</h2>
<img class="w-full h-auto mb-4 rounded-lg" src="https://www.holidify.com/images/bgImages/KULLU.jpg" alt="Kullu Valley">
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  Kullu, often referred to as the "Valley of Gods," is known for its majestic hills covered with pine and deodar forests, and sprawling apple orchards. The district is famous for its festivals, traditional folk music, and vibrant cultural heritage.
</p>
<h3 class="text-2xl font-semibold text-gray-800 mb-2">Tourist Attractions</h3>
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  Kullu is home to many popular tourist spots including the Great Himalayan National Park, Raghunath Temple, and Bijli Mahadev. The nearby town of Manali is a major attraction for tourists looking for adventure activities like skiing, paragliding, and river rafting.
</p>
<h3 class="text-2xl font-semibold text-gray-800 mb-2">Cultural Heritage</h3>
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  The Kullu Dussehra festival is a grand event celebrated with much fervor and enthusiasm. The district is also known for its traditional handicrafts, particularly the Kullu shawls and caps, which are popular among tourists.
</p>
<h3 class="text-2xl font-semibold text-gray-800 mb-2">Natural Beauty</h3>
<p class="text-lg text-gray-700 mb-4 leading-relaxed">
  The scenic beauty of Kullu is unmatched, with its lush green valleys, snow-capped mountains, and clear rivers. The region offers numerous trekking and hiking trails, making it a favorite destination for adventure enthusiasts.
</p>
</section>`






    const reactElement=converthtml(kangra)    
    return (
        <div>
            <h1>{params}</h1>
            {reactElement}
        </div>
    )
}

export default DistrictLayout
