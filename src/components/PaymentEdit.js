import React, { useState, useEffect } from 'react';
import '../styles/PaymentEdit.css';
import CheckModal from '../components/CheckModal';
import InputModal from '../components/InputModal';
import categoryColors from '../constants/cat';
import styled from '@emotion/styled';
import { editRecordList, createCategory, uploadReceiptImg } from '../services/service';

function PaymentEdit({
  setCatList,
  curledger,
  title,
  price,
  time,
  name,
  setIsEditFalse,
  catName,
  categoryList,
  addCatList,
  recordId,
}) {
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const [checkCatBtn, setCheckCatBtn] = useState(catName);
  const [inputTitle, setInputTitle] = useState(title);
  const [inputPrice, setInputPrice] = useState(price);
  const [imageFile, setImageFile] = useState(null);
  const curLedgerId = curledger.ledgerId;
  
  const newData = {
    image: null,
    recordId: recordId,
  };

  const handleCatBtn = (e) => {
    setCheckCatBtn(e.target.value);
  };

  function handleOnChange(receipt) {
    if (receipt) {
      setImageFile(URL.createObjectURL(receipt));
    }
  }

  const handleEditBtn = () => {
    for (let key in imageFile.keys()) {
      console.log(key ,':', imageFile.get(key))
    }

    uploadReceiptImg(imageFile).then((res) => {
      console.log('upload', res, res.data);
    });
    editRecordList({
      recordId: recordId,
      categoryName: checkCatBtn,
      tranName: inputTitle,
      tranAmount: Number(inputPrice),
    })
      .then((res) => {
        console.log('edit', res, res.data);
      })
      .catch(() => {
        alert('서버와의 연결이 원활하지 않습니다.');
      });
  };
  console.log('addCat', curledger.ledgerId);
  useEffect(() => {
    setInputTitle(title);
    setInputPrice(price);
  }, [title, price]);

  return (
    <div className="accordion-body">
      <div className="vertical">
        <div className="vertical-line"></div>
        <div className="vertical-body">
          <div className="body-cat">
            <div className="vertical-dot"></div>
            <div className='catBox'>
              <div className='defaultCatBox'>
                {categoryList.map((item, index) => (
                  <div className="my-btn" key={index}>
                    <input
                      type="button"
                      onClick={handleCatBtn}
                      className={`cat-btn`}
                      style={{ backgroundColor: categoryColors[item.customCategoryName] || '#808080' }}
                      value={item.customCategoryName}
                    ></input>
                    {checkCatBtn === item.customCategoryName ? <i className="bi bi-check"></i> : ''}
                  </div>
                ))}
              </div>
              <div className="my-btn">
                <button
                  type="button"
                  onClick={() => {
                    setIsInputModalOpen(true);
                  }}
                  className="cat-plus"
                >
                  +
                </button>
                {isInputModalOpen && (
                  <InputModal
                    title="카테고리 추가"
                    content="만들어야함"
                    cancelMsg="취소"
                    acceptMsg="확인"
                    acceptFunc={(newCat) => {
                      createCategory({ ledgerId: curLedgerId, customCategoryName: newCat })
                        .then((res) => {
                          setCatList((prev) => [...prev, newCat]);
                          console.log(categoryList);
                          console.log('category create success!', res.data);
                        })
                        .catch(() => {
                          alert('서버와의 연결이 원활하지 않습니다.');
                        });
                      setIsInputModalOpen(false);
                    }}
                    cancelFunc={() => setIsInputModalOpen(false)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="body-content">
            <div className="vertical-dot"></div>
            <ClearBtn onClick={() => setInputTitle('')}>x</ClearBtn>
            <input
              className="inputBox"
              type="text"
              value={inputTitle}
              onChange={(e) => {
                setInputTitle(e.target.value);
              }}
            />
          </div>
          <div className="body-price">
            <div className="vertical-dot"></div>
            <ClearBtn onClick={() => setInputPrice('')}>x</ClearBtn>
            <input
              className="inputBox"
              type="text"
              value={inputPrice}
              onChange={(e) => {
                setInputPrice(e.target.value);
              }}
            />
          </div>

          <div className="body-receipt">
            <div className="vertical-dot"></div>
            <AddImgBox>
              <label htmlFor="edit_file">
                <div className="addImg">
                  {imageFile ? <img src={imageFile} alt="inputReceipt" /> : <DefaultImg>+</DefaultImg>}
                </div>
              </label>
              <input type="file" id="edit_file" accept="image/*" onChange={(e) => {handleOnChange(e.target.files[0]);}}/>
            </AddImgBox>
          </div>
          <div className="body-time">
            <div className="vertical-dot"></div>
            <span className="record-info">
              {time} | {name}
            </span>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button className="del-btn" onClick={() => setIsCancelModalOpen(true)}>
          취소
        </button>
        {isCancelModalOpen && (
          <CheckModal
            cancelFunc={() => setIsCancelModalOpen(false)}
            acceptFunc={() => {
              setIsCancelModalOpen(false);
              setIsEditFalse();
            }}
            title="취소하시겠습니까?"
            content="취소하시면 모든 수정 내역이 취소됩니다."
            cancelMsg="취소"
            acceptMsg="확인"
          />
        )}
        <button className="edit-btn" onClick={handleEditBtn}>
          저장
        </button>
      </div>
    </div>
  );
}
const DefaultImg = styled.div`
  width: 80px;
  height: 120px;
  border: dotted;
  line-height: 120px;
  text-align: center;
`
const AddImgBox = styled.div`
  margin: 0 8px 0 8px;
  img {
    width: 80px;
    height: 120px;
  }
  label {
    display: inline-block;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
const ClearBtn = styled.div`
  height: 1px;
  width: 1px;
  font-size: 16px;
  font-family: KBTextB;
  color: #aab0b8;
  position: relative !important;
  border-radius: 50%;
  display: inline-block;
  justify-content: center;
  left: 265px;
  top: -1px;
  z-index: 0;
`

export default PaymentEdit;
