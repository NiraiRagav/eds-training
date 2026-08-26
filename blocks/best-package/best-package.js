export default function decorate(block) {
  const section = block.closest('.section');
  const mainTitle = section?.querySelector(
    '.default-content-wrapper h2',
  );
  const preTitle = section?.querySelector(
    '.default-content-wrapper h3',
  );
  mainTitle?.classList.add('best-package__title');
  preTitle?.classList.add('best-package__pre-title');
  const bestPackage = [...block.children];
  bestPackage.forEach((row) => {
    row?.classList.add('best-package-card');
    const bestPackageItem = row.querySelectorAll('.best-package-card > div');
    bestPackageItem?.forEach((item) => {
      item.classList.add('best-package-item');
      const [image, author, comments, description] = item.querySelectorAll('p');
      const title = item.querySelector('h3');
      image?.classList.add('best-package-item__image');
      author?.classList.add('best-package-item__author');
      comments?.classList.add('best-package-item__comments');
      title?.classList.add('best-package-item__title');
      description?.classList.add('best-package-item__description');
    });
  });
}
