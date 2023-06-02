import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '56324c47e30d4afeb75b25a89cc448da'
    }
});