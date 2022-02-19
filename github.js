console.log('Hey, Give your github userName');

const getInfoButton = document.getElementById('getInfo');
const userNameInput = document.getElementById('userName');
const userInfoDiv = document.getElementsByClassName('userInfo')[0];
const projectDetailsDiv = document.getElementsByClassName('projects-details')[0];


const getUserInfo = () => {
    const userName = userNameInput.value;
    if (userName === '') {
        return alert('Please give your github username')
    }
    let repos_url = '';
    // get userInfo request
    fetch(`https://api.github.com/users/${userName}`)
        .then((res) => {
            if(res.status === 200)
               return res.json();
            else
                alert('Response Error')
        })
        .then((data) => {
            repos_url = data.repos_url;
            userInfoDiv.innerHTML = `<div class="card" style="width: 18rem;">
            <img src=${data.avatar_url} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${data.login}</h6>
              <p class="card-text">${data.bio}</p>
              <p>${data.followers} followers  ${data.following} followings</p>
              <a href=${data.html_url} class="btn btn-primary">Checkout Github Profile</a>
            </div>
          </div>`
        })
        

        console.log(repos_url);
    // fetch(repos_url)
    // .then(res => {
    //     console.log(res)
    //     res.json();
    // })
    // .then(data => console.log(data))
}

const githubUsers = ['Vishal-raj-1', "Rohitkantaram", 'Chiragpathak976'];

function showAllUserProfile() {
    for (let i = 0; i < githubUsers.length; i++) {
        fetch(`https://api.github.com/users/${githubUsers[i]}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                userInfoDiv.innerHTML += `<div class="card" style="width: 18rem;">
            <img src=${data.avatar_url} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${data.login}</h6>
              <p class="card-text">${data.bio}</p>
              <p>${data.followers} followers  ${data.following} followings</p>
              <a href=${data.html_url} class="btn btn-primary">Checkout Github Profile</a>
            </div>
          </div>`
            })
    }

}

// showAllUserProfile();
getInfoButton.addEventListener('click', getUserInfo)
