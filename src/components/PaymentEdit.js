import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../styles/PaymentEdit.css';
import CheckModal from '../components/CheckModal';
import InputModal from '../components/InputModal';
import categoryColors from '../constants/cat';
import styled from '@emotion/styled';
import PaymentDetail from './PaymentDetail';
import receiptImg from '../assets/images/receipt.jpg';
import { editRecordList, createCategory, uploadReceiptImg } from '../services/service';

function PaymentEdit({
  setCatList,
  curledger,
  title,
  price,
  time,
  name,
  receiptUrl,
  setIsEditFalse,
  catName,
  categoryList,
  setIsEdit,
  recordId,
  setNewRecordData,
  setEditState
  setReceiptUrl,
  recordList,
}) {
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const [checkCatBtn, setCheckCatBtn] = useState(catName);
  const [inputTitle, setInputTitle] = useState(title);
  const [inputPrice, setInputPrice] = useState(price);
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef(null);
  const [isEditDone, setIsEditDone] = useState(false);
  const [hi, setHi] = useState('ddddd');
  const [newImgUrl, setNewImgUrl] = useState('');
  const curLedgerId = curledger.ledgerId;

  const FileUpload = () => {
    const handleClickFileInput = () => {
      fileInputRef.current?.click();
    };

    const uploadProfile = (e) => {
      const fileList = e.target.files;
      const length = fileList?.length;
      if (fileList && fileList[0]) {
        const formData = new FormData();
        const url = URL.createObjectURL(fileList[0]);
        formData.append('recordId', new Blob([JSON.stringify({ recordId: recordId })], { type: 'application/json' }));
        formData.append('image', fileList[0]);
        setImageFile({
          file: fileList[0],
          url: url,
          thumbnail: formData,
          type: fileList[0].type,
          formData: formData,
        });
      }
    };

    // return (
    //   <input
    //     type="image"
    //     className="ShowFileImage"
    //     src={imageFile.url}
    //     alt={imageFile.type}
    //     onClick={handleClickFileInput}
    //   ></input>
    // );

    const showImage = useMemo(() => {
      if (!imageFile && imageFile == null) {
        return <DefaultImg>+</DefaultImg>;
      }

      return <>{receiptUrl ? <img src={receiptUrl} alt="inputReceipt" /> : <DefaultImg>+</DefaultImg>}</>;
    }, [imageFile]);

    return (
      <AddImgBox>
        <label htmlFor="edit_file">
          <div className="addImg">
            {showImage}
            {/* {imageFile ? <img src={imageFile} alt="inputReceipt" /> : <DefaultImg>+</DefaultImg>} */}
          </div>
        </label>
        <input
          type="file"
          id="edit_file"
          accept="image/jpeg"
          ref={fileInputRef}
          onClick={handleClickFileInput}
          onChange={uploadProfile}
        />
      </AddImgBox>
    );
  };

  const handleCatBtn = (e) => {
    setCheckCatBtn(e.target.value);
  };

  const handleEditBtn = () => {
    if (imageFile && imageFile != null) {
      uploadReceiptImg(imageFile.formData).then((res) => {
        console.log('upload', res, res.data);
        setNewImgUrl(res.data);
        setReceiptUrl(res.data);
      });
    }
    editRecordList({
      recordId: recordId,
      categoryName: checkCatBtn,
      tranName: inputTitle,
      tranAmount: Number(inputPrice),
    })
      .then((res) => {
        console.log('edit', res, res.data);
        setIsEditDone(true);
        setIsEdit(false);
        setEditState(false);
                // setReceiptUrl(newImgUrl);
        setNewRecordData(
          recordList.map((r) => {
            if (r.recordId === recordId) {
              return {
                ...r,

                categoryName: res.data.categoryName,
                isExpense: res.data.isExpense,
                receiptUrl: receiptUrl,
                recordId: res.data.recordId,
                tranAmount: res.data.tranAmount,
                tranName: res.data.tranName,
                tranPlace: res.data.tranPlace,
                tranTime: res.data.tranTime,
                tranYmd: res.data.tranYmd,
              };
            } else {
              return r;
            }
          }),
        );
      })
      .catch((err) => {
        alert('서버와의 연결이 원활하지 않습니다.123', err);
      });
  };
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
            <div className="catBox">
              <div className="defaultCatBox">
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

            <FileUpload />
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
              setEditState(false);
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
        {/* {isEditDone ? (
          <PaymentDetail
            title={newRecordData.tranName}
            price={newRecordData.tranAmount}
            time={newRecordData.tranTime}
            name={newRecordData.tranPlace}
            catName={newRecordData.categoryName}
            isExpense={newRecordData.isExpense}
            setIsEditTrue={() => {
              setIsEdit(false);
            }}
          />
        ) : (
          ''
        )} */}
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
`;
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
  input[type='file'] {
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
`;

export default PaymentEdit;
