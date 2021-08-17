$(document).ready(function() {
    if (localStorage.getItem('myproducts') == null) {
        products = {
            data: []
        }
        products = JSON.stringify(products)
        localStorage.setItem('myproducts', products)
    }

    // })

    // $(document).ready(function () {
    var catData = [{ "cat": "Electronics", "subcat": ["Mobile", "Speakers", "Laptops"] }, { "cat": "TVs & Appliances", "subcat": ["Televisions", "Air Conditions", "Washing Machines"] },
        { "cat": "Men", "subcat": ["FootWear", "Clothing", "Grooming"] }, { "cat": "Women", "subcat": ["Sandals", "Accessories", "Party Wear"] },
        { "cat": "Baby & Kids", "subcat": ["Kid's Clothing", "Baby care", "Toys"] }, { "cat": "Home & Furniture", "subcat": ["Bed Room Furniture", "Living Room Furniture"] },
        { "cat": "Sports,Books & More", "subcat": ["Books", "Sports"] }
    ]
    for (var i = 0; i < catData.length; i++) {
        $("#selectCat").append('<option>' + catData[i].cat + '</option>');
    }

    $("#selectCat").change(function() {
        $("#subCat").html("")
        if ($("#selectCat").val() == "Electronics") {
            var size = catData[0]['subcat'].length
            for (var j = 0; j < size; j++) {
                $("#subCat").append('<option>' + catData[0]['subcat'][j] + '</option>');
            }
        }

        if ($("#selectCat").val() == "TVs & Appliances") {
            var size = catData[1]['subcat'].length
            for (var j = 0; j < size; j++) {
                $("#subCat").append('<option>' + catData[1]['subcat'][j] + '</option>');
            }
        }
        if ($("#selectCat").val() == "Men") {
            var size = catData[2]['subcat'].length
            for (var j = 0; j < size; j++) {
                $("#subCat").append('<option>' + catData[2]['subcat'][j] + '</option>');
            }
        }
        if ($("#selectCat").val() == "Women") {
            var size = catData[3]['subcat'].length
            for (var j = 0; j < size; j++) {
                $("#subCat").append('<option>' + catData[3]['subcat'][j] + '</option>');
            }
        }
        if ($("#selectCat").val() == "Baby & Kids") {
            var size = catData[4]['subcat'].length
            for (var j = 0; j < size; j++) {
                $("#subCat").append('<option>' + catData[4]['subcat'][j] + '</option>');
            }
        }
        if ($("#selectCat").val() == "Home & Furniture") {
            var size = catData[5]['subcat'].length
            for (var j = 0; j < size; j++) {
                $("#subCat").append('<option>' + catData[5]['subcat'][j] + '</option>');
            }
        }
        if ($("#selectCat").val() == "Sports,Books & More") {
            var size = catData[6]['subcat'].length
            for (var j = 0; j < size; j++) {
                $("#subCat").append('<option>' + catData[6]['subcat'][j] + '</option>');
            }
        }
    });
});

$("#submitBtn").click(function() {
    var category = $("#selectCat").val()
    var subcategory = $("#subCat").val()
    var url = $("#link").val()
    var name = $("#name").val()
    var price = $("#price").val()
    var description = $("#description").val()

    dataObj = {
        category: category,
        subcategory: subcategory,
        url: url,
        name: name,
        price: price,
        description: description
    }

    var details = JSON.parse(localStorage.getItem('myproducts'))
    details.data.push(dataObj)
    details = JSON.stringify(details)
    localStorage.setItem('myproducts', details)

    $("#selectCat").val("--")
    $("#subCat").val("--")
    $("#link").val("")
    $("#name").val("")
    $("#price").val("")
    $("#description").val("")
})