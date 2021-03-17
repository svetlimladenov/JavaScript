const followers = function followers(input) {
    function addUser(username, db) {
        const localDb = JSON.parse(JSON.stringify(db));
        if (!localDb[username]) {
            localDb[username] = {
                username,
                followers: [],
                following: [],
            };
        }
        return localDb;
    }

    function printResult(result) {
        const keys = Object.keys(result)
            .sort((a, b) => {
                const followerDiff = result[b].followers.length - result[a].followers.length;
                if (followerDiff) {
                    return followerDiff;
                }
                if (result[a].username > result[b].username) {
                    return -1;
                }

                if (result[b].username > result[a].username) {
                    return 1;
                }

                return 0;
            });

        console.log(`Total users registered: ${keys.length}`);
        keys.forEach((key, index) => {
            const user = result[key];
            console.log(`${index + 1}. ${user.username} : ${user.following.length} following, ${user.followers.length} followers`);
            if (index === 0) {
                user.followers.sort().forEach((follower) => {
                    console.log(`*  ${follower}`);
                });
            }
        });
    }

    const result = input.reduce((database, cur) => {
        let localDatabase = JSON.parse(JSON.stringify(database));
        const splitedLine = cur.split(' ');
        if (splitedLine[0] === 'Welcome,') {
            const username = splitedLine[1];
            localDatabase = addUser(username, localDatabase);
        } else {
            const follower = localDatabase[splitedLine[0]];
            const user = localDatabase[splitedLine[2]];
            if (follower && user && follower !== user) {
                if (follower.following.indexOf(user.username) < 0) {
                    user.followers.push(follower.username);
                    follower.following.push(user.username);
                }
            }
        }
        return localDatabase;
    }, {});

    printResult(result);
};

const followersInput = [
    'Welcome, EmilConrad',
    'Welcome, VenomTheDoctor',
    'Welcome, Saffrona',
    'Saffrona followed EmilConrad',
    'Saffrona followed VenomTheDoctor',
    'EmilConrad followed VenomTheDoctor',
    'VenomTheDoctor followed VenomTheDoctor',
    'Saffrona followed EmilConrad',
];

const secondInput = [
    'Welcome, JennaMarbles',
    'JennaMarbles followed Zoella',
    'Welcome, AmazingPhil',
    'JennaMarbles followed AmazingPhil',
    'Welcome, Zoella',
    'Welcome, JennaMarbles',
    'Zoella followed AmazingPhil',
    'Christy followed Zoella',
    'Zoella followed Christy',
    'Welcome, JacksGap',
    'JacksGap followed JennaMarbles',
    'Welcome, PewDiePie',
    'Welcome, Zoella',
];

const browserLogger = function browserLogger(browser, actions) {
    const localBrowser = JSON.parse(JSON.stringify(browser));
    localBrowser.open = (website) => {
        localBrowser["Open Tabs"].push(website);
        return true;
    };

    localBrowser.close = (website) => {
        const index = localBrowser["Open Tabs"].indexOf(website);
        if (index < 0) {
            return false;
        }
        localBrowser["Open Tabs"].splice(index, 1);
        localBrowser["Recently Closed"].push(website);
        return true;
    };

    localBrowser.clear = () => {
        localBrowser['Open Tabs'] = [];
        localBrowser["Recently Closed"] = [];
        localBrowser['Browser Logs'] = [];
        return false;
    };

    const result = actions.reduce((acc, curr) => {
        const [command, website] = curr.split(' ');
        const lowerCommand = command.toLowerCase();
        if (acc[lowerCommand](website)) {
            acc['Browser Logs'].push(curr);
        }
        return acc;
    }, localBrowser);

    console.log(result["Browser Name"]);
    console.log(`Open Tabs: ${result['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${result['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${result['Browser Logs'].join(', ')}`);
};

// browserLogger({
//     "Browser Name": "Google Chrome",
//     "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"],
// },
// ['Close Facebook', 'Open StackOverFlow', 'Open Google']);

browserLogger({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":['Gmail', 'Dropbox'],
"Browser Logs":['Open Gmail', 'Close Gmail', 'Open Dropbox', 'Open YouTube', 'Close Dropbox']},
['Open Wikipedia', 'Clear History and Cache', 'Open Twitter']
);