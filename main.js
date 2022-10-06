

function showNav() {
    var x = document.getElementById("header-ul");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

document.getElementById('nav-bar-burger').addEventListener('click',showNav)


function addFolderName(e){
    const folderName = prompt('Enter name of the folder')
    if(folderName !== '' ) {
        const url = 'blahblah'
        // fetch(url, {
        //     method : 'POST',
        //     headers : {
        //         'Content-type': 'application/json',
        //     },
        //     body : JSON.stringify({'folder_name' : folderName })
        // })
        // .then( res => res.json())
        // .then( data => {
        //     window.location = 'some url'
        // })

    }
}

function addFile(){
    document.getElementById('file-input-upload').click()
}

const fileInput = document.getElementById('file-input-upload')

fileInput.addEventListener('change', uploadFile = (e) => {
    const file = document.getElementById('file-input-upload').files[0]
    const name = file.name
    const data = new FormData()
    data.append('file', file , name)
    console.log(data)
    console.log('File uploaded successfully')
// fetch(url, {
    //     method : 'POST',
    //     headers : {
    //         'Content-type': 'application/json',
    //     },
    //     body : JSON.stringify({'folder_name' : folderName })
    // })
    // .then( res => res.json())
    // .then( data => {
    //     window.location = 'some url'
    // })
    }
 )