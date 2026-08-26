export default function decorate(block) {
  // spread operator[...] ==> all the direct children inside the block
  const cards = [...block.children];
  //  card ==> parameter of the function
  //  cards==> [card1,card2,card3,card4, etc]
  cards.forEach((card) => {
    //  ?. ==> optional chaining operator(if condition)
    card?.classList.add('custom-card1');
    const carditem = card.querySelector('div');
    carditem?.classList.add('custom-card1-item');
    const cardimg = card.querySelector('p:has(img)');
    cardimg?.classList.add('custom-card1-img');
    const cardnumber = card.querySelector('p:not(:has(img))');
    cardnumber?.classList.add('custom-card1-content');
    const cardtitle = card.querySelector('h2');
    cardtitle?.classList.add('custom-card1-title');
    const cardcontent = card.querySelector('h3');
    cardcontent?.classList.add('custom-card1-number');
  });
}
