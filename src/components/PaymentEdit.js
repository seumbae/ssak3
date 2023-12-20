import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import '../styles/PaymentEdit.css';
import receiptImg from '../assets/images/receipt.jpg';
import CheckModal from '../components/CheckModal';
import InputModal from '../components/InputModal';
import categoryColors from '../constants/cat';
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
  const fileInputRef = useRef(null);
  const curLedgerId = curledger.ledgerId;
  // const [imgUrl, setImgUrl] = useState('');
  const newData = {
    image: null,
    recordId: recordId,
  };
  const FileUpload = () => {
    const handleClickFileInput = () => {
      console.log('clicked!!');
      fileInputRef.current?.click();
    };

    const uploadProfile = (e) => {
      const fileList = e.target.files;
      const length = fileList?.length;
      if (fileList && fileList[0]) {
        const url = URL.createObjectURL(fileList[0]);
        const formData = new FormData();
        // formData.append('image', url);
        console.log(fileList[0]);
        formData.append('image', e.target.files);
        console.log('formData', formData, fileList, url);
        newData.image = formData;
        setImageFile({
          file: fileList[0],
          thumbnail: formData,
          type: fileList[0].type,
        });
      }
    };

    const showImage = useMemo(() => {
      if (!imageFile || imageFile == null) {
        console.log('No image file');
        return <img className="receipt-img" src={receiptImg} alt="receipt" />;
      }
      return (
        <input
          type="image"
          className="ShowFileImage"
          src={imageFile.thumbnail}
          alt={imageFile.type}
          onClick={handleClickFileInput}
        ></input>
      );
    }, [imageFile]);

    console.log(imageFile);

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
    const tmpdata = {
      recordId: recordId,
      image: imageFile.thumbnail,
    };
    console.log('11111231231', tmpdata);
    uploadReceiptImg(tmpdata).then((res) => {
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
      </div>
    </div>
  );
}

export default PaymentEdit;
