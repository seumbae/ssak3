import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER_BASEURL,
})

 /* 임시 */
// User

// parameters : userId(Integer), 유저 조회
export const getUsers = async (data) => await API.post('/user', data);
// parameters : isNewUser(Boolean), 유저 생성
export const createUser = async (data) => await API.post('/user/create', data);


// Ledger(임시)

// parameters : userId(Integer), 나의 가계부 목록 조회
export const getMyList = async (data) => await API.get('/ledger/my-list', data);
// parameters : userId(Integer), 나를 제외한 모든 사용자의 가계부 목록 조회
export const getOthersList = async (data) => await API.get('/ledger/others-list', data);
// parameters : ledgerId(Integer), 기존 가계부 삭제
export const remove = async (data) => await API.post('/ledger/remove', data);
// parameters : ledgerId(Integer), 기존 가계부 편집
export const modify = async (data) => await API.post('/ledger/remove', data);


// Category

// parameters : categoryId(Integer), 카테고리 삭제(Category Id는 unique함)
export const removeCategory = async (categoryId) => await API.delete(`/category/${categoryId}`);
// parameters : ledgerId(Integer), 해당 가계부의 카테고리 목록 조회
export const getCategories = async (data) => await API.post('/category', data);
// body : {"ledgerId": Integer, "customCategoryName : "string"}, 해당 카테고리 등록
export const createCategory = async (data) => await API.post('/category/create', data);
