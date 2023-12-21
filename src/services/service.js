import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* 임시 */
// User

// parameters : userId(Integer), 유저 조회
// export const getUsers = async (data) => await API.post('/user?userId=1');
export const getUsers = async (data) => await API.post('/user', data);
// parameters : isNewUser(Boolean), 유저 생성
export const createUser = async (data) => await API.post('/user/create', data);

// parameters : None, 테마 목록 조회(가계부 생성 시)
export const getThemeList = async () => await API.get('/ledger/theme/list');
// parameters : userId(Integer), 나의 가계부 목록 조회
export const getMyList = async (data) => await API.get('/ledger/my-list', { params: data });
// parameters : userId(Integer), 나를 제외한 모든 사용자의 가계부 목록 조회
export const getOthersList = async (data) => await API.get('/ledger/others-list', data);
// parameters : ledgerId(Integer), 기존 가계부 삭제
export const removeLedger = async (data) => await API.post('/ledger/remove', data);
// parameters : ledgerId(Integer), 기존 가계부 편집
export const modifyLedger = async (data) => await API.post('/ledger/modify', data);
// parameters : body, 가계부 생성
export const addLedger = async (data) => await API.post('/ledger/add', data);
// parameters : ledgerId(integer) 가계부 내역 목록 조회
export const getRecordList = async (data) => await API.post('/record/list', data);
// parameters : recordId, categoryId, categoryname, tranName, tranAmount 가계부 내역 수정
export const editRecordList = async (data) => await API.post('/record/edit', data);
// 영수증등록
export const uploadReceiptImg = async (data) =>
  await API.post('/record/upload', data, {
    headers: { 'Content-Type': 'multipart/form-data', accept: 'application/json' },
  });

// Category

// parameters : categoryId(Integer), 카테고리 삭제(Category Id는 unique함)
export const removeCategory = async (categoryId) => await API.delete(`/category/${categoryId}`);
// parameters : ledgerId(Integer), 해당 가계부의 카테고리 목록 조회
export const getCategories = async (data) => await API.post('/category', data);
// body : {"ledgerId": Integer, "customCategoryName : "string"}, 해당 카테고리 등록
export const createCategory = async (data) => await API.post('/category/create', data);
