export default function createBeanieDetail(root) {
    const title = document.querySelector('#name');
    const img = document.querySelector('#bb-image');
    const [theme, birthday, releaseDate, starSign] = root.querySelectorAll('p');

    return ({ beanie }) => {
        title.textContent = beanie.title;
        img.src = beanie.image;
        theme.textContent = `theme: ${beanie.theme}`;
        birthday.textContent = `birthday: ${beanie.birthday}`;
        releaseDate.textContent = `released on: ${beanie.releaseDate}`;
        
        if (beanie.astroSign) {
            starSign.textContent = `star sign: ${beanie.astroSign}`;
        }
        else {
            starSign.innerHTML = '';
        }
    };
}