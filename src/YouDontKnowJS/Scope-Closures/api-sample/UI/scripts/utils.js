// eslint-disable-next-line no-unused-vars
const Utils = (() => {
    return {
        isEmpty(obj) {
            // eslint-disable-next-line no-restricted-syntax
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    return false;
                }
            }
            return true;
        },
    };
})();
