export default function decorate(block) {
  const titlecard = block.children(0);
  titlecard.classList.add('titlecard');
  const titlecard1 = titlecard.querySelector('h2');
  titlecard1.classList.add('titlecard-title');
}
