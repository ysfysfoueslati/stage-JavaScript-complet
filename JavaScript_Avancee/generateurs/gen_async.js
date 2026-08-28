async function* fetchUsers() {
  let page = 0;
  while (true) {
    const items = await fetch(
      "https://jsonplaceholder.typicode.com/users?_limit=10&_start=" + 10 * page
    ).then((r) => r.json());

    if (items.length === 0) {
      return;
    }

    yield items;
    page++;
  }
}

async function* fetchUser() {
  for await (const page of fetchUsers()) {
    for (const user of page) {
      yield user;
    }
  }
}

const userList=fetchUser()
console.log((await userList.next()).value);
console.log((await userList.next()).value);
console.log((await userList.next()).value);
console.log((await userList.next()).value);
console.log((await userList.next()).value);
console.log((await userList.next()).value);
console.log((await userList.next()).value);
console.log((await userList.next()).value);
console.log((await userList.next()).value);