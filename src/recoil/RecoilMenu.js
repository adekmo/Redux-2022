import axios from 'axios';
import { selector } from 'recoil';
import { API_URL } from '../utiliti/konstan';

const AuthMenu = selector({
    key: 'auth-menu',
    get: async () => {
        let menu = null;

        try {
            let {data} = await axios.get(API_URL+'products/2')
            menu = {menu: data}
        } catch (e) {
            menu = {menu: e.message}
        }

        return menu;
    }
})

export { AuthMenu }