import React from "react";
import {
  NoticeBoardDiv,
  NoticeBoardPics,
  NoticeBoardTags,
} from "../../styles/meal/noticeboardsmall";
import { Link } from "react-router-dom";

const NoticeBoardSmall = () => {
  return (
    <div>
      <Link to={"more"}>
        <NoticeBoardDiv>
          <NoticeBoardPics>
            <img src="/images/choco.png" alt="사진을 넣어주세요" />
          </NoticeBoardPics>
          <NoticeBoardTags>
            <span>#초콜릿케이크</span>
            <span>#빵집</span>
            <span>#케이크</span>
            <span>#맛있다</span>
            <span>#어렵다</span>
          </NoticeBoardTags>
        </NoticeBoardDiv>
      </Link>
    </div>
  );
};

export default NoticeBoardSmall;
