import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import '../styles/PaymentEdit.css';
import receiptImg from '../assets/images/receipt.jpg';
import CheckModal from '../components/CheckModal';
import InputModal from '../components/InputModal';
import categoryColors from '../constants/cat';
import PaymentDetail from './PaymentDetail';
import { editRecordList, createCategory, uploadReceiptImg } from '../services/service';

function PaymentEdit({
  setCatList,
  curledger,
  title,
  price,
  time,
  receiptUrl,
  name,
  setIsEditFalse,
  catName,
  categoryList,
  setIsEdit,
  recordId,
  setNewRecordData,
}) {
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const [checkCatBtn, setCheckCatBtn] = useState(catName);
  const [inputTitle, setInputTitle] = useState(title);
  const [inputPrice, setInputPrice] = useState(price);
  const [imageFile, setImageFile] = useState(null);

  const [isEditDone, setIsEditDone] = useState(false);
  const [hi, setHi] = useState('ddddd');
  const [newImgUrl, setNewImgUrl] = useState('');
  const fileInputRef = useRef(null);
  const curLedgerId = curledger.ledgerId;
  // const [imgUrl, setImgUrl] = useState('');

  const newData = {
    image: null,
    recordId: recordId,
  };
  console.log(newImgUrl);
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
        // formData.append('image', url);
        // console.log(fileList[0]);

        console.log(1111111, e);
        formData.append('recordId', recordId);
        formData.append('image', e.target.files);

        newData.image = formData;

        setImageFile(formData);
        // setImageFile({
        //   file: fileList[0],
        //   thumbnail: formData,
        //   type: fileList[0].type,
        // });
      }
    };

    const showImage = useMemo(() => {
      if (!imageFile || imageFile == null) {
        return <img className="receipt-img" src={receiptUrl} alt="receipt" />;
      }
      return (
        <input
          type="image"
          className="ShowFileImage"
          src={imageFile.url}
          alt={imageFile.type}
          onClick={handleClickFileInput}
        ></input>
      );
    }, [imageFile]);

    return (
      <div className={'FileUploadContainer'}>
        {showImage}

        <div className="FileUploadForm">
          <input className="FileInput" type="file" accept="image/jpeg" ref={fileInputRef} onChange={uploadProfile} />
          {/* <button className="FileUploadButton" type="button" onClick={handleClickFileInput}>
            파일 업로드
          </button> */}
        </div>
      </div>
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
        setHi('ffffff');
        console.log('ressss', res.data, newImgUrl, hi);
      });
    }
    console.log('recordlist 123123123');
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

        setNewRecordData([
          {
            categoryName: res.data.categoryName,
            isExpense: res.data.isExpense,
            receiptUrl: newImgUrl,
            recordId: res.data.recordId,
            tranAmount: res.data.tranAmount,
            tranName: res.data.tranName,
            tranPlace: res.data.tranPlace,
            tranTime: res.data.tranTime,
            tranYmd: res.data.tranYmd,
          },
        ]);
      })
      .catch(() => {
        alert('서버와의 연결이 원활하지 않습니다.');
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
          <div className="body-content">
            <div className="vertical-dot"></div>
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

export default PaymentEdit;
