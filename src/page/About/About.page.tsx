// Import Libraries
import { CopyToClipboard } from "react-copy-to-clipboard";

export const About = () => {
  return (
    <div className="about">
      <CopyToClipboard
        text="821085942310"
        onCopy={() => alert("전화번호를 복사했습니다.")}
      >
        <h3>+82 10 8594 2310</h3>
      </CopyToClipboard>
      <br />
      <a
        href="https://www.instagram.com/sa_gum/"
        target="_blank"
        rel="noreferrer"
      >
        <h3>@sa_gum</h3>
      </a>
      <br />
      <CopyToClipboard
        text="mail@sagum.gallery"
        onCopy={() => alert("이메일을 복사했습니다.")}
      >
        <h3>mail@sagum.gallery</h3>
      </CopyToClipboard>
      <h5>
        ©2021, Sagum all right reserved.
        <br />
        “The archive”
      </h5>
    </div>
  );
};
