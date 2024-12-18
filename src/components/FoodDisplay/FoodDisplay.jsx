
// import React, { useContext } from 'react';
// import './FoodDisplay.css';
// import { StoreContext } from '../../context/StoreContext';
// import FoodItemComponent from '../../components/FoodItem/FoodItem'; // Updated import

// const FoodDisplay = ({ category }) => {
//     const { food_list } = useContext(StoreContext);
    
//     return (
//         <div className='food-display' id='food-display'>
//             <h2>Top Pizzas near you</h2>
//             <div className="food-display-list">
//                 {food_list.map((item, index) => {
//                     if(category==="All" || category===item.category){
//                       return <FoodItemComponent 
//                         key={index} 
//                         id={item._id} 
//                         name={item.name} 
//                         description={item.description} 
//                         price={item.price} 
//                         image={item.image} 
//                     />
//                     }
                    
//                 })}
//             </div>
//         </div>
//     );
// }

// export default FoodDisplay;



import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItemComponent from '../../components/FoodItem/FoodItem'; 

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    const filteredFoodList = category === "All" 
        ? food_list 
        : food_list.filter((item) => item.category === category);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Pizzas near you</h2>
            <div className="food-display-list">
                {filteredFoodList.length === 0 ? (
                    <p>No pizzas available for the selected category.</p>
                ) : (
                    filteredFoodList.map((item) => (
                        <FoodItemComponent 
                            key={item._id} 
                            id={item._id} 
                            name={item.name} 
                            description={item.description} 
                            price={item.price} 
                            image={item.image} 
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default FoodDisplay;
