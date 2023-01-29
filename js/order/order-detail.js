/**
 * Set the id to query the order
 */

let urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

fetch(`https://pizza-planet.herokuapp.com/order/id/${_id}`)
    .then(response => response.json())
    .then(order => {
        let template = createRowTemplate(order);
        $("#order").append(template);
    });

/**
 * Find the template tag and populate it with the data
 * @param order
 */
function createRowTemplate(order) {
    let template = $("#order-template")[0].innerHTML;
    return Mustache.render(template, order);
}
