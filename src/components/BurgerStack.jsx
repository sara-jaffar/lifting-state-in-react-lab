const BurgerStack = (props) => {
  const { stack, RemoveFromBurger } = props;
  return (
    <>
    {
         (stack.length === 0) ? <p>No ingredient added yet</p> : (
        <ul>
        {stack.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
                {ingredient.name}
                <button onClick={() => RemoveFromBurger(ingredient)}>-</button>
            </li>
        ))}
        </ul>
    )
    }
    </>
  )
};

export default BurgerStack;