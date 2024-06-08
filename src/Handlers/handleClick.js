export default function handleClick() {
  const bgImages = ['bear', 'bird', 'cat', 'cow', 'dog'];
  const randNum = Math.floor(Math.random() * bgImages.length);
  const selectedImage = `url(/img/${bgImages[randNum]}.jpg)`;

  document.body.style.backgroundImage = selectedImage;
  console.log('클릭됨!!!!!');
}
