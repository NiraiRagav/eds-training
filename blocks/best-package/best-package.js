export default function decorate(block) {
  const section = block.closest('.section');
  const mainTitle = section?.querySelector(
    '.default-content-wrapper h2',
  );
  const preTitle = section?.querySelector(
    '.default-content-wrapper h3',
  );
  mainTitle?.classList.add('best-package-title');
  preTitle?.classList.add('best-package-pre-title');
  const bestPackage = [...block.children];
  bestPackage.forEach((row) => {
    row?.classList.add('best-package-card');
    const bestPackageItem = row.querySelectorAll('.best-package-card > div');
    bestPackageItem?.forEach((item) => {
      item.classList.add('best-package-item');
      const [image, author, comments, description] = item.querySelectorAll('p');
      const title = item.querySelector('h3');
      image?.classList.add('best-package-item-image');
      author?.classList.add('best-package-item-author');
      comments?.classList.add('best-package-item-comments');
      title?.classList.add('best-package-item-title');
      description?.classList.add('best-package-item-description');
    });
  });
}
