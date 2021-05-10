import React from 'react';
import styled from 'styled-components';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'gatsby';

const exclusiveOffer = () => {
  const ExclusiveOffer = styled.div`
    background-color: var(--offerColor);
    padding: 12px;
    text-align: center;
    a {
      color: var(--whiteColor);
      font-weight: 600;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 768px) {
        flex-direction: column;
        font-size: 14px;
      }
      span {
        background: var(--whiteColor);
        border-radius: 4px;
        color: var(--offerColor);
        padding: 4px 12px;
        margin-right: 12px;
        font-size: 16px;
        letter-spacing: 1px;
        font-weight: 700;
        height: 22px;
        display: flex;
        align-items: center;
        @media (max-width: 768px) {
          font-size: 10px;
          margin-bottom: 7px;
        }
      }
      div {
        display: flex;
        align-items: center;
      }
      svg {
        margin-left: 9px;
      }
    }
  `;

  const ExclusiveOfferTag = styled.span``;

  return (
    <>
      <ExclusiveOffer>
        <Link>
          <span>EXCLUSIVE OFFER</span>
          <div>
            Save up 20% when you buy multiple DNA kits <FaAngleRight />
          </div>
        </Link>
      </ExclusiveOffer>
    </>
  );
};

export default exclusiveOffer;
