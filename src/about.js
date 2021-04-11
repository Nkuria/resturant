import tableImge from './assets/images/pexels-ella-olsson-1640777.jpg';

function aboutPage(body) {
  const aboutContainer = document.createElement('div');
  body.appendChild(aboutContainer);
  aboutContainer.classList.add('about-container');

  const backImg = document.createElement('img');
  backImg.classList.add('back-img');
  backImg.src = tableImge;
  aboutContainer.appendChild(backImg);

  const aboutPar = document.createElement('p');
  aboutPar.classList.add('about-par');
  const aboutParText = document.createTextNode(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia lobortis magna quis pulvinar. Maecenas eleifend lectus vitae lobortis auctor. Fusce lorem orci, blandit a euismod sit amet, hendrerit in nunc. Suspendisse potenti. Nulla ac dui mauris. Pellentesque at nulla sed enim iaculis semper. Quisque vitae sodales tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer non neque id turpis scelerisque sagittis sit amet sed turpis. Maecenas at fermentum orci. Sed augue urna, congue at tellus sed, auctor pretium nisi. Curabitur venenatis ante hendrerit odio efficitur, vitae auctor justo lobortis. Ut lacinia venenatis dapibus. Nam eget ullamcorper. ',
  );
  aboutPar.appendChild(aboutParText);
  aboutContainer.appendChild(aboutPar);
}
export { aboutPage as default };
