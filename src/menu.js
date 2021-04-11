import {
  mainFood,
  salads,
  drinks,
  deserts,
} from './menuObject';

function menuPage(body) {
  // const body = document.getElementById('content')
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  body.appendChild(menuContainer);

  const menuHeader = document.createElement('h3');
  const menuHeaderText = document.createTextNode('Discover');
  menuHeader.appendChild(menuHeaderText);
  menuHeader.classList.add('menu-header');
  menuContainer.appendChild(menuHeader);

  const menuHeader2 = document.createElement('h2');
  const menuHeader2Text = document.createTextNode('Our Main Food Menu');
  menuHeader2.appendChild(menuHeader2Text);
  menuHeader2.classList.add('menu-header2');
  menuContainer.appendChild(menuHeader2);

  function foodLoops() {
    const foodContainer = document.createElement('div');
    foodContainer.classList.add('food-container');
    menuContainer.appendChild(foodContainer);

    const leftMenu = document.createElement('div');
    leftMenu.classList.add('left-menu');
    foodContainer.appendChild(leftMenu);

    function MainFoodPart() {
      const MainFoodHeader = document.createElement('h3');
      MainFoodHeader.classList.add('food-header');
      const MainFoodHeaderText = document.createTextNode('Main Course');
      MainFoodHeader.appendChild(MainFoodHeaderText);
      leftMenu.appendChild(MainFoodHeader);

      for (let i = 0; i < salads.length; i += 1) {
        const saladName = document.createElement('p');
        const saladNameText = document.createTextNode(
          `${mainFood[i].name
          }...................................................${
            mainFood[i].price}`,
        );
        saladName.classList.add('salad-name');
        saladName.appendChild(saladNameText);
        leftMenu.appendChild(saladName);

        const saladIng = document.createElement('p');
        const saladIngText = document.createTextNode(mainFood[i].ingredients);
        saladIng.classList.add('salad-ing');
        saladIng.appendChild(saladIngText);
        leftMenu.appendChild(saladIng);
      }
    }

    function desertsPart() {
      const MainFoodHeader = document.createElement('h3');
      MainFoodHeader.classList.add('food-header');
      const MainFoodHeaderText = document.createTextNode('Deserts');
      MainFoodHeader.appendChild(MainFoodHeaderText);
      leftMenu.appendChild(MainFoodHeader);

      for (let i = 0; i < salads.length; i += 1) {
        const saladName = document.createElement('p');
        const saladNameText = document.createTextNode(
          `${deserts[i].name
          }...................................................${
            deserts[i].price}`,
        );
        saladName.classList.add('salad-name');
        saladName.appendChild(saladNameText);
        leftMenu.appendChild(saladName);

        const saladIng = document.createElement('p');
        const saladIngText = document.createTextNode(deserts[i].ingredients);
        saladIng.classList.add('salad-ing');
        saladIng.appendChild(saladIngText);
        leftMenu.appendChild(saladIng);
      }
    }

    const rightMenu = document.createElement('div');
    leftMenu.classList.add('right-menu');
    foodContainer.appendChild(rightMenu);

    function drinksPart() {
      const MainFoodHeader = document.createElement('h3');
      MainFoodHeader.classList.add('food-header');
      const MainFoodHeaderText = document.createTextNode('Drinks');
      MainFoodHeader.appendChild(MainFoodHeaderText);
      rightMenu.appendChild(MainFoodHeader);

      for (let i = 0; i < salads.length; i += 1) {
        const saladName = document.createElement('p');
        const saladNameText = document.createTextNode(
          `${drinks[i].name
          }...................................................${
            drinks[i].price}`,
        );
        saladName.classList.add('salad-name');
        saladName.appendChild(saladNameText);
        rightMenu.appendChild(saladName);

        const saladIng = document.createElement('p');
        const saladIngText = document.createTextNode(drinks[i].ingredients);
        saladIng.classList.add('salad-ing');
        saladIng.appendChild(saladIngText);
        rightMenu.appendChild(saladIng);
      }
    }

    function saladsPart() {
      const MainFoodHeader = document.createElement('h3');
      MainFoodHeader.classList.add('food-header');
      const MainFoodHeaderText = document.createTextNode('Salads');
      MainFoodHeader.appendChild(MainFoodHeaderText);
      rightMenu.appendChild(MainFoodHeader);

      for (let i = 0; i < salads.length; i += 1) {
        const saladName = document.createElement('p');
        const saladNameText = document.createTextNode(
          `${salads[i].name
          }...................................................${
            salads[i].price}`,
        );
        saladName.classList.add('salad-name');
        saladName.appendChild(saladNameText);
        rightMenu.appendChild(saladName);

        const saladIng = document.createElement('p');
        const saladIngText = document.createTextNode(salads[i].ingredients);
        saladIng.classList.add('salad-ing');
        saladIng.appendChild(saladIngText);
        rightMenu.appendChild(saladIng);
      }
    }

    MainFoodPart();
    desertsPart();
    drinksPart();
    saladsPart();
  }
  foodLoops();
}
export { menuPage as default };
