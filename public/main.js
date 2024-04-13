document.addEventListener("DOMContentLoaded", async() => {
    const listFurn = document.getElementById("furniture-list");
    const button = document.getElementById("showFurniture");
    const button1 = document.getElementById("orderByLikes");
    const showMyFurnitureBtn = document.getElementById("showMyFurniture");

    try {
      const response = await fetch("/furniture", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
      });

      const data = await response.json();

      if (response.ok) {
        for (let i = 0; i < data.length; i++) {
          listFurn.innerHTML += `
              <div class="furniture-card">
                  <div class="furniture-info">
                      <h2 class="furniture-title">${data[i].type}</h2>
                      <p class="furniture-description">${data[i].description}</p>
                      <p class="furniture-id">ID: ${data[i].furniture_id}</p>
                      <p class="furniture-seller">Seller: ${data[i].seller_id}</p>
                      <p class="furniture-condition">Condition: ${data[i].condition}</p>
                  </div>
                  <img src="${data[i].picture_urls}" alt="Furniture Image" class="furniture-image"/>
              </div>
          `;
        }
      } else {
          listFurn.innerHTML = data.error;
      }
    } catch (error) {
        console.error("Error:", error);
    }

    button.addEventListener("click", async (event) => {
      event.preventDefault();
      console.log("event")
      listFurn.innerHTML = "";
      try {
        const response = await fetch("/furniture", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        });
  
        const data = await response.json();
  
        if (response.ok) {

          for (let i = 0; i < data.length; i++) {
            listFurn.innerHTML += `
                <div class="furniture-card">
                    <div class="furniture-info">
                        <h2 class="furniture-title">${data[i].type}</h2>
                        <p class="furniture-description">${data[i].description}</p>
                        <p class="furniture-id">ID: ${data[i].furniture_id}</p>
                        <p class="furniture-seller">Seller: ${data[i].seller_id}</p>
                        <p class="furniture-condition">Condition: ${data[i].condition}</p>
                    </div>
                    <img src="${data[i].picture_urls}" alt="Furniture Image" class="furniture-image"/>
                </div>
            `;
          }

        } else {
            listFurn.innerHTML = data.error;
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });

    button1.addEventListener("click", async (event) => {
        event.preventDefault();
        console.log("event")
        listFurn.innerHTML = "";
        try {
          const response = await fetch("/furniture_likes", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(),
          });
    
          const data = await response.json();
    
          if (response.ok) {
  
            for (let i = 0; i < data.length; i++) {
              listFurn.innerHTML += `
                  <div class="furniture-card">
                      <div class="furniture-info">
                          <h2 class="furniture-title">${data[i].type}</h2>
                          <p class="furniture-description">${data[i].description}</p>
                          <p class="furniture-id">ID: ${data[i].furniture_id}</p>
                          <p class="furniture-seller">Seller: ${data[i].seller_id}</p>
                          <p class="furniture-condition">Condition: ${data[i].condition}</p>
                      </div>
                      <img src="${data[i].picture_urls}" alt="Furniture Image" class="furniture-image"/>
                  </div>
              `;
            }
  
          } else {
            console.log("Adaddsasdas");
              listFurn.innerHTML = data.error;
          }
        } catch (error) {
          console.error("Error:", error);
        }
      });

    showMyFurnitureBtn.addEventListener("click", async (event) => {
        event.preventDefault();
        console.log("event")
        listFurn.innerHTML = "";
        try {
            const response = await fetch("/my_listing", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(),
            });

            const data = await response.json();

            if (response.ok) {

              for (let i = 0; i < data.length; i++) {
                listFurn.innerHTML += `
                    <div class="furniture-card">
                        <div class="furniture-info">
                            <h2 class="furniture-title">${data[i].type}</h2>
                            <p class="furniture-description">${data[i].description}</p>
                            <p class="furniture-id">ID: ${data[i].furniture_id}</p>
                            <p class="furniture-seller">Seller: ${data[i].seller_id}</p>
                            <p class="furniture-condition">Condition: ${data[i].condition}</p>
                        </div>
                        <img src="${data[i].picture_urls}" alt="Furniture Image" class="furniture-image"/>
                    </div>
                `;
              }

            } else {
                console.log("Adaddsasdas");
                listFurn.innerHTML = data.error;
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });

    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if(window.scrollY > 50) {
          navbar.classList.add('solid');
      } else {
          navbar.classList.remove('solid');
      }
    });
  
    // Toggle dropdown menu on click
    const menuIcon = document.querySelector('.menu-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (menuIcon && dropdownMenu) {
      menuIcon.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show-dropdown');
      });
    }
});
