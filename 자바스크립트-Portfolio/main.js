const projectList = [
    { src: "img/htmlcss-day1.png", title : "Planner", link : "https://htmlcss-day1.netlify.app"},
    { src: "img/htmlcss-day6.png", title : "Noona-demo", link : "https://htmlcss-day6.netlify.app"},
    { src: "img/htmlcss-artpark.png", title : "ArtPark", link : "https://htmlcss-artpark.netlify.app"},
    { src: "img/box.PNG" },
    { src: "img/javascript/javascript-numberquiz.gif", title : "NumberQuiz", link : "https://pro1numberquiz.netlify.app"},
    { src: "img/javascript/javascript-todolist.png", title : "TodoList", link : "https://pratice2todolist.netlify.app"},
    { src: "img/javascript/javascript-21movie.PNG" , title : "21Movie", link : "https://21movie.netlify.app"},
    { src: "img/box.PNG" },
    { src: "img/react/react-rockpaperscissor.png", title : "RockPaperScissor", link : "https://react-rockpaperscissor.netlify.app"},
    { src: "img/react/react-weatherlocation.png", title : "WeatherCity", link : "https://react-weatherlocation.netlify.app"},
    { src: "img/react/react-phonebook1.png" , title : "PhoneBook", link : "https://react-phonebook1.netlify.app"},
    { src: "img/react/react-geonworks.PNG" , title : "GeonWorks", link : "https://react-geonworks.netlify.app"}
];

const render = () =>{
    let projectHTML = ``;
    for(let i=0;i<projectList.length;i+=4){
        projectHTML += `<div class="row box-zone">`
        for(let j=i; j < i + 4 && j<projectHTML.length; j++){
            projectHTML += `
            <div class="col-xxl-2 col-md-5 box">
                    <img src="${projectList[j].src}" alt="" class="inner-img" onclick="openModal(${j})">
                </div>`
        }
        projectHTML += `</div>`;
    }

    document.getElementById("Project").innerHTML = projectHTML;

    let modalHTML = projectList.map((item, index) => `
        <div class="modal fade" id="modal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content modal-section">
                        <div class="modal-inner">
                            <div class="modal-inner-left">
                                <img src="${item.src}" alt="" id="modal-img">
                            </div>
                            <div class="modal-inner-right">
                                <h3>${item.title}</h3>
                                <p>Best-selling author Adam Gidwitz was looking for a redesign that would mirror his
                                    unique writing style and could expand to include current and future projects.</p>
                                <a href=${item.link} target="_blank"><button
                                        class="modal-inner-view">VIEW WEBSITE</button></a>
                            </div>
                        </div>
                        <button class="modal-closebtn" onclick="closeModal(${index})">X</button>
                    </div>
                </div>
            </div>
    `).join('');

    document.getElementById("modalContainer").innerHTML = modalHTML;
}


const openModal = (index) => {
    let myModal = new bootstrap.Modal(document.getElementById(`modal${index}`));
    myModal.show();
}

const closeModal = (index) => {
    let myModal = bootstrap.Modal.getInstance(document.getElementById(`modal${index}`));
    myModal.hide();
}




document.addEventListener("DOMContentLoaded", render);
