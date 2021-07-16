// The whole logic behind the post loading, is hidden behind the PostLoader module
// Its hiding everything

const PostLoader = (($, utils) => {
    const postApi = {
        getAllPosts : {
            type: "GET",
            url: "https://localhost:5001/Post"
        }
    }

    let cachedPosts = {}; // This is a hidden property
    let useCacheSetting = true;

    const loadAll = function loadAll(callBack, useCache = useCacheSetting) {
        if(useCache && !utils.isEmpty(cachedPosts)) { // we can access it only via the closure of the Module
            callBack(cachedPosts);
            console.log("using cache");
            return; 
        }

        $.ajax(postApi.getAllPosts)
            .done((data) => {
                cachedPosts = data;
                callBack(data);
            });
    }

    const load = function load(id) {
        
    }

    const toggleCache = function toggleCache() {
        useCacheSetting = !useCacheSetting;
    }

    return {
        loadAll,
        toggleCache,
        load
    }
})(jQuery, Utils);