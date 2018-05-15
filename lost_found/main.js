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

        }
    }
})
}

$('#button').click(function(){


    console.log('asdfsadf')

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
})
