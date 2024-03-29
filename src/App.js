import React from "react";
import "./index.css";
import { connect } from "react-redux";
import { listeyeEkle, isaretle, temizle } from "./actions";
import { useState } from "react";

const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura ode", tamamlandi: true },
];

const App = (props) => {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          placeholer="listeye ekle"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setText("");
            props.listeyeEkle(text);
          }}
        >
          Ekle
        </button>
      </div>
      <div className="liste">
        {props.liste.map((item) => (
          <div
            onClick={() => props.isaretle(item.id)}
            key={item.id}
            className={item.tamamlandi ? "yapildi" : ""}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button onClick={() => props.temizle()} className="temizle">
        Tamamlananları Temizle
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    liste: state.liste,
  };
};

export default connect(mapStateToProps, { listeyeEkle, isaretle, temizle })(
  App
);
