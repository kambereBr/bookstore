import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.categories);
  useEffect(() => {
    dispadispatchtch(checkStatus());
  }, [categories]);
  return (
    <div>{categories}</div>
  );
};

export default Categories;
