import {useSelector} from "react-redux";
import {getAllCategories} from "../../../redux/store";
import {NavLink} from "react-router-dom";
import {clsx} from "clsx";

const Categories = props => {
  const categories = useSelector(state => getAllCategories(state));

  return (
    <div>
      {categories.map(category =>
        <NavLink to={'/categories/'+category.toLowerCase()}
                 className={clsx('d-block', 'w-100', 'p-2', 'border', 'border-2')}
        >{category}</NavLink>)}
    </div>
  )
}

export default Categories;