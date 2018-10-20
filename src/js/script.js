$(document).ready(() => {
    $('.openModal').on('click', (e) => {
        e.preventDefault();
        $('.modal').addClass('open')
    });
    $('.modalClose').on('click', function(e) {
        e.preventDefault();
        $('.modal').removeClass('open');
        if ($(this).hasClass('modalCloseAlert')){
            setTimeout(() => {
                alert('Done');
            }, 500);
        }
    });
});