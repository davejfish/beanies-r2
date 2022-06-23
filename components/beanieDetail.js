export default function createBeanieDetail(root) {
    const title = document.querySelector('#name');
    const img = document.querySelector('#bb-image');
    const BPLink = document.querySelector('#link');
    const [theme, birthday, releaseDate, releaseYear, starSign, styleNum, color, STG, TTG, retirementDate, animal] = root.querySelectorAll('p');

    return ({ beanie }) => {
        title.textContent = beanie.title;
        img.src = beanie.image;
        theme.textContent = `theme: ${beanie.theme}`;
        birthday.textContent = `birthday: ${beanie.birthday}`;
        releaseDate.textContent = `released on: ${beanie.releaseDate}`;
        releaseYear.textContent = `release year: ${beanie.releaseYear}`;
        
        if (beanie.astroSign) {
            starSign.textContent = `star sign: ${beanie.astroSign}`;
        }

        styleNum.textContent = `style number: ${beanie.styleNumber}`;
        color.textContent = `color: ${beanie.color}`;
        STG.textContent = `swing tag gen: ${beanie.swingTagGeneration}`;
        TTG.textContent = `tush tag: ${beanie.tushTagGeneration}`;
        retirementDate.textContent = `retired on: ${beanie.retirementDate}`;
        animal.textContent = `animal: ${beanie.animal}`;

        BPLink.href = beanie.link;
    };
}