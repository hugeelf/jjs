const url = "https://jsonplaceholder.typicode.com/users";
const div = document.querySelector(".wrapper");

const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
// localStorage.clear();

try {
  const data = await getData(url);
  data.forEach((element) => {
    localStorage.setItem(element.name, JSON.stringify(element));
    div.insertAdjacentHTML(
      "beforeend",
        `
            <div class="user" id="${element.name}">
                <h2 class="user__name"> ${element.name}</h2>
                <button class="button_del">Удалить</button>
            </div>
        `
    );
    
  });
  const btns = document.querySelectorAll('button');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const name = btn.parentElement.id;
        localStorage.removeItem(name);
        document.getElementById(name).remove();
    });
});
} catch (error) {
  console.error("Что-то пошло не так!");
}
