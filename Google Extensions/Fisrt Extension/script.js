
function fetchRandomDogImage() {


    let requestServer = new XMLHttpRequest();

    requestServer.onload = () => {
        let responseJSON = JSON.parse(requestServer.response);

        let imageUrl = responseJSON.message;

        $('#dogImage').attr('src' , imageUrl);
        $("#dogImage").css("display", "block");
    };

    requestServer.open('get', 'https://dog.ceo/api/breeds/image/random')
    requestServer.send();

}

$('#fetchImage').click(fetchRandomDogImage);

