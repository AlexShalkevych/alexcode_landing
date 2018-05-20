(function () {
    // Add event listener for open form button
    var openFormButton = document.querySelector('.arrow-down');
    console.log(openFormButton);

    if(openFormButton){
        openFormButton.addEventListener('click', function (e) {
            e.preventDefault();
            form.open();
        })
    }

    // var closeFormButton = document.querySelector('.form__close-button');
    // console.log(closeFormButton);
    //
    // closeFormButton.addEventListener('click', function () {
    //     form.close();
    // })

}());