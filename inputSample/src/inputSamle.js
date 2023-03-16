import React, { useState } from "react";

export default function InputSample() {
  //const [text, setText] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    //setText(e.target.value);
    const { value, name } = e.target;
    setInputs({
      ...inputs, //객체 내용 복사
      [name]: value
    });
  };

  const onReset = () => {
    //setText("");
    setInputs({
      name: "",
      nickname: ""
    });
  };

  return (
    <div>
      {/*<input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>*/}
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}
