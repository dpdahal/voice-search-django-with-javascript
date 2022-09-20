if (!('webkitSpeechRecognition') in window) {
    console.log('Voice not support update ')
}


var recognition = new webkitSpeechRecognition();

recognition.onresult = function (event) {
    let get_test = '';
    for (let x = event.resultIndex; x < event.results.length; x++) {
        if (event.results[x].isFinal) {
            get_test += event.results[x][0].transcript;
        } else {
            get_test += event.results[x][0].transcript;
        }
    }
    document.getElementById('get_response').value = get_test;

    get_search(get_test);
}

function startRecord() {
    recognition.start();
}

document.querySelector('#myBtn').addEventListener('click', function () {
    startRecord();
});


function get_search(send_text) {
    let fm = new FormData();
    fm.append('voice_data', send_text);
    axios.post('',fm ).then(function (response) {
       let get_course=response.data.courses;
       let output='';
       get_course.forEach(function (course) {
              output+=`
              <div class="col-md-4">
                 <div class="card">
                 <img src="media/${course.image}" class="card-img-top img-fluid" style="height: 200px;"
                                     alt="">
                      <div class="card-body">
                            <h5 class="card-title">${course.name}</h5>
                            <p class="card-text">${course.description}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                 </div>
                </div>
              `
       });

         document.getElementById('result').innerHTML=output;

    }).catch(function (error) {
        console.log(error);
    });



}

