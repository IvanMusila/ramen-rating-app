const ramens = [
    { 
        id: 1, 
        name: "Shoyu Ramen", 
        restaurant: "Ichiran", 
        image: "./images/shoyu.jpg", 
        rating: 5, 
        comment: "Delicious!" 
    },


    { 
        id: 2, 
        name: "Miso Ramen", 
        restaurant: "Menya", 
        image: "./images/miso1.jpeg", 
        rating: 4, 
        comment: "Very flavorful!" 
    },


    { 
        id: 3, 
        name: "Tonkotsu Ramen", 
        restaurant: "Ramen-ya", 
        image: "./images/tonkotsu.jpg",
        rating: 7, 
        comment: "Tasty!" 
    }

];

function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    console.log(ramenMenu);
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        ramenMenu.appendChild(img);
    });

}

displayRamens();


function handleClick() {
    const ramenImg = document.querySelectorAll('#ramen-menu img');
    const ramenDetail = document.getElementById('ramen-detail');
    ramenDetail.style.border = 'solid 3px #333';
    // console.log(ramenImg);
    // console.log(ramenDetail);

   ramenImg.forEach((img, index) => {
        img.addEventListener('click', () => {
            const ramen = ramens[index]; 

            ramenDetail.innerHTML = `
                <img src="${ramen.image}" alt="${ramen.name}" />
                <h2>${ramen.name}</h2>
                <h3>Restaurant: ${ramen.restaurant}</h3>
                ${ramen.rating ? `<p>Rating: ${ramen.rating}</p>` : ''}
                ${ramen.comment ? `<p>Comment: ${ramen.comment}</p>` : ''}
            `;
        });
    });

    
}

handleClick();

function formAppear() {
    const button = document.getElementById('add-ramen');
    button.addEventListener('click', () => {
        const form = document.getElementById('ramen-form');

        form.innerHTML = `
            <form>
                <div class="input-box">
                    <label for="name">Name: </label>
                    <input type="text" id="name" name="name" />
                </div>
                <div class="input-box">
                    <label for="restaurant">Restaurant: </label>
                    <input type="text" id="restaurant" name="restaurant" />
                </div>
                <div class="input-box">
                    <label for="image">Image: </label>
                    <input type="text" id="image" name="image" />
                </div>
                <div class="input-box">
                    <label for="rating">Rating: </label>
                    <input type="number" id="rating" name="rating" />
                </div>
                <div class="input-box">
                    <label for="comment">Comment: </label>
                    <input id="comment" name="comment" />
                </div>
                <br>
                <div class="btn-box">
                    <button class="form-btn" type="submit"> Add Ramen <button/>
                    <button class="form-btn" id="close" type="button"> Close <button/>
                </div>
            </form>
        `;
});
}
// const closeForm = document.getElementById('close');
// closeForm.addEventListener('click', () => {
//     const form = document.getElementById('ramen-form');
//     form.remove();

// });
// }

formAppear();

function addSubmitListener() {
    const form = document.getElementById('ramen-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const newRamen = {
            id: ramens.length + 1,
            name: event.target.name.value,
            restaurant: event.target.restaurant.value,
            image: event.target.image.value,
            rating: event.target.rating.value,
            comment: event.target.comment.value
        };

        ramens.push(newRamen);

        const img = document.createElement('img');
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener('click', () => handleClick(newRamen));
        document.getElementById('ramen-menu').appendChild(img);

        form.reset();
    });
}

console.table(ramens);
