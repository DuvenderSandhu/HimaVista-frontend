import {Link} from 'react-router-dom'
function Tab(){
    let tabs=[
        {name:"Culture"},
        {name:"Clothing"},
        {name:"Art and Craft"},
        {name:"Dishes"},
        {name:"Recipes"},
        {name:"Agriculture"},
        {name:"Handicraft"},
        {name:"Stories"},
        {name:"News"},
    ]
    return (
        

<>
<ul class="flex sticky top-20 bg-white flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    {tabs.map((e)=>{return (
        <li class="me-2 cursor-pointer">
        
        <Link to="/" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">{e.name}</Link>
    </li>
    )})}
    <hr />
    {/* <li class="me-2">
        <a href="#" aria-current="page" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Dashboard</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Settings</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Contacts</a>
    </li>
    <li>
        <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
    </li> */}
</ul>

</>
    )
}

export default Tab