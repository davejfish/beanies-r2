export default function createBeaniesList(root) {
    root.innerHTML = '';

    return ({ beanies }) => {

        for (let beanie of beanies) {
            const li = document.createElement('li');
        
            const a = document.createElement('a');
            a.classList.add('card');
            a.href = `./detail/?id=${beanie.id}`;

            const img = document.createElement('img');
            img.src = beanie.image;

            const h2 = document.createElement('h2');
            h2.textContent = beanie.title;

            a.append(img, h2);
            li.append(a);
            root.append(li);
        }     
    };
}