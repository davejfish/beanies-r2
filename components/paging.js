export default function createPaging(root, { handlePaging }) {
    const [prev, next] = root.querySelectorAll('button');
    const pageDisplay = root.querySelector('span');
    const itemsDisplayed = root.querySelector('select');

    prev.addEventListener('click', () => {
        handlePaging(-1, itemsDisplayed.value);
    });
    next.addEventListener('click', () => {
        handlePaging(1, itemsDisplayed.value);
    });
    itemsDisplayed.addEventListener('change', () => {
        handlePaging(0, itemsDisplayed.value);
    });

    return ({ page, pageSize, totalPages }) => {
        itemsDisplayed.value = pageSize;
        prev.disabled = page === 1;
        next.disabled = page === totalPages;

        pageDisplay.textContent = `page ${page} of ${totalPages}`;
    };
}