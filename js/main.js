// ajax methods

// new XMLHttpRequest()
// abort()
// getResponseHeader()
// getAllResponseHeaders()
// open(method, url, async, user, password)
// send()
// send(String)
// sendRequestHeader()

const getData = document.getElementById('get-data');
const content = document.querySelector('.container');

const myData = function data() {

    // create the request 
    const myRequest = new XMLHttpRequest();

    // open the request
    myRequest.open('get', 'https://api.escuelajs.co/api/v1/products', true);

    // send the request
    myRequest.send();

    //load the request
    myRequest.onload = function() {
        products = JSON.parse(this.responseText);
        console.log(products);
        for (let product of products) {
            const result = document.createElement('section');
            result.className = 'card-container' ;
            result.innerHTML = `
                <section class="card">
                        <section class="brand-image">
                            <img src="${product.category.image}" alt="img">
                        </section>
                        <section class="about">
                            <article class="price">
                                <span>${product.price}</span>
                            </article>
                            <article class="discrip">
                                <p>${product.description}</p>
                            </article>
                        </section>
                    </section>
            `;
            content.appendChild(result)
        }
    }
}

getData.addEventListener('click', myData);
