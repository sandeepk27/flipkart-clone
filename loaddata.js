$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    product = urlParams.get('product');
    performFilter(product)
})

var filteredData

function performFilter(product) {
    var productData = JSON.parse(localStorage.getItem('myproducts'))
    filteredData = productData.data.filter(a => a.subcategory === product)
    populatePages(filteredData)
}

function populatePages(productData) {
    var bodydiv = document.getElementById("out")
    bodydiv.innerHTML = ""
    var container = document.createElement('div')
    container.setAttribute('class', 'container-fluid px-5 py-2')
    bodydiv.append(container)

    var row = document.createElement('div')
    row.innerHTML = ""
    row.setAttribute('class', 'row text-center')
    container.append(row)

    for (let i = 0; i < productData.length; i++) {
        var col = document.createElement('div')
        col.setAttribute('class', 'col-6 col-md-4 col-lg-2')
        row.append(col)

        var card = document.createElement('div')
        card.setAttribute('class', 'card mb-2')

        var cardHeader = document.createElement('div')
        cardHeader.setAttribute('class', 'card-body')
        var image = document.createElement('img')
        image.setAttribute('src', productData[i]['url'])
        image.setAttribute('class', 'size')
        cardHeader.append(image)
        card.append(cardHeader)

        var cardBody = document.createElement('p')
        cardBody.innerHTML = `<span class="p-0">${productData[i]['name']}</span></br>
                                <span class="text-success p-0">From <i class="fas fa-rupee-sign"></i> ${productData[i]['price']}</span></br>
                                <span class="text-muted">${productData[i]['description']}</span>`
        card.append(cardBody)

        var cardFooter = document.createElement('div')
        cardFooter.setAttribute('class', 'card-footer')
        var btn = document.createElement('button')
        btn.textContent = "Add to Cart"
        btn.setAttribute('value', i)
        btn.setAttribute('class', 'btn btn-primary text-white px-4')
        cardFooter.append(btn)
        card.append(cardFooter)
        col.append(card)
    }
}

$("#sortPrice").change(function() {
    if ($(this).val() == "asc") {
        var sortedOut = filteredData.sort((a, b) => { return a.price - b.price })
        populatePages(sortedOut)
    } else if ($(this).val() == "dec") {
        var sortedOut = filteredData.sort((a, b) => { return b.price - a.price })
        populatePages(sortedOut)
    }
})