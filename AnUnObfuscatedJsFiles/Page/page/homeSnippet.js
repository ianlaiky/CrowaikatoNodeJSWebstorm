

$('.upload-btn').on('click', function () {
    $('#upload-input').click();
    $('.progress-bar').text('0%');
    $('.progress-bar').width('0%');
});

$('#upload-input').on('change', function () {

    var files = $(this).get(0).files;

    if (files.length > 0) {
        // One or more files selected, process the file upload

        // create a FormData object which will be sent as the data payload in the
        // AJAX request
        var formData = new FormData();


        // add the files to formData object for the data payload
        // console.log(files[0].name);
        formData.append('uploads[]', files[0], files[0].name);


    }


    $.ajax({
        url: '/page/lockyUpload',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            console.log('upload successful!\n' + data);
        },
        xhr: function () {
            // create an XMLHttpRequest
            var xhr = new XMLHttpRequest();

            // listen to the 'progress' event
            xhr.upload.addEventListener('progress', function (evt) {

                if (evt.lengthComputable) {
                    // calculate the percentage of upload completed
                    var percentComplete = evt.loaded / evt.total;
                    percentComplete = parseInt(percentComplete * 100);

                    // update the Bootstrap progress bar with the new percentage
                    $('.progress-bar').text(percentComplete + '%');
                    $('.progress-bar').width(percentComplete + '%');

                    // once the upload reaches 100%, set the progress bar text to done
                    if (percentComplete === 100) {


                        $('.progress-bar').html('Done. Please refresh page to view updated list');
                    }

                }

            }, false);

            return xhr;
        }
    });

});