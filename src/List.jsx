function List() {
  const fruits = [
    {
      id: 1,
      name: "apple",
      calories: 95,
    },
    {
      id: 2,
      name: "orange",
      calories: 45,
    },
    {
      id: 3,
      name: "banana",
      calories: 105,
    },
    {
      id: 4,
      name: "coconut",
      calories: 159,
    },
    {
      id: 5,
      name: "pineapple",
      calories: 37,
    },
  ];


  

  return (
    <>
      <h2>Fruit list</h2>
      <ol>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name}: <b>{fruit.calories}</b>
          </li>
        ))}
      </ol>
    </>
  );
}

export default List;
