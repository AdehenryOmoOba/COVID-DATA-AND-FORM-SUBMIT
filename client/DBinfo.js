users();
async function users() {
  const response = await fetch("/api");
  const data = await response.json();
  console.log(data);

  for (content of data) {
    const parent = document.createElement("div");
    const username = document.createElement("div");
    const password = document.createElement("div");
    const date = document.createElement("div");
    parent.append(date, username, password);
    document.body.append(parent);

    const dateString = new Date(content.date).toLocaleString();
    date.textContent = `Date: ${dateString}`;
    username.textContent = `Username: ${content.username}`;
    password.textContent = `Password: ${content.password}`;
  }
}
