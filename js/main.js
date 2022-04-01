const elPostList = document.querySelector('#postList');
const modalBody = document.querySelector('#modalBody');
const elSavedList = document.querySelector('#savedList');
const elSavedBtn = document.querySelector('.saved-btn');
const elPostsBtn = document.querySelector('.posts-btn');
const elPosts = document.querySelector('.posts');
const elSaved = document.querySelector('.saved');

elSavedBtn.addEventListener('click', openSaved);

let btnSave;

function openSaved(e) {
    elPosts.style.display = "none";
    btnSave = e.currentTarget;
    btnSave.style.color = "blue";
    btnPost.style.color = "black";
    elPosts.style.display = "none";
    elSaved.style.display = "block";

}

elPostsBtn.addEventListener('click', openPosts);

let btnPost;

function openPosts(e) {
    btnPost = e.currentTarget;
    btnPost.style.color = "blue";
    btnSave.style.color = "black";
    elSaved.style.display = "none";
    elPosts.style.display = "block";

}


function render(posts) {
    posts.forEach((item) => {
        let li = document.createElement('li');
        li.dataset.toggle = "modal"
        li.dataset.target = "#exampleModal"
        li.className = "posts__item col-xs-4 col-sm-4 col-md-4";

        if (item.type == "video") {
            li.innerHTML = `
            <div class="posts__img-box" onclick = "addModalFunc(${item.id})">
                <div class="colors">
                </div>
                <div class="video-play">
                <i class='bx bx-play video-bx'></i>
                </div>
                <video class="posts__vedio" src="${item.media[0]}"></video>
                <div class="btn__style">
                <button class="btn__heart"><i class='bx bx-play video-bx'></i><span class="face-result">${item.like}</span></button>
                <button class="btn__comment"><i class='bx bxs-message-rounded comment-face'></i><span class="face-result">${item.comment}</span></button>
            </div>
            </div>
            `
        } else if (item.type == "imgs") {
            li.innerHTML = `
            <div class="posts__img-box" onclick = "addModalFunc(${item.id})">
                <div class="colors"></div>
                <div class="video-play">
                <i class='bx bxs-copy imgs-copy'></i>
                </div>
                <img class="posts__img" src="${item.media[0]}" alt="edu">
                <div class="btn__style">
                <button class="btn__heart"><i class='bx bxs-heart heart-face'></i><span class="face-result">${item.like}</span></button>
                <button class="btn__comment"><i class='bx bxs-message-rounded comment-face'></i><span class="face-result">${item.comment}</span></button>
            </div>
            </div>
            `
        } else {
            li.innerHTML = `
            <div class="posts__img-box"  onclick = "addModalFunc(${item.id})">
                <div class="colors"></div>
                <img class="posts__img" src="${item.media[0]}" alt="edu">
                <div class="btn__style">
                <button class="btn__heart"><i class='bx bxs-heart heart-face'></i><span class="face-result">${item.like}</span></button>
                <button class="btn__comment"><i class='bx bxs-message-rounded comment-face'></i><span class="face-result">${item.comment}</span></button>
            </div>
            </div>
            `
        }
        elPostList.appendChild(li);
    });
}

function addModalFunc(id) {
    modalBody.innerHTML = ''
    let postId = id;
    posts.forEach((item) => {
        if (item.id == postId) {
            let box = document.createElement('div');

            if (item.type == "video") {
                box.innerHTML = `
                <div class="d-flex row bigBox">
                <div class="col-6 media__box">
                    <video class="modal__video" src="${item.media[0]}" controls autoplay></video>
                </div>
                <div class="col-6 modal__desc-box">
                    <div class="modal__header">
                        <a href="#">
                            <img class="modal__avatar" src="img/najot.jpg" alt="avatar">
                        </a>
                        <a class="najottalim-link" href="#">
                            najottalim
                        </a>
                        <span class="modal__dots"></span>
                        <a class="najottalim-link" href="#">
                            Following
                        </a>
                    </div>
                    <div class="modal__main d-flex">
                        <div class="col-1">
                            <a href="#">
                                <img class="modal__avatar" src="img/najot.jpg" alt="avatar">
                            </a>
                        </div>
                        <div class="col-11">
                            <a class="najottalim-link" href="#">
                                najottalim
                            </a>
                            <p>${item.desc}
                            </p>
                        </div>
                    </div>
                    <div class = "modal__footer">
                        <div class = "modal__footLeft">
                            <button  class = "modal__message likeMessage" onclick="heartLikeBnt(${item.id})"><i class='bx bx-heart'></i></button>
                            <button  class = "modal__message"><i class='bx bx-message-rounded bx-flip-horizontal' ></i></button>
                            <button  class = "modal__message"><i class='bx bxl-telegram'></i></button>
                        </div>
                            <div class = "modal__footRight">
                                <button  class = "modal__bookmark" id="bookmarkModal" onclick="saveBook(${item.id})"><i class='bx bx-bookmark'></i></button>
                            </div>
                    </div>
                    <div class = "modal__footerInput">
                        <form class = "modal__form">
                            <button  class = "modal__smile"><i class='bx bx-smile'></i></button>
                            <input class = "footer-input" type="text" placeholder="Add a comment...">
                            <button class="modal__post" type="submit">Post</button>
                        </form>
                    </div>
                </div>
            </div>
            `
                modalBody.appendChild(box);

            } else if (item.type == "imgs") {
                box.innerHTML = `
                <div class="d-flex row bigBox">
                    <div class="col-6 media__box imgs__menidabox carousel slide" id="carouselExampleControls" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="${item.media[0]}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="${item.media[2]}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="${item.media[2]}" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                <div class="col-6 modal__desc-box">
                    <div class="modal__header">
                        <a href="#">
                            <img class="modal__avatar" src="img/najot.jpg" alt="avatar">
                        </a>
                        <a class="najottalim-link" href="#">
                            najottalim
                        </a>
                        <span class="modal__dots"></span>
                        <a class="najottalim-link" href="#">
                            Following
                        </a>
                    </div>
                    <div class="modal__main d-flex">
                        <div class="col-1">
                            <a href="#">
                                <img class="modal__avatar" src="img/najot.jpg" alt="avatar">
                            </a>
                        </div>
                        <div class="col-11">
                            <a class="najottalim-link" href="#">
                                najottalim
                            </a>
                            <p>${item.desc}
                            </p>
                        </div>
                    </div>
                    <div class = "modal__footer">
                        <div class = "modal__footLeft">
                            <button  class = "modal__message likeMessage" onclick="heartLikeBnt(${item.id})"><i class='bx bx-heart'></i></button>
                            <button  class = "modal__message"><i class='bx bx-message-rounded bx-flip-horizontal' ></i></button>
                            <button  class = "modal__message"><i class='bx bxl-telegram'></i></button>
                        </div>
                        <div class = "modal__footRight">
                            <button  class = "modal__bookmark" id="bookmarkModal"  onclick="saveBook(${item.id})"><i class='bx bx-bookmark'></i></button>
                        </div>
                    </div>
                    <div class = "modal__footerInput">
                        <form class = "modal__form">
                            <button  class = "modal__smile"><i class='bx bx-smile'></i></button>
                            <input class = "footer-input" type="text" placeholder="Add a comment...">
                            <button class="modal__post" type="submit">Post</button>
                        </form>
                    </div>
                </div>
            </div>
            `
                modalBody.appendChild(box);

            } else {
                box.innerHTML = `
                <div class="d-flex row bigBox">
                <div class="col-6 media__box">
                    <img class="posts__img" src="${item.media[0]}" alt="edu">
                </div>
                <div class="col-6 modal__desc-box">
                    <div class="modal__header">
                        <a href="#">
                            <img class="modal__avatar" src="img/najot.jpg" alt="avatar">
                        </a>
                        <a class="najottalim-link" href="#">
                            najottalim
                        </a>
                        <span class="modal__dots"></span>
                        <a class="najottalim-link" href="#">
                            Following
                        </a>
                    </div>
                    <div class="modal__main d-flex">
                        <div class="col-1">
                            <a href="#">
                                <img class="modal__avatar" src="img/najot.jpg" alt="avatar">
                            </a>
                        </div>
                        <div class="col-11">
                            <a class="najottalim-link" href="#">
                                najottalim
                            </a>
                            <p>${item.desc}
                            </p>
                        </div>
                    </div>
                    <div class = "modal__footer">
                        <div class = "modal__footLeft">
                            <button  class = "modal__message likeMessage" onclick="heartLikeBnt(${item.id})"><i class='bx bx-heart'></i></button>
                            <button  class = "modal__message" id = "addHeartComment"><i class='bx bx-message-rounded bx-flip-horizontal' ></i></button>
                            <button  class = "modal__message"><i class='bx bxl-telegram'></i></button>
                        </div>
                            <div class = "modal__footRight">
                                <button  class = "modal__bookmark" id="${item.id}" onclick="saveBook(${item.id})"><i class='bx bx-bookmark'></i></button>
                            </div>
                        </div>
                    <div class = "modal__footerInput">
                        <form class = "modal__form">
                            <button class = "modal__smile"><i class='bx bx-smile'></i></button>
                            <input class = "footer-input" type="text" placeholder="Add a comment...">
                            <button class="modal__post" type="submit">Post</button>
                        </form>
                    </div>
                </div>
            </div>
            `
                modalBody.appendChild(box);
            }
        }
    });
}

render(posts)

// <<<<<<<<<<<<<<<<<<<   LIKE   >>>>>>>>>>>>>>>>>>>

function heartLikeBnt(id) {
    let testBtn = document.querySelector(`.likeMessage`);


    // testBtn.addEventListener('click', () => {
    //     testBtn.setAttribute = ("color", "#f70000")
    //     // classList.toggle = "bx bxs-heart";
    // })

    posts.forEach(item => {
        if (item.id == id) {
            testBtn.innerHTML = `<i class='bx bxs-heart' style='color:#f70000'></i>`;
            item.like += 1;
        } 
    })
   
}


// <<<<<<<<<<<<<<<<<<<<<    BOOKMARK    >>>>>>>>>>>>>>>>>>>>>>>>> 

function saveBook(id) {
    let testBtn = document.querySelector(`.modal__bookmark`);
    console.log(testBtn);
    testBtn.innerHTML = `<i class='bx bxs-bookmark'></i>`;
    console.log(id);
    // elSavedList.innerHTML = '';

    posts.forEach((item) => {
        if (item.id == id) {
            item.save = true;
            let li = document.createElement('li');
            li.dataset.toggle = "modal"
            li.dataset.target = "#exampleModal"
            li.className = "posts__item col-xs-4 col-sm-4 col-md-4";
            if (item.type == "video") {
                li.innerHTML += `
                <div class="posts__img-box" onclick = "addModalFunc(${item.id})">
                <div class="colors">
                </div>
                <div class="video-play">
                <i class='bx bx-play video-bx'></i>
                </div>
                <video class="posts__vedio" src="${item.media[0]}"></video>
                <div class="btn__style">
                <button class="btn__heart"><i class='bx bx-play video-bx'></i><span class="face-result">${item.like}</span></button>
                <button class="btn__comment"><i class='bx bxs-message-rounded comment-face'></i><span class="face-result">${item.comment}</span></button>
                </div>
                </div>
                `
                elSavedList.appendChild(li);
            } else if (item.type == "imgs") {
                li.innerHTML += `
                <div class="posts__img-box" onclick = "addModalFunc(${item.id})">
                <div class="colors"></div>
                <div class="video-play">
                <i class='bx bxs-copy imgs-copy'></i>
                </div>
                <img class="posts__img" src="${item.media[0]}" alt="edu">
                <div class="btn__style">
                <button class="btn__heart"><i class='bx bxs-heart heart-face'></i><span class="face-result">147</span></button>
                <button class="btn__comment"><i class='bx bxs-message-rounded comment-face'></i><span class="face-result">23</span></button>
                </div>
                </div>
                `
                elSavedList.appendChild(li);
            } else {
                li.innerHTML += `
                <div class="posts__img-box"  onclick = "addModalFunc(${item.id})">
                <div class="colors"></div>
                <img class="posts__img" src="${item.media[0]}" alt="edu">
                <div class="btn__style">
                <button class="btn__heart"><i class='bx bxs-heart heart-face'></i><span class="face-result">147</span></button>
                <button class="btn__comment"><i class='bx bxs-message-rounded comment-face'></i><span class="face-result">23</span></button>
                </div>
                </div>
                `
                elSavedList.appendChild(li);
            }
        }
    })

}