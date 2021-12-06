import React, {memo, useState} from 'react';
import PropTypes from "prop-types";
import PizzaBlock from "./PizzaBlock";

const Categories = memo(({activeCategory, items, onClickCategory}) => {

    if (!items) {
        return (
            <div>
                loading...
            </div>
        )
    }

    console.log(items)
    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onClickCategory(null)}
                    className={activeCategory === null ? "active" : ""}>Все
                </li>
                {
                    items.map((name, index) =>
                        <li
                            className={activeCategory === index ? 'active' : ""}
                            onClick={() => onClickCategory(index)}
                            key={`${name}_${index}`}>
                            {name}
                        </li>
                    )
                }
            </ul>
        </div>
    );
});


Categories.propTypes = {
    // activeCategory : PropTypes.oneOf([PropTypes.number,null]),
    items : PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func
};

Categories.defaultProps = {
   activeCategory: null,
    items : []
};

export default Categories;