const ROOT_NOTES = document.getElementById("notes");
let CATALOG = [];

class Notes {
  render() {
    let htmlCatalog = "";
    CATALOG.forEach(({ id, title, text, author, createDate }) => {
      htmlCatalog += `
      <li class="notes-element">
          <span class="notes-element__title">${title}</span>
          <span class="notes-element__text">${text}</span>
          <span class="notes-element__author">${author}</span>
          <span class="notes-element__date">${createDate.substring(
            0,
            10
          )}</span>   
      </li>
  `;
    });
    const html = `
    <ul class="notes-container">
        ${htmlCatalog}
    </ul>
`;

    ROOT_NOTES.innerHTML = html;
  }
}
function renderL() {
  const notes = new Notes();
  notes.render();
}

let urlApi = "http://teddi2518-001-site1.gtempurl.com/Note/AllNotes";
fetch(urlApi)
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    renderL();
  })
  .catch((error) => {
    console.error(error);
  });
