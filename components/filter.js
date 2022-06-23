export default function createFilter(root, { handleFilter }) {
    const nameInput = root.querySelector('input');
    const starSignSelect = root.querySelector('select');
    
    root.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(root);
        const data = {
            name: formData.get('name'),
            starSign: formData.get('star-sign')
        };

        handleFilter(data);
    });

    return ({ name, starSign }) => {
        nameInput.value = name;
        starSignSelect.value = starSign;
    };
}