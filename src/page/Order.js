import React from "react";
import AddOrder from "../components/AddOrder";
import "./Order.css";

const Order = (props) => {
  const { handleAddOrder } = props;
  return (
    <div className="order-container">
      <header>
        <h1>Teknolojik Yemekler</h1>
        <div>
          Anasayfa - Seçenekler -<span>Sipariş Oluştur</span>
        </div>
      </header>
      <div className="product">
        <h4>Position Absolute Acı Pizza</h4>
        <div className="product-info">
          <h2>85.50₺</h2>
          <div className="content">
            <p>4.9</p>
            <p>(200)</p>
          </div>
        </div>
        <div className="info-text">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </div>
        <AddOrder handleAddOrder={handleAddOrder} />
      </div>
    </div>
  );
};

export default Order;
