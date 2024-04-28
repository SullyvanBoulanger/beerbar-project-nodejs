const barsTableBody = document.querySelector(".bars tbody");
const barDetailsDiv = document.querySelector(".bar-details");

const getBars = async () => {
  const bars = await fetch("/api/bars").then((res) => res.json());
  barsTableBody.innerHTML = `${bars
    .map(
      ({ id, name, address }) => `
        <tr>
          <td>${name}</td>
          <td>${address}</td>
          <td>
            <button onclick="getBarDetails(${id})">➕</button>
          </td>
        </tr>`
    )
    .join("")}`;
};

getBars();

window.getBarDetails = async (barId) => {
  const { name, description, address, tel, email } = await fetch(
    "/api/bars/" + barId
  ).then((res) => res.json());
  barDetailsDiv.hidden = false;
  barDetailsDiv.innerHTML = `
    <hr />
    <h2>Détails du bar "${name}"</h2>
    <h3>${description}</h3>
    <div><strong>Adresse:</strong> ${address}</div>
    <div><strong>Tel:</strong> ${tel}</div>
    <div><strong>Email:</strong> ${email}</div>
    
  `;
};
