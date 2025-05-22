// import React from 'react'
// import classes from "./catagory.module.css";

// function CategoryCard({data}) {
//   return (
//     <div className={classes.catagory}>
//       <a href="">
//         <span>
//           <h2>{data.title}</h2>
//         </span>
//         <img src={data.imgLink} alt="" />
//         <p>shop now</p>
//       </a>
//     </div>
//   );
// }

// export default CategoryCard


import React from "react";
import classes from "./catagory.module.css"; // Fix typo

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <a href={`/${data.name}`}>
        {" "}
        {/* Added dynamic link */}
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
