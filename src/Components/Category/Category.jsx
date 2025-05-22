// import React from 'react'
// import { categoryInfos } from './catagoryFullInfos'
// import CategoryCard from './CategoryCard'
// import classes from "./catagory.module.css";

// function Category() {
//   return (
//     <section className={classes.Category__container}>
//         {
//             categoryInfos.map((infos)=>{
//                 <CategoryCard data = {infos}/>
//             })

//         }
//     </section>
//   )
// }

// export default Category

import React from "react";
import { CategoryInfos } from "./catagoryFullInfos"; // Fix typo in filename
import CategoryCard from "./CategoryCard";
import classes from "./catagory.module.css"; // Fix typo in filename

function Category() {
  return (
    <section className={classes.category__container}>
      {CategoryInfos.map((infos) => (
        <CategoryCard data={infos} key={infos.name} />
      ))}
    </section>
  );
}

export default Category;
