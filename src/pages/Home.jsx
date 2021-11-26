import React from 'react';
import {Categories, SortPopup, PizzaBlock} from "../components";

const Home = ({pizzas}) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={[
                        'Мясные',
                        'Вегетарианская',
                        'Гриль',
                        'Острые',
                        'Закрытые'
                    ]}
                    onClick={(name)=>alert(name)}
                />
                <SortPopup
                    items={[
                        'популярности',
                        'по цене',
                        'по алфавиту'
                    ]}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    pizzas &&
                        pizzas.map((pizza)=>(
                            <PizzaBlock key={pizza.id} {...pizza}/>
                        ))
                }
            </div>
        </div>
    );
};

export default Home;