export default function decorate(block) {
     //  spread operator[...] ==> all the direct children inside the block
    const cards = [...block.children];
     //  card ==> parameter of the function
    //  cards==> [card1,card2,card3,card4, etc]
    cards.forEach((card) => {              
        //  ?. ==> optional chaining operator(if condition)
        card?.classList.add('custom_card1');
        const carditem = card.querySelector('div');
        carditem?.classList.add('custom_card1_item');
        const cardimg = card.querySelector('img');
        cardimg?.classList.add('custom_card1_img');
        const cardcontent = card.querySelector('p');
        cardcontent?.classList.add('custom_card1_content');
        const cardnumber = card.querySelector('h3');
        cardnumber?.classList.add('custom_card1_number');
        const cardtitle = card.querySelector('h2');
        cardtitle?.classList.add('custom_card1_title');
    });
}