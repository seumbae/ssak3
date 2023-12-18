import React from 'react';
import '../styles/record.css';
import moment from 'moment';

const records = [
  { time: '14:53', name: '홈플러스', cat: '술', title: '홈플에서 술삼', price: '30000' },
  { time: '16:53', name: '라공방', cat: '식사', title: '마라탕 먹음', price: '10000' },
  { time: '20:53', name: '다이소', cat: '장갑', title: '추워서 장갑삼', price: '2000' },
];

function getColor(i) {
  switch (i) {
    case 0:
      return 'cat1';
    case 1:
      return 'cat2';
    case 2:
      return 'cat3';
    case 3:
      return 'cat4';
    case 4:
      return 'cat5';
    case 5:
      return 'cat6';
  }
}

function Record(value) {
  return (
    <div>
      <div className="title-container">
        <div className="record-main-title mt-4 row">
          <div className="col-sm"></div>
          <div className="today col-sm">{moment(value).format('YYYY.MM.DD')}</div>
          <div className="more-record-btn col-sm">
            <span className="plus">+ 내역추가</span>
          </div>
        </div>
      </div>

      <div className="accordion" id="accordionPanelsStayOpenExample">
        {records.map((r, i) => (
          <div className="accordion-item" key={i}>
            <h2 className="accordion-header" id={`panelsStayOpen-heading${i}`}>
              <button
                className="accordion-button record-container"
                type="button"
                key={i}
                data-bs-toggle="collapse"
                data-bs-target={`#panelsStayOpen-collapse${i}`}
                aria-expanded="true"
                aria-controls={`panelsStayOpen-collapse${i}`}
              >
                <div className="record-info-area">
                  <div className="record-info">
                    {r.time} | {r.name}
                  </div>
                  <div className={`record-cat ${getColor(i)}`}>{r.cat}</div>
                </div>

                <div className="record-title-area">
                  <div className="record-title">
                    <span className="record-title-name">{r.title}</span>
                    <i className="bi bi-receipt"></i>
                  </div>
                  <div className="record-price">-{r.price}원</div>
                </div>
                {/* <div className="line"></div> */}
              </button>
            </h2>
            <div
              id={`panelsStayOpen-collapse${i}`}
              className="accordion-collapse collapse"
              aria-labelledby={`panelsStayOpen-heading${i}`}
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to demonstrate the{' '}
                <code>.accordion-flush</code> className. This is the firsts accordion body.
              </div>
            </div>
          </div>
        ))}
        {/* <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code>{' '}
              className. This is the second imagine this being filled with some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code>{' '}
              class. This is the thirdordion body. Nothing more exciting happening here in terms of content, but just
              filling up the space to make it look, at least at first glance, a bit more representative of how this
              would look in a real-world application.
            </div>
          </div>
        </div> */}
      </div>

      <btn className="more-btn">+ 더보기</btn>
    </div>
  );
}

export default Record;
