function navigateTo(id) {
  const contents = document.querySelector(".window-navigate");
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("window-active");
  }
  const selectedContent = document.getElementById(id);
  selectedContent.classList.add("window-active");
  loadData(id);

  document.body.classList.remove("bg-1", "bg-2", "bg-3", "bg-4");
  switch (id) {
    case "Home":
      document.body.classList.add("bg-1");
      break;
    case "Destination":
      document.body.classList.add("bg-2");
      break;
    case "Crew":
      document.body.classList.add("bg-3");
      break;
    case "Technology":
      document.body.classList.add("bg-4");
      break;
    default:
      console.log("Error");
  }
}

async function loadData(id) {
  const response = await fetch("/data.json");
  const loadData = await response.json();
  let data = document.getElementById("Home");
  data.innerHTML = "";

  switch (id) {
    case "Home":
      data.innerHTML = `
    <div class="content-details ">
        <h2 class="subtitle">SO, YOU WANT TO TRAVEL TO</h2>
        <h1 class="title">SPACE</h1>
        <p class="ph-body">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div class="explore-more-container">
        <button class="explore-botton" onclick="navigateTo('Destination')">
          EXPLORE
        </button>
      </div>
      `;

      break;

    case "Destination":
      data.innerHTML = `
      <div class="title-of-page">
      <h1 class="subtitle content-wrapper"><b>01</b> PICK YOUR DESTINATION</h1>
      <div class="window-navigate wrapper-row">
      <div class="content-details">
        <img class="style-planet" src="${
          loadData.destinations[0].images.png
        }" />
      </div>
      <div class="wrapper explore-more-container">
        <div class= "links-planet">
          <button "> <a href="#" class="destination-btn" >${loadData.destinations[0].name.toUpperCase()}</a></button>
          <button "> <a href="#" class="destination-btn">${loadData.destinations[1].name.toUpperCase()}</a></button>
          <button "> <a href="#" class="destination-btn">${loadData.destinations[2].name.toUpperCase()}</a></button>
          <button "> <a href="#" class="destination-btn">${loadData.destinations[3].name.toUpperCase()}</a></button>
        </div>
        <div class="wrapper">
          <div class="wrapper ">
            <h1 class="title-category title-planet">${loadData.destinations[0].name.toUpperCase()}</h1>
            <p class="ph-body description-category">${
              loadData.destinations[0].description
            }</p>
          </div>
          <img src="./assets/logo/Rectangle.png" >
          <div class="wrapper-row">
            <div class="det">
              <h3 >AVG. Distance</h3>
              <h1 class="distance-mesure">${loadData.destinations[0].distance.toUpperCase()}</h1>
            </div>
            <div class="det">
              <h3>EST. Travel time</h3>
              <h1 class="time">${loadData.destinations[0].travel.toUpperCase()}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>`;
      let planets = document.querySelectorAll(".destination-btn");
      let planetImg = document.querySelector(".style-planet");
      let titleCtg = document.querySelector(".title-planet");
      let descriptionCategory = document.querySelector(".description-category");
      let distanceMesure = document.querySelector(".distance-mesure");
      let time = document.querySelector(".time");
      planets.forEach(
        (p, i) =>
          (p.onclick = () => {
            titleCtg.innerHTML = p.innerHTML;
            planetImg.src = loadData.destinations[i].images.png;
            descriptionCategory.innerHTML =
              loadData.destinations[i].description;
            distanceMesure.innerHTML =
              loadData.destinations[i].distance.toUpperCase();
            time.innerHTML = loadData.destinations[i].travel.toUpperCase();
          })
      );
      break;

    case "Crew":
      data.innerHTML = `
      <div class="title-of-page ">
      <h1 class="subtitle"><b>02</b> MEET YOUR CREW</h1>
      <div class="window-navigate wrapper-row">
      <div class="content-details">
        <h2 class="subtitle role" >${loadData.crew[0].role.toUpperCase()}</h2>
        <h1 class="title-category name-member">${loadData.crew[0].name.toUpperCase()}</h1>
        <p class="ph-body bio">
         ${loadData.crew[0].bio}
        </p>
         <div>
             <button class="crew-btn"></button>
            <button class="crew-btn"></button>
            <button class="crew-btn"></button>
            <button class="crew-btn"></button>
        </div>
        </div>
      <div class="explore-more-container">
        <img class="style-planet member-img" src="${
          loadData.crew[0].images.png
        }" />
        </div>`;
      let members = document.querySelectorAll(".crew-btn");
      let memberImg = document.querySelector(".member-img");
      let role = document.querySelector(".role");
      let bio = document.querySelector(".bio");
      let nameMember = document.querySelector(".name-member");

      members.forEach(
        (m, i) =>
          (m.onclick = () => {
            role.innerHTML = loadData.crew[i].role.toUpperCase();
            memberImg.src = loadData.crew[i].images.png;
            nameMember.innerHTML = loadData.crew[i].name.toUpperCase();
            bio.innerHTML = loadData.crew[i].bio;
          })
      );
      break;
    case "Technology":
      data.innerHTML = `
      <div class="title-of-page ">
      <h1 class="subtitle"><b>02</b> MEET YOUR CREW</h1>
      <div class="wrapper-row">
      <div class="window-navigate wrapper-row content-details">
       <div class="wrapper-row ">
       <div class="wrapper">
      <button class="techno-btn">1</button>
      <button class="techno-btn">2</button>
      <button class="techno-btn">3</button>
      </div>
       <div>
      <div class="">
        <h2 class="subtitle" >Te Technology...</h2>
        <h1 class="title-category techno-name">${loadData.technology[0].name.toUpperCase()}</h1>
        <p class="ph-body techno-description">${
          loadData.technology[0].description
        }
        </p>
        </div>
      </div>
      </div>
      </div>
      
      <div class=" techno-img explore-more-container">
        <img class="style-planet" src='${
          loadData.technology[0].images.portrait
        }' />
      </div>`;
      let technoCategory = document.querySelectorAll(".techno-btn");
      let technoImg = document.querySelector(".techno-img");
      let technoName = document.querySelector(".techno-name");
      let technoDescription = document.querySelector(".techno-description");
      technoCategory.forEach(
        (t, i) =>
          (t.onclick = () => {
            technoName.innerHTML = loadData.technology[i].name.toUpperCase();
            technoDescription.innerHTML = loadData.technology[i].description;
            technoImg.src = loadData.technology[i].images.portrait;
          })
      );

      break;
    default:
      console.log("Error");
  }
}
