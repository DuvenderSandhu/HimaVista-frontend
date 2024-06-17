import {Link, NavLink, useNavigate, useSearchParams} from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons';
import Logo from '../assets/Logo.png'
import { Dropdown,Select , Space } from 'antd';
const items = [
    {
      label: (
        <Link to={"/view/political"} rel="noopener noreferrer" >Political View</Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link to={"/view/political"} rel="noopener noreferrer" >Geographical View</Link>
      ),
      key: '1',
    },
    {
      label: (
        <Link to={"/view/political"} rel="noopener noreferrer" >Social View</Link>
      ),
      key: '2',
    },
    {
      label: (
        <Link to={"/view/political"} rel="noopener noreferrer" >Ecomonical View</Link>
      ),
      key: '3',
    },
    
  ];

  const districts = [
    {
      label: (
        <Link to={"/district/kangra"} rel="noopener noreferrer">Kangra</Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link to={"/district/solan"} rel="noopener noreferrer">Solan</Link>
      ),
      key: '1',
    },
    {
      label: (
        <Link to={"/district/shimla"} rel="noopener noreferrer">Shimla</Link>
      ),
      key: '2',
    },
    {
      label: (
        <Link to={"/district/kullu"} rel="noopener noreferrer">Kullu</Link>
      ),
      key: '3',
    },
    {
      label: (
        <Link to={"/district/chamba"} rel="noopener noreferrer">Chamba</Link>
      ),
      key: '4',
    },
    {
      label: (
        <Link to={"/district/mandi"} rel="noopener noreferrer">Mandi</Link>
      ),
      key: '5',
    },
    {
      label: (
        <Link to={"/district/bilaspur"} rel="noopener noreferrer">Bilaspur</Link>
      ),
      key: '6',
    },
    {
      label: (
        <Link to={"/district/hamirpur"} rel="noopener noreferrer">Hamirpur</Link>
      ),
      key: '7',
    },
    {
      label: (
        <Link to={"/district/una"} rel="noopener noreferrer">Una</Link>
      ),
      key: '8',
    },
    {
      label: (
        <Link to={"/district/sirmaur"} rel="noopener noreferrer">Sirmaur</Link>
      ),
      key: '9',
    },
    {
      label: (
        <Link to={"/district/kinnaur"} rel="noopener noreferrer">Kinnaur</Link>
      ),
      key: '10',
    },
    {
      label: (
        <Link to={"/district/lahaulspiti"} rel="noopener noreferrer">Lahaul and Spiti</Link>
      ),
      key: '11',
    }
  ];

  const usp = [
    {
      label: (
        <Link to={"/view/tourist-attractions"} rel="noopener noreferrer">Tourist Attractions</Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link to={"/view/cultural-events"} rel="noopener noreferrer">Cultural Events and Festivals</Link>
      ),
      key: '1',
    },
    {
      label: (
        <Link to={"/view/local-experiences"} rel="noopener noreferrer">Local Experiences</Link>
      ),
      key: '2',
    },
    {
      label: (
        <Link to={"/view/itineraries"} rel="noopener noreferrer">Travel Itineraries</Link>
      ),
      key: '3',
    },
    {
      label: (
        <Link to={"/view/food-recipes"} rel="noopener noreferrer">Local Food and Recipes</Link>
      ),
      key: '4',
    },
    {
      label: (
        <Link to={"/view/adventure"} rel="noopener noreferrer">Adventure Activities</Link>
      ),
      key: '5',
    },
    {
      label: (
        <Link to={"/view/handicrafts"} rel="noopener noreferrer">Local Handicrafts and Souvenirs</Link>
      ),
      key: '6',
    },
    {
      label: (
        <Link to={"/view/stories"} rel="noopener noreferrer">Historical and Mythological Stories</Link>
      ),
      key: '7',
    },
    {
      label: (
        <Link to={"/view/flora-fauna"} rel="noopener noreferrer">Local Flora and Fauna</Link>
      ),
      key: '8',
    },
    {
      label: (
        <Link to={"/view/community"} rel="noopener noreferrer">User-Generated Content</Link>
      ),
      key: '9',
    },
    {
      label: (
        <Link to={"/view/businesses"} rel="noopener noreferrer">Local Businesses Directory</Link>
      ),
      key: '10',
    }
  ];
  
  const travel = [
    {
      label: (
        <Link to={"/travel/tourist-attractions"} rel="noopener noreferrer">Tourist Attractions</Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link to={"/travel/itineraries"} rel="noopener noreferrer">Travel Itineraries</Link>
      ),
      key: '1',
    },
    {
      label: (
        <Link to={"/travel/adventure"} rel="noopener noreferrer">Adventure Activities</Link>
      ),
      key: '2',
    },
  ];

  const experience = [
    {
      label: (
        <Link to={"/experience/local-experiences"} rel="noopener noreferrer">Local Experiences</Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link to={"/experience/food-recipes"} rel="noopener noreferrer">Local Food and Recipes</Link>
      ),
      key: '1',
    },
    {
      label: (
        <Link to={"/experience/handicrafts"} rel="noopener noreferrer">Local Handicrafts and Souvenirs</Link>
      ),
      key: '2',
    },
    {
      label: (
        <Link to={"/experience/cultural-events"} rel="noopener noreferrer">Cultural Events and Festivals</Link>
      ),
      key: '3',
    },
  ];
  

  const guide = [
    {
      label: (
        <Link to={"/view/stories"} rel="noopener noreferrer">Historical and Mythological Stories</Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link to={"/view/flora-fauna"} rel="noopener noreferrer">Local Flora and Fauna</Link>
      ),
      key: '1',
    },
    {
      label: (
        <Link to={"/view/businesses"} rel="noopener noreferrer">Local Businesses Directory</Link>
      ),
      key: '2',
    },
    {
      label: (
        <Link to={"/view/community"} rel="noopener noreferrer">User-Generated Content</Link>
      ),
      key: '3',
    },
  ];
  
  
function Navbar(){
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate= useNavigate()
    const onChange = (value) => {
        setSearchParams({lang:value})
      };
      const onSearch = (value) => {
        setSearchParams({lang:value})
      };
      
      // Filter `option.label` match the user type `input`
      const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    return (
        <nav class="bg-white sticky top-0 z-10 shadow-md shadow-gray-300 border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} class="h-8" alt="HimaVista" />
        </Link>
        <Select
    showSearch
    placeholder="Blog Language"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={[
      {
        value: 'hindi',
        label: 'Hindi',
      },
      {
        value: 'english',
        label: 'English',
      }
    ]}
  />

        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{navigate('/localuser/login')}}>Local User</button>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{navigate('/user/login')}}>General User</button>
            <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <NavLink to="/" class={({isActive})=>{
                    isActive?"block py-2 px-3 md:p-0  text-blue-700 rounded md:bg-transparent  ":"block py-2 px-3 md:p-0  text-gray-900 rounded md:bg-transparent  "
                }} aria-current="page"><Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Views
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown></NavLink>
            </li>
            <li>
                <NavLink to="/" class={({isActive})=>{
                    isActive?"block py-2 px-3 md:p-0  text-blue-700 rounded md:bg-transparent  ":"block py-2 px-3 md:p-0  text-gray-900 rounded md:bg-transparent  "
                }} aria-current="page"><Dropdown
                menu={{
                  items:districts,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Know District More
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown></NavLink>
            </li>
            <li>
                <NavLink to="/" class={({isActive})=>{
                    isActive?"block py-2 px-3 md:p-0  text-blue-700 rounded md:bg-transparent  ":"block py-2 px-3 md:p-0  text-gray-900 rounded md:bg-transparent  "
                }} aria-current="page"><Dropdown
                menu={{
                  items:travel,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Travel
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown></NavLink>
            </li>
            <li>
                <NavLink to="/" class={({isActive})=>{
                    isActive?"block py-2 px-3 md:p-0  text-blue-700 rounded md:bg-transparent  ":"block py-2 px-3 md:p-0  text-gray-900 rounded md:bg-transparent  "
                }} aria-current="page"><Dropdown
                menu={{
                  items:experience,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Experience
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown></NavLink>
            </li>
            <li>
                <NavLink to="/" class={({isActive})=>{
                    isActive?"block py-2 px-3 md:p-0  text-blue-700 rounded md:bg-transparent  ":"block py-2 px-3 md:p-0  text-gray-900 rounded md:bg-transparent  "
                }} aria-current="page"><Dropdown
                menu={{
                  items:guide,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Guide
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown></NavLink>
            </li>
  </ul>
        </div>
        </div>
        </nav>
    )
}

export default Navbar