import React, {useCallback, useEffect} from 'react';
import {Categories, SortPopup, PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";
import LoadingBlock from "../components/PizzaBlock/LoadingBlock";

const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
];

const sortItems = [
    {name: 'популярности', type: 'popular',order:'desc'},
    {name: 'по цене', type: 'price',order:'desc'},
    {name: 'по алфавиту', type: 'name',order:'asc'}
];

function Home() {

    const dispatch = useDispatch();
    const pizzas = useSelector(({pizzas}) => pizzas.items);
    const cartItems = useSelector(({cart})=>cart.items);
    const isLoaded = useSelector(({pizzas})=>pizzas.isLoaded);
    const {category,sortBy} = useSelector(({filters})=>filters);

    useEffect(() => {
            dispatch(fetchPizzas(sortBy,category));
    }, [category,sortBy]);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    },[]);

    const onSelectSortType = useCallback((type) =>{
        dispatch(setSortBy(type))
        },[]);

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    items={categoryNames}
                    onClickCategory={onSelectCategory}
                />
                <SortPopup
                    onClickSortType={onSelectSortType}
                    activeSortType={sortBy.type}
                    items={sortItems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                        ?
                    pizzas.map((pizza) => (
                        <PizzaBlock onClickAddPizza={handleAddPizzaToCart} cartPizzaCount={cartItems[pizza.id] && cartItems[pizza.id].items.length} key={pizza.id} {...pizza}/>
                    ))
                        :
                        Array(10).fill(0).map((_, index)=><LoadingBlock key={index}/>)
                }
            </div>
        </div>
    );
}

export default Home;