import React, {useState} from 'react';

const Categories = ({items, onClick}) => {

    const [state, setState] = useState(null);

    const onSelectItem = (index) =>{
        setState(index);

    }

    if (!items){
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
                    onClick={()=>onSelectItem(null)}

                    className={state === null ? "active" : ""}>Все</li>
                {
                    items.map((name, index) =>
                        <li
                            className={state === index ? 'active' : ""}
                            onClick={() => onSelectItem(index)}
                            key={`${name}_${index}`}>
                            {name}
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Categories;