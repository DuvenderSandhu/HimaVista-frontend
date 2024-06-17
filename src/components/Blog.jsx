import { useEffect } from "react";
import { useParams } from "react-router-dom";


function Blog(){
    let params= (useParams().blogID)
    const blogs = [
        {
          title: "The Traditional Attire of Himachal Pradesh",
          description: "Explore the vibrant and diverse traditional clothing worn by various ethnic groups in Himachal Pradesh, reflecting the rich cultural heritage of the region.",
          category: "Culture",
          content: `
          <textarea id="basic-example">
          <p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128"></p>
          <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
        
          <h2>Got questions or need help?</h2>
        
          <ul>
            <li>Our <a href="https://www.tiny.cloud/docs/tinymce/6/">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
            <li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li>
            <li>We also offer enterprise grade support as part of <a href="https://www.tiny.cloud/pricing">TinyMCE premium plans</a>.</li>
          </ul>
        
          <h2>A simple table to play with</h2>
        
          <table style="border-collapse: collapse; width: 100%;" border="1">
            <thead>
              <tr>
                <th>Product</th>
                <th>Cost</th>
                <th>Really?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TinyMCE</td>
                <td>Free</td>
                <td>YES!</td>
              </tr>
              <tr>
                <td>Plupload</td>
                <td>Free</td>
                <td>YES!</td>
              </tr>
            </tbody>
          </table>
        
          <h2>Found a bug?</h2>
        
          <p>
            If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.
          </p>
        
          <h2>Finally ...</h2>
        
          <p>
            Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.
          </p>
          <p>
            Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.
          </p>
        </textarea>
          `
        },
        {
          title: "Celebrating Dussehra in Kullu",
          description: "Learn about the unique and grand celebration of Dussehra in Kullu, a festival that attracts visitors from all over the world.",
          category: "Festivals",
          content: `
            <h2>Celebrating Dussehra in Kullu</h2>
            <p>Learn about the unique and grand celebration of Dussehra in Kullu, a festival that attracts visitors from all over the world.</p>
            <img src="https://example.com/kullu-dussehra.jpg" alt="Kullu Dussehra">
            <p>Kullu Dussehra is celebrated with immense fervor and enthusiasm, featuring a week-long cultural extravaganza that showcases the rich traditions of the region.</p>
          `
        },
        {
          title: "Intricate Wood Carvings of Himachal",
          description: "Delve into the exquisite wood carvings that are a hallmark of Himachali art, known for their intricate designs and craftsmanship.",
          category: "Art and Craft",
          content: `
            <h2>Intricate Wood Carvings of Himachal</h2>
            <p>Delve into the exquisite wood carvings that are a hallmark of Himachali art, known for their intricate designs and craftsmanship.</p>
            <img src="https://example.com/wood-carvings.jpg" alt="Wood Carvings">
            <p>Himachali wood carvings are renowned for their intricate patterns and artistic value, reflecting the skilled craftsmanship passed down through generations.</p>
          `
        },
        {
          title: "Savoring Chana Madra: A Himachali Delight",
          description: "Discover the rich and creamy Chana Madra, a traditional dish from Himachal Pradesh that is a must-try for food enthusiasts.",
          category: "Dishes",
          content: `
            <h2>Savoring Chana Madra: A Himachali Delight</h2>
            <p>Discover the rich and creamy Chana Madra, a traditional dish from Himachal Pradesh that is a must-try for food enthusiasts.</p>
            <img src="https://example.com/chana-madra.jpg" alt="Chana Madra">
            <p>Chana Madra is a popular Himachali dish made with chickpeas cooked in a yogurt-based gravy, seasoned with a blend of aromatic spices.</p>
          `
        },
        {
          title: "Authentic Siddu Recipe: Step-by-Step Guide",
          description: "Follow our detailed recipe to make Siddu, a popular Himachali steamed bread, at home with ease.",
          category: "Recipes",
          content: `
            <h2>Authentic Siddu Recipe: Step-by-Step Guide</h2>
            <p>Follow our detailed recipe to make Siddu, a popular Himachali steamed bread, at home with ease.</p>
            <img src="https://example.com/siddu.jpg" alt="Siddu">
            <p>Siddu is a traditional steamed bread from Himachal Pradesh, typically served with ghee or dal. Our recipe guide provides step-by-step instructions for perfect results.</p>
          `
        },
        {
          title: "Top Restaurants for Himachali Cuisine",
          description: "Find out the best restaurants across Himachal Pradesh where you can enjoy authentic and delicious Himachali dishes.",
          category: "Restaurants",
          content: `
            <h2>Top Restaurants for Himachali Cuisine</h2>
            <p>Find out the best restaurants across Himachal Pradesh where you can enjoy authentic and delicious Himachali dishes.</p>
            <img src="https://example.com/himachali-cuisine.jpg" alt="Himachali Cuisine">
            <p>From quaint roadside dhabas to elegant eateries, discover the top places to relish traditional Himachali cuisine and enjoy a memorable dining experience.</p>
          `
        },
        {
          title: "Apple Orchards of Himachal Pradesh",
          description: "Learn about the thriving apple orchards in Himachal Pradesh, which produce some of the best apples in the country.",
          category: "Crops",
          content: `
            <h2>Apple Orchards of Himachal Pradesh</h2>
            <p>Learn about the thriving apple orchards in Himachal Pradesh, which produce some of the best apples in the country.</p>
            <img src="https://example.com/apple-orchards.jpg" alt="Apple Orchards">
            <p>Himachal Pradesh is renowned for its apple orchards, producing a variety of apples known for their taste and quality, contributing significantly to the state's economy.</p>
          `
        },
        {
          title: "Sustainable Farming Practices in Himachal",
          description: "Explore the sustainable and organic farming practices adopted by farmers in Himachal Pradesh to preserve the environment.",
          category: "Farming Practices",
          content: `
            <h2>Sustainable Farming Practices in Himachal</h2>
            <p>Explore the sustainable and organic farming practices adopted by farmers in Himachal Pradesh to preserve the environment.</p>
            <img src="https://example.com/farming-practices.jpg" alt="Farming Practices">
            <p>Farmers in Himachal Pradesh utilize sustainable and organic methods to cultivate crops, ensuring environmental conservation and producing high-quality agricultural products.</p>
          `
        },
        {
          title: "Top Agricultural Products of Himachal Pradesh",
          description: "Discover the range of high-quality agricultural products that come from Himachal Pradesh, including fresh fruits, vegetables, and dairy products.",
          category: "Agricultural Products",
          content: `
            <h2>Top Agricultural Products of Himachal Pradesh</h2>
            <p>Discover the range of high-quality agricultural products that come from Himachal Pradesh, including fresh fruits, vegetables, and dairy products.</p>
            <img src="https://example.com/agricultural-products.jpg" alt="Agricultural Products">
            <p>Himachal Pradesh is known for its fresh and high-quality agricultural products, including a variety of fruits, vegetables, and dairy items that are widely sought after.</p>
          `
        },
        {
          title: "Handmade Shawls from Kullu",
          description: "Support local artisans by purchasing beautifully crafted woolen shawls from Kullu, known for their intricate designs and warmth.",
          category: "Handicrafts",
          content: `
            <h2>Handmade Shawls from Kullu</h2>
            <p>Support local artisans by purchasing beautifully crafted woolen shawls from Kullu, known for their intricate designs and warmth.</p>
            <img src="https://example.com/kullu-shawls.jpg" alt="Kullu Shawls">
            <p>Kullu shawls are a symbol of Himachali craftsmanship, made from high-quality wool and featuring intricate patterns that reflect the region's artistic heritage.</p>
          `
        },
        {
          title: "Organic Honey from Himachal",
          description: "Experience the rich and pure taste of organic honey produced in the pristine environment of Himachal Pradesh.",
          category: "Food Products",
          content: `
            <h2>Organic Honey from Himachal</h2>
            <p>Experience the rich and pure taste of organic honey produced in the pristine environment of Himachal Pradesh.</p>
            <img src="https://example.com/organic-honey.jpg" alt="Organic Honey">
            <p>Himachal Pradesh offers some of the finest organic honey, harvested from the pristine and pollution-free environments, ensuring purity and rich taste.</p>
          `
        }
      ];
      
    let currentBlog=blogs.filter(e=>e.title.replaceAll(" ","-")==params)
    console.log(params)
    console.log(currentBlog)
    useEffect(()=>{
    document.querySelector('.content').innerHTML= currentBlog[0].content
    },[])
    return (
        <div>
<h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center my-4">{currentBlog[0].title}</h2>
        <div className="content" >
            {currentBlog[0].content}
        </div>

        </div>


    )
}

export default Blog