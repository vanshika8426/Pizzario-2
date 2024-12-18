import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>
            Explore our diverse menu, where every pizza is crafted to perfection. 
            Whether you're craving classic favorites or looking to try something new, 
            our menu offers a wide range of options to satisfy every palate. 
            Browse through our selection to discover a variety of toppings, crusts, 
            and sizes that cater to your taste. From vegetarian delights to meaty indulgences, 
            and from traditional flavors to gourmet creations, there's something for everyone. 
            Dive into our menu and find the perfect pizza for any occasion.
        </p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return (
                    <div key={index} onClick={()=>setCategory(prev=>prev === item.menu_name?"All":item.menu_name)} className="explore-menu-list-item">
                        <img className={category === item.menu_name? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p> 
                    </div>
                )
            })}
        </div>
    </div>
    // <hr />
  )
}

export default ExploreMenu



// import React from 'react'
// import './ExploreMenu.css'
// import { menu_list } from '../../assets/assets'

// const ExploreMenu = ({ category, setCategory }) => {
//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore our menu</h1>
//       <p className='explore-menu-text'>
//         Explore our diverse menu, where every pizza is crafted to perfection. 
//         Whether you're craving classic favorites or looking to try something new, 
//         our menu offers a wide range of options to satisfy every palate. 
//         Browse through our selection to discover a variety of toppings, crusts, 
//         and sizes that cater to your taste. From vegetarian delights to meaty indulgences, 
//         and from traditional flavors to gourmet creations, there's something for everyone. 
//         Dive into our menu and find the perfect pizza for any occasion.
//       </p>
//       <div className="explore-menu-list">
//         {menu_list.map((item, index) => {
//           return (
//             <div style={{ display: 'block', backgroundColor: 'lightgrey' }} onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
//                  key={index} 
//                  className="explore-menu-list-item">
//               <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
//               <p>{item.menu_name}</p>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default ExploreMenu
