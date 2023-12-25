import React from 'react';
import styled from '@emotion/styled';
import ServiceItem from './ServiceItem';
import iconStat from '../assets/images/iconStat.webp';
import iconYourFNLG from '../assets/images/iconYourFNLG.webp';
import iconPaymentRecord from '../assets/images/iconPaymentRecord.webp';
import iconBadge from '../assets/images/iconBadge.webp';
import iconAd from '../assets/images/iconAd.webp';
import iconFriend from '../assets/images/iconFriend.webp';
import { useNavigate } from 'react-router-dom';

function ServiceList() {
  const navigate = useNavigate();
  const handleCardClick = (e) => {
    switch (e.target.textContent) {
      case '통계':
        navigate('/chart');
        break;
      case '너의 가계부':
        navigate('/yours');
        break;
      case '결제내역':
        navigate('/payment');
        break;
      case '활동 배지':
        navigate('/badge');
        break;
      case '상품':
        navigate('/savings');
        break;
      case '친구':
        navigate('/friend');
        break;
    }
  };

  return (
    <div>
      <ListBox>
        <ServiceItem
          handleCardClick={handleCardClick}
          title="통계"
          desTop="테마와 관련된 다양한"
          desBottom="데이터 기반"
          image={iconStat}
        />
        <ServiceItem
          handleCardClick={handleCardClick}
          title="너의 가계부"
          desTop="다른 이의 좋은 정보를"
          desBottom="쏙쏙 얻을 수 있는"
          image={iconYourFNLG}
        />
      </ListBox>
      <ListBox>
        <ServiceItem
          handleCardClick={handleCardClick}
          title="결제내역"
          desTop="마이데이터와 연계된"
          desBottom="나의"
          image={iconPaymentRecord}
        />
        <ServiceItem
          handleCardClick={handleCardClick}
          title="활동 배지"
          desTop="내 절약생활의"
          desBottom="발자취"
          image={iconBadge}
        />
      </ListBox>
      <ListBox>
        <ServiceItem
          handleCardClick={handleCardClick}
          title="상품"
          desTop="아껴서 모은 돈으로"
          desBottom="새로운 저축의 시작"
          image={iconAd}
        />
        <ServiceItem
          handleCardClick={handleCardClick}
          title="친구"
          desTop="공동의 목표를 향한"
          desBottom="한걸음"
          image={iconFriend}
        />
      </ListBox>
    </div>
  );
}

const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

export default ServiceList;
