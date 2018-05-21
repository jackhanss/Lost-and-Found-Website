$('document').ready(function(){

render();

function render(){

$.ajax({

    url: 'https://bancroftlaf.herokuapp.com/api/getItems',
    success: function(data){
        console.log(data)
        $('#lostItems').html('');
        for (var i = 0; i <data.length; i++) {
            $('#lostItems').append(`
            <div class = "item">
            <h1>${data[i].item}</h1>
            <p>${data[i].description}</p>
            <button id = "${data[i]._id}" class = "deleteButton">Delete</button>
            </div>
            `);
            $(`#${data[i]._id}`).click(function(e){
                console.log('sappy')
                deleteItem(e.target.id);
            })
        }
    }
})
}

$('#button').click(function(){

    $.ajax({
        url: 'https://bancroftlaf.herokuapp.com/api/additem',
        method: 'POST',
        data: {
            itemName: $('#where') .val(),
            itemDescription: $('#describe').val()
         },
         success: function(){
             render()
         }
    })
    
});


function deleteItem(id) {
    $.ajax({
        url: 'https://bancroftlaf.herokuapp.com/api/deleteItem',
        method: 'DELETE',
        headers: {
            id: id
        },
        success: function() {
            render()
        }
    })
}

});
