import Card from "./Card";
import Tab from "./Tab";
import ABC from '../assets/abc.mp4'

function Videos(){
  const videos = [
    {
      title: "Traditional Himachali Dance Performances",
      description: "Watch captivating performances of traditional Himachali dances, showcasing the vibrant cultural heritage of the region.",
      category: "Culture",
      url: ABC
    },
    {
      title: "Kullu Dussehra Festival Highlights",
      description: "Experience the grandeur of the Kullu Dussehra festival through this highlight video, capturing the essence of the celebrations.",
      category: "Festivals",
      url: ABC

    },
    {
      title: "Crafting Himachali Wood Carvings",
      description: "Discover the intricate process of creating traditional Himachali wood carvings, a testament to the region's skilled craftsmanship.",
      category: "Art and Craft",
      url: ABC
    },
    {
      title: "Making Chana Madra: A Step-by-Step Guide",
      description: "Follow this step-by-step video guide to making Chana Madra, a beloved Himachali dish, in your own kitchen.",
      category: "Recipes",
      url: ABC

    },
    {
      title: "Exploring Himachali Restaurants",
      description: "Join us on a tour of some of the best restaurants in Himachal Pradesh, known for their authentic Himachali cuisine.",
      category: "Restaurants",
      url: ABC
      
    },
    {
      title: "Apple Harvesting in Himachal Pradesh",
      description: "Take a glimpse into the apple harvesting process in Himachal Pradesh, highlighting the hard work and dedication of local farmers.",
      category: "Crops",
      url: ABC
      
    },
    {
      title: "Sustainable Farming Practices",
      description: "Learn about the sustainable and organic farming practices adopted by farmers in Himachal Pradesh to protect the environment.",
      category: "Farming Practices",
      url: ABC
      
    },
    {
      title: "Handicraft Production in Himachal",
      description: "Watch artisans at work as they create beautiful handicrafts, showcasing the traditional skills and creativity of Himachal Pradesh.",
      category: "Handicrafts",
      url: ABC
      
    },
    {
      title: "Organic Honey Production",
      description: "Explore the process of organic honey production in Himachal Pradesh, from bee farming to harvesting pure, natural honey.",
      category: "Food Products",
      url: ABC
      
    },
    {
      title: "Himachali Siddu Recipe Video",
      description: "Learn how to make Siddu, a traditional steamed bread from Himachal Pradesh, with this easy-to-follow video recipe.",
      category: "Recipes",
      url: ABC
      
    }
  ];
  
    return (
        <>
        <Tab/>
        <div className="flex flex-wrap">
        {videos.map(e=><Card title={e.title} VideoUrl={e.url}/>)}
        </div>
        </>
    )
}

export default Videos