// document.querySelector(".add-user").addEventListener("click", function () {
//   document.querySelector(".popup.add").classList.add("active");
// });

// document.getElementById("addUserForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const Binnumber = this.elements.Binnumber.value;
//   const location = this.elements.location.value;
//   const address = this.elements.address.value;
//   const maintenanceDate = this.elements.maintenanceDate.value;

//   const newRow = `
//     <tr>
//       <td>${Binnumber}</td>
//       <td>${location}</td>
//       <td>${address}</td>
//       <td>${maintenanceDate}</td>
//       <td>empty</td>
//       <td>
//         <button class="edit">Edit</button>
//         <button class="delete">Delete</button>
//       </td>
//     </tr>
//   `;

//   document.querySelector("#crud tbody").insertAdjacentHTML("beforeend", newRow);
//   document.querySelector(".popup.add").classList.remove("active");
//   this.reset();
// });

// document.querySelector("#crud tbody").addEventListener("click", function (e) {
//   if (e.target.classList.contains("edit")) {
//     const row = e.target.closest("tr");
//     const cells = row.querySelectorAll("td");

//     document.querySelector('.popup.update input[name="Binnumber"]').value =
//       cells[0].textContent;
//     document.querySelector('.popup.update input[name="location"]').value =
//       cells[1].textContent;
//     document.querySelector('.popup.update input[name="address"]').value =
//       cells[2].textContent;
//     document.querySelector(
//       '.popup.update input[name="maintenanceDate"]'
//     ).value = cells[3].textContent;

//     document.querySelector(".popup.update").classList.add("active");
//     row.remove();
//   }
// });

// document
//   .getElementById("updateUserForm")
//   .addEventListener("submit", function (e) {
//     e.preventDefault();

//     const Binnumber = this.elements.Binnumber.value;
//     const location = this.elements.location.value;
//     const address = this.elements.address.value;
//     const maintenanceDate = this.elements.maintenanceDate.value;

//     const updatedRow = `
//     <tr>
//       <td>${Binnumber}</td>
//       <td>${location}</td>
//       <td>${address}</td>
//       <td>${maintenanceDate}</td>
//       <td>empty</td>
//       <td>
//         <button class="edit">Edit</button>
//         <button class="delete">Delete</button>
//       </td>
//     </tr>
//   `;

//     document
//       .querySelector("#crud tbody")
//       .insertAdjacentHTML("beforeend", updatedRow);
//     document.querySelector(".popup.update").classList.remove("active");
//     this.reset();
//   });

// document.querySelector("#crud tbody").addEventListener("click", function (e) {
//   if (e.target.classList.contains("delete")) {
//     const confirmation = confirm("Are you sure you want to delete this user?");
//     if (confirmation) {
//       e.target.closest("tr").remove();
//     }
//   }
// });

// Functionality for opening the "Add Bin" popup
document.querySelector(".add-user").addEventListener("click", function () {
  document.querySelector(".popup.add").classList.add("active");
});

// Functionality for submitting the "Add Bin" form
document.getElementById("addUserForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const Binnumber = this.elements.Binnumber.value;
  const location = this.elements.location.value;
  const address = this.elements.address.value;
  const maintenanceDate = this.elements.maintenanceDate.value;

  const newRow = `
    <tr>
      <td>${Binnumber}</td>
      <td>${location}</td>
      <td>${address}</td>
      <td>${maintenanceDate}</td>
      <td>empty</td>
      <td>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </td>
    </tr>
  `;

  document.querySelector("#crud tbody").insertAdjacentHTML("beforeend", newRow);
  document.querySelector(".popup.add").classList.remove("active");
  this.reset();
});

// Functionality for opening the "Edit Bin" popup
document.querySelector("#crud tbody").addEventListener("click", function (e) {
  if (e.target.classList.contains("edit")) {
    const row = e.target.closest("tr");
    const cells = row.querySelectorAll("td");

    document.querySelector('.popup.update input[name="Binnumber"]').value =
      cells[0].textContent;
    document.querySelector('.popup.update input[name="location"]').value =
      cells[1].textContent;
    document.querySelector('.popup.update input[name="address"]').value =
      cells[2].textContent;
    document.querySelector(
      '.popup.update input[name="maintenanceDate"]'
    ).value = cells[3].textContent;

    document.querySelector(".popup.update").classList.add("active");
    row.remove();
  }
});

// Functionality for submitting the "Edit Bin" form
document
  .getElementById("updateUserForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const Binnumber = this.elements.Binnumber.value;
    const location = this.elements.location.value;
    const address = this.elements.address.value;
    const maintenanceDate = this.elements.maintenanceDate.value;

    const updatedRow = `
    <tr>
      <td>${Binnumber}</td>
      <td>${location}</td>
      <td>${address}</td>
      <td>${maintenanceDate}</td>
      <td>empty</td>
      <td>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </td>
    </tr>
  `;

    document
      .querySelector("#crud tbody")
      .insertAdjacentHTML("beforeend", updatedRow);
    document.querySelector(".popup.update").classList.remove("active");
    this.reset();
  });

// Functionality for deleting a row
document.querySelector("#crud tbody").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    const confirmation = confirm("Are you sure you want to delete this bin?");
    if (confirmation) {
      e.target.closest("tr").remove();
    }
  }
});

// Functionality for the "Cancel" button in "Add Bin" popup
document
  .querySelector(".popup.add .cancel-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup.add").classList.remove("active");
    document.getElementById("addUserForm").reset(); // Reset form fields
  });

// Functionality for the "Cancel" button in "Edit Bin" popup
document
  .querySelector(".popup.update .cancel-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup.update").classList.remove("active");
    document.getElementById("updateUserForm").reset(); // Reset form fields
  });
