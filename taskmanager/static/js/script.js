
document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
    // modal initialization
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
    // datepicker initialization
    var datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        // format: 'yyyy-mm-dd',
        format: 'dd mmmm, yyyy',
        autoClose: true,
        i18n: {
            done: 'Select'
        }
    });
    // select initialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
    // collapsible initialization
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
});
