const posts = [
  {
    title: "Post one",
    body: "First post"
  },
  {
    title: "Post two",
    body: "Second Post"
  }
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
      console.log(index);
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Something went wrong!");
      }
    }, 2000);
  });
}

// createPosts({
//     title: 'Post three',
//     body: 'Third post'
// })
//     .then(getPost)
//     .catch(err => console.log(err));

//Async await
// async function init() {
//   await createPosts({
//     title: "Post three",
//     body: "Third post"
//   });
//   getPost();
// }

// init();

//Async await fetch
async function fetchUsers(){
    const resolve = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await resolve.json();
    console.log(data);
}

fetchUsers();


//     Promise.all
// const promise1 = Promise.resolve("hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json());
// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));
