const solution = function(command) {
    const actions = {
        upvote() {
            this.upvotes += 1;
            this.downvotes -= 1;
        },
        downvote() {
            this.upvotes -= 1;
            this.downvotes += 1;
        },
        score() {
            console.log(this.upvotes);
        },
    };

    actions[command].call(this);
};

let post = {
    id: "3",
    author: "emil",
    content: "supp",
    upvotes: 100,
    downvotes: 100,
};

solution.call(post, 'upvote');
solution.call(post, 'score');
