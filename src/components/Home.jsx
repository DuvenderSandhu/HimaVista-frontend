import  Slider  from "./Slider"
import CardLayout from "./Card"
import Social from '../assets/political.jpg'
import Political from '../assets/political sabha.jpg'
import Geographical from '../assets/geographical.jpg'
import Video from '../assets/videos/drone.mp4'
import ImageDisplay from "./ImageShower"
import { Typography } from 'antd';
function Home() {
    const culture= [
      {title:"Traditional Clothing",Imageurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Nati_Dance_Costume%2C_Kangra%2C_Himachal_Pradesh%2C_India.jpg/800px-Nati_Dance_Costume%2C_Kangra%2C_Himachal_Pradesh%2C_India.jpg?20220228073221",desc:"Discover the traditional attire of Himachal Pradesh, from vibrant Pahari caps and woolen shawls to the distinctive dresses of various ethnic groups, reflecting the rich cultural heritage of the region."},
      {title:"Festival",Imageurl:"https://www.tourmyindia.com/states/himachal/images/fairs-festivals-himachal.jpg",desc:"Explore the colorful festivals of Himachal Pradesh, such as Dussehra, Diwali, and the unique local fairs and celebrations that showcase the state's diverse traditions and communal harmony."},
      {title:"Arts and Crafts",Imageurl:"http://hptdc.in/wp-content/uploads/2019/06/chamba_rumaal.jpg",desc:"Delve into the exquisite art and craft of Himachal Pradesh, renowned for its intricate wood carvings, Chamba rumals, Kangra paintings, and beautifully crafted metal and stone work."}
    ]
    const views = [
      {
        title: "Political View",
        // Imageurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Nati_Dance_Costume%2C_Kangra%2C_Himachal_Pradesh%2C_India.jpg/800px-Nati_Dance_Costume%2C_Kangra%2C_Himachal_Pradesh%2C_India.jpg?20220228073221",
        Imageurl:Political,
        desc: "Understand the political landscape of Himachal Pradesh, from its administrative divisions to the key political figures and parties shaping the region's governance.",
        link:"/view/political"
      },
      {
        title: "Geographical and Social View",
        // Imageurl: "http://hptdc.in/wp-content/uploads/2019/06/chamba_rumaal.jpg",
        Imageurl:Geographical,
        desc: "Explore the diverse geography of Himachal Pradesh, from its towering Himalayas to lush valleys, and learn about the social fabric that includes various communities and their vibrant cultural practices.",
        link:"/view/geographic"

      },
      {
        title: "Economical View",
        // Imageurl: "https://www.tourmyindia.com/states/himachal/images/fairs-festivals-himachal.jpg",
        Imageurl:Social,
        desc: "Delve into the economy of Himachal Pradesh, focusing on its agricultural practices, key industries, tourism, and the economic impact of its festivals and fairs.",
        link:"/view/economic"
      }
    ];
    
    const cuisine= [
      {title:"Dishes",Imageurl:"https://www.fabhotels.com/blog/wp-content/uploads/2022/07/himachali-dham-2-1.jpg",desc:"Savor the flavors of Himachal Pradesh with its unique culinary delights, including traditional dishes like Chana Madra, Siddu, Babru, and Dham that offer a taste of the local culture."},
      {title:"Recipes",Imageurl:"https://elginhall.com/blog/wp-content/uploads/2023/04/image-2.jpeg",desc:"Get access to authentic Himachali recipes that allow you to recreate the traditional dishes at home, with detailed instructions and tips for perfecting these regional specialties."},
      {title:"Restaurants",Imageurl:"https://lh3.googleusercontent.com/p/AF1QipONpdeIgLpsW4746tQVDLm8Sh3vN7I1xEHZ1KxW=s680-w680-h510",desc:"Find the best places to enjoy Himachali cuisine across the state, from quaint roadside dhabas to elegant restaurants, each offering a unique dining experience."}
    ]
    return (
      <>
      <Slider/>
  {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white underline text-center">Images</h5>
      <ImageDisplay/> */}
  <div>
  <Typography.Title level={2} className="font-bold text-center my-4 underline">Himachal Darshan</Typography.Title>
  <div className='flex flex-wrap justify-center items-center gap-4'>
      {views.map(e=><CardLayout title={e.title} desc={e.desc} Imageurl={e.Imageurl} link={e.link} />)}
  </div>  
  <Typography.Title level={2} className="font-bold text-center my-4 underline">Explore Culture</Typography.Title>
  <div className='flex flex-wrap justify-center items-center gap-4'>
      {culture.map(e=><CardLayout title={e.title} desc={e.desc} Imageurl={e.Imageurl} />)}
  </div>  
  </div>
  <div>
  <Typography.Title level={2} className="font-bold text-center my-4 underline">Explore Cuisine</Typography.Title>
  <div className='flex flex-wrap justify-center items-center gap-4'>
      {cuisine.map(e=><CardLayout title={e.title} desc={e.desc} Imageurl={e.Imageurl} />)}
  </div>  
  </div>
      </>
  
    )
  }

  export default Home