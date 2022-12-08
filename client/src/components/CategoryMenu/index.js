import React, {useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
// import { useStoreContext } from '../../utils/GlobalState';
// import {
//   UPDATE_CATEGORIES,
//   UPDATE_CURRENT_CATEGORY,
// } from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';



import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_CURRENT_CATEGORY, UPDATE_CATEGORIES  } from '../../utils/slices/categoriesSlice'

function CategoryMenu() {

//   const [state, dispatch] = useStoreContext();
//   const { categories } = useSelector((category)=> state.catergory)
  const state = useSelector((state) => state.category);
	const {categories} = state
console.log(categories)
  const dispatch= useDispatch();

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
console.log("1: before state =" , state, "categoryData = ", categoryData)
    if (categoryData) {
 console.log("2: if categoryData: state =" , state, "categoryData = ", categoryData)
//
      dispatch({
        type :UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });

//
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
console.log(categories, "this is CAREGORIES BOOBY BUUUSH")
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }console.log("3state =" , state, " categoryData = ", categoryData)
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
