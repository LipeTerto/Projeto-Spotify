import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const Itemlist = ({ title, items, itemsArray, path, idPath }) => {
  /*console.log(title);*/

  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const finalItens = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>

        {isHome ? (
          <Link to={path} className="item-list__link" href={path}>
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItens)
          .map((currObj, index) => (
            <SingleItem
              idPath={idPath}
              {...currObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default Itemlist;
