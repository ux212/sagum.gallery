// Import Library
import { CopyToClipboard } from "react-copy-to-clipboard";

// Import SCSS
import "./About.page.scss";

export const About = () => {
  return (
    <div className="about">
      <div className="info">
        <div className="info-element">
          <CopyToClipboard
            text="821085942310"
            onCopy={() => alert("전화번호를 복사했습니다.")}
          >
            <p>+82 10 8594 2310</p>
          </CopyToClipboard>
        </div>
        <div className="info-element">
          <a
            href="https://www.instagram.com/sa_gum/"
            target="_blank"
            rel="noreferrer"
          >
            <p>@sa_gum</p>
          </a>
        </div>
        <div className="info-element">
          <CopyToClipboard
            text="mail@sagum.gallery"
            onCopy={() => alert("이메일을 복사했습니다.")}
          >
            <p>mail@sagum.gallery</p>
          </CopyToClipboard>
        </div>
      </div>
      <div>
        ©2021, Sagum all right reserved.
        <br />
        “The archive”
      </div>
    </div>
  );
};
