// Nav.jsx

import React, { useState } from 'react';
import {Link, NavLink, useNavigate, useSearchParams} from 'react-router-dom'
import { Menu, Button, Drawer ,Dropdown,Select , Space} from 'antd';
import { HomeOutlined,DownOutlined, UserOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Logo from '../assets/Logo.png'

const Nav = () => {
  const [visible, setVisible] = useState(false);
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
  const showDrawer = () => {
    setVisible(true);
  };
  
  const onClose = () => {
    setVisible(false);
  };

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
    <nav className="bg-white shadow-md py-4 sticky top-0 z-10  shadow-gray-300 border-gray-200 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0">
            <img src={Logo} alt="Logo" className="h-8" />
          </Link>
          {/* Menu Toggle for Mobile */}
          <div className="block lg:hidden">
            <Button type="link" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </div>
          {/* Navigation Links */}
          <div className="hidden lg:flex gap-6 lg:justify-center lg:items-center">
          <Select
          className=''
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
          {/* Buttons */}
          <div className="hidden lg:flex lg:justify-end lg:items-center">
            <Button type="primary" className="mr-2">Sign Up</Button>
            <Button type="default">Log In</Button>
          </div>
        </div>
      </div>
      {/* Drawer for Mobile */}
      <Drawer
        title=""
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        className="lg:hidden"
      >
        <div className="flex justify-end">
          <Button type="link" onClick={onClose}>
            <CloseOutlined style={{ fontSize: '1.5rem' }} />
          </Button>
        </div>
        <img src={Logo} alt="Logo" className="h-8" />

        <ul class="flex flex-col gap-4 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
        <div className="mt-4">
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
          <Button type="primary" block className="mb-2" onClick={onClose}>Sign Up</Button>
          <Button type="default" block onClick={onClose}>Log In</Button>
        </div>
      </Drawer>
    </nav>
  );
}

export default Nav;
