const elPostList = document.querySelector('#postList');
const modalBody = document.querySelector('#modalBody');

function render(posts) {
    posts.forEach((item) => {
        let li = document.createElement('li');
        li.dataset.toggle = "modal"
        li.dataset.target = "#exampleModal"
        li.className = "posts__item col-xs-4 col-sm-4 col-md-4";

        if(item.type == "video") {
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
        } else if(item.type == "imgs") {
            li.innerHTML = `
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
        } else {
            li.innerHTML = `
            <div class="posts__img-box"  onclick = "addModalFunc(${item.id})">
                <div class="colors"></div>
                <img class="posts__img" src="${item.media[0]}" alt="edu">
                <div class="btn__style">
                <button class="btn__heart"><i class='bx bxs-heart heart-face'></i><span class="face-result">147</span></button>
                <button class="btn__comment"><i class='bx bxs-message-rounded comment-face'></i><span class="face-result">23</span></button>
            </div>
            </div>
            `
        }
    
        elPostList.appendChild(li)
    });
}

function addModalFunc(id) {
    modalBody.innerHTML = ''
    let postId = id;
    posts.forEach((item) => {
        if(item.id == postId) {
            let box = document.createElement('div');

            if(item.type == "video") {
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
                </div>
            </div>
            `
            modalBody.appendChild(box);
        
            } else if(item.type == "imgs") {
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
                </div>
            </div>
            `
            modalBody.appendChild(box);
            }
        }
    });
}




render(posts)