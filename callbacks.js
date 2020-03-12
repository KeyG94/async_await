const posts = [
    {
        title: 'Post one', 
        body: 'First post'
    },
    {
        title: 'Post two',
        body: 'Second Post'
    }
];

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
            console.log(index)
        });
        
        document.body.innerHTML = output;
    }, 1000)
}

function createPosts(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPosts({
    title: 'Post three',
    body: 'Third post'
}, getPost);