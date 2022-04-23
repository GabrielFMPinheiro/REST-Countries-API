import axios from 'axios';
import { COUNTRIES_API } from '../utils/constants';

export default axios.create({
    baseURL: COUNTRIES_API,
});
