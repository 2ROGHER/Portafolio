import { GET_SKILLS_IMAGES } from "../acitons-types";
import axios from 'axios';
export const getSkillsImages = () => (dispatch) => {
    return axios.get(`http://localhost:3001/api/skills`)
        .then((res) => {
            dispatch({ type: GET_SKILLS_IMAGES, payload: res.data.results });
        })
        .catch((err) => console.log(err));
}