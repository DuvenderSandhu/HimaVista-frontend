import {Link} from 'react-router-dom'
function CardforBlogs(){
    const blogs = [
        {
          title: "The Traditional Attire of Himachal Pradesh",
          description: "Explore the vibrant and diverse traditional clothing worn by various ethnic groups in Himachal Pradesh, reflecting the rich cultural heritage of the region.",
          category: "Culture"
        },
        {
          title: "Celebrating Dussehra in Kullu",
          description: "Learn about the unique and grand celebration of Dussehra in Kullu, a festival that attracts visitors from all over the world.",
          category: "Festivals"
        },
        {
          title: "Intricate Wood Carvings of Himachal",
          description: "Delve into the exquisite wood carvings that are a hallmark of Himachali art, known for their intricate designs and craftsmanship.",
          category: "Art and Craft"
        },
        {
          title: "Savoring Chana Madra: A Himachali Delight",
          description: "Discover the rich and creamy Chana Madra, a traditional dish from Himachal Pradesh that is a must-try for food enthusiasts.",
          category: "Dishes"
        },
        {
          title: "Authentic Siddu Recipe: Step-by-Step Guide",
          description: "Follow our detailed recipe to make Siddu, a popular Himachali steamed bread, at home with ease.",
          category: "Recipes"
        },
        {
          title: "Top Restaurants for Himachali Cuisine",
          description: "Find out the best restaurants across Himachal Pradesh where you can enjoy authentic and delicious Himachali dishes.",
          category: "Restaurants"
        },
        {
          title: "Apple Orchards of Himachal Pradesh",
          description: "Learn about the thriving apple orchards in Himachal Pradesh, which produce some of the best apples in the country.",
          category: "Crops"
        },
        {
          title: "Sustainable Farming Practices in Himachal",
          description: "Explore the sustainable and organic farming practices adopted by farmers in Himachal Pradesh to preserve the environment.",
          category: "Farming Practices"
        },
        {
          title: "Top Agricultural Products of Himachal Pradesh",
          description: "Discover the range of high-quality agricultural products that come from Himachal Pradesh, including fresh fruits, vegetables, and dairy products.",
          category: "Agricultural Products"
        },
        {
          title: "Handmade Shawls from Kullu",
          description: "Support local artisans by purchasing beautifully crafted woolen shawls from Kullu, known for their intricate designs and warmth.",
          category: "Handicrafts"
        },
        {
          title: "Organic Honey from Himachal",
          description: "Experience the rich and pure taste of organic honey produced in the pristine environment of Himachal Pradesh.",
          category: "Food Products"
        }
      ];
      
    return (
        

<div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

    <div >
        {blogs.map(e=>{
            return (
                <div key={e.title.replace(' ','-')} class="border m-auto my-4 w-4/5 border-gray-200  p-4 bg-white rounded-lg md:p-8  dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
            <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{e.title} <super class="text-sm text-red-500">{e.category}</super></h2>
            <p class="mb-3 text-gray-500 dark:text-gray-400">{e.description}</p>
            <Link to={`/blog/${e.title.replaceAll(' ','-')}`} class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                Read Whole
                <svg class=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
            </Link>
        </div>
            )
        })}
       
    </div>
</div>

    )
}

export default CardforBlogs