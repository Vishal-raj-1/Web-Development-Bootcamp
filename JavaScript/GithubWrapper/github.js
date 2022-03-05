const getInfoButton = document.getElementById("getInfo");
const userNameInput = document.getElementById("userName");
const userInfoDiv = document.getElementsByClassName("userInfo")[0];

const getUserInfo = () => {
  const userName = userNameInput.value;
  if (userName === "") {
    return alert("Please give your github username");
  }
  fetch(`https://api.github.com/users/${userName}`)
    .then((res) => {
      if (res.status === 200) 
        return res.json();
      else 
        alert("Response Error");
    })
    .then((data) => {
      userInfoDiv.innerHTML += `<div class="d-flex flex-row mt-3 card" style="width: 500px;">
            <img src=${data.avatar_url} class="card-img-top" alt="..." style="width: 230px;">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${data.login}</h6>
              <p class="card-text">${data.bio}</p>
              <p>${data.followers} followers  ${data.following} followings</p>
              <a href=${data.html_url} class="btn btn-primary">Checkout Github Profile</a>
            </div>
          </div>`;
    });
};

getInfoButton.addEventListener("click", getUserInfo);
