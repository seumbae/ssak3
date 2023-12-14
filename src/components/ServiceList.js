import React from 'react';
import '../styles//ServiceList.css'
import ServiceItem from './ServiceItem';
import iconStat from '../assets/iconStat.png'
import iconYourFNLG from '../assets/iconYourFNLG.png'
import iconPaymentRecord from '../assets/iconPaymentRecord.png'
import iconBadge from '../assets/iconBadge.png'
import iconAd from '../assets/iconAd.png'
import iconFriend from '../assets/iconFriend.png'

function ServiceList() {
  return (
    <div>
      <div className='listBox'>
        <ServiceItem title='통계' desTop='나의 모든 소비 내역을' desBottom='자세히 보여주는' image={iconStat} />
        <ServiceItem title='너의 가계부' desTop='다른 이의 좋은 정보를' desBottom='쏙쏙 얻을 수 있는' image={iconYourFNLG} />
      </div>
      <div className='listBox'>
        <ServiceItem title='결제내역' desTop='마이데이터와 연계된' desBottom='나의' image={iconPaymentRecord} />
        <ServiceItem title='활동 배지' desTop='내 절약생활의' desBottom='발자취' image={iconBadge} />
      </div>
      <div className='listBox'>
        <ServiceItem title='적금' desTop='아껴서 모은 돈으로' desBottom='새로운 저축의 시작' image={iconAd} />
        <ServiceItem title='친구' desTop='공동의 목표를 향한' desBottom='한걸음' image={iconFriend} />
      </div>
    </div>
  );
}

export default ServiceList;
 