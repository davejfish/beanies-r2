export default function createFilter(root, { handleFilter }) {
    const nameInput = root.querySelector('input');
    const starSignSelect = root.querySelector('select');
    const [fromYear, toYear] = root.querySelectorAll('#release-year');
    
    root.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(root);
        const data = {
            name: formData.get('name'),
            starSign: formData.get('star-sign'),
            yearStart: formData.get('from'),
            yearEnd: formData.get('to')
        };

        handleFilter(data);
    });

    return ({ name, starSign, yearStart, yearEnd }) => {
        nameInput.value = name;
        starSignSelect.value = starSign;
        fromYear.value = Number(yearStart);
        toYear.value = Number(yearEnd);
    };
}