$(function() {
    var title = $('#title');
    var author = $('#author');
    var rate = $('#rate');

    function submit (event) {
        event.preventDefault();
        var titleValue = title.val();
        var authorValue = author.val();
        var rateValue = rate.val();
        var data = {
            title: titleValue,
            author: authorValue,
            rate: rateValue
        }
        console.log('data', data);
        $.post('http://localhost:4000/api/books', data, function(data, status) {
            console.log('Wysłano dane', data, status);
            title.val('');
            author.val('');
            rate.val('');
        });
    }

    var submitBtn = $('#submitBtn');

    submitBtn.on('click', submit);
});