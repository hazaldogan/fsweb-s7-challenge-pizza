import React from "react";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Piece from "./Piece";
import { useHistory } from "react-router-dom";

const order = {
  size: "",
  thickness: "",
  extra: [],
  note: "",
};

const extraProduct = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalapeno",
  "Sarımsak",
  "Biber",
  "Sucuk",
  "Ananas",
  "Kabak",
];

const AddOrder = () => {
  const [formData, setFormData] = useState(order);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    size: "",
    thickness: "",
    extra: [],
    note: "",
  });

  let history = useHistory();

  const formSchema = Yup.object().shape({
    size: Yup.string()
      .oneOf(["small", "medium", "large"], "Bir boyut seçmelisin")
      .required("Boyut seçmelisin"),
    thickness: Yup.string()
      .oneOf(["thin", "standard"], "Bir hamur kalınlığı seçmelisin")
      .required("Hamur kalınlığı seçmelisin"),
    note: Yup.string(),
    extra: Yup.array().max(10, "En fazla 10 tane seçebilirsin"),
  });

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => setIsValid(valid));
  }, [formData]);

  const handleChange = (evt) => {
    const { checked, type } = evt.target;
    let { name, value } = evt.target;
    const updatedForm = { ...formData };
    if (type === "checkbox") {
      if (checked) {
        updatedForm.extra.push(name);
      } else {
        const index = updatedForm.extra.indexOf(name);
        updatedForm.extra.splice(index, 1);
      }
      name = "extra";
      value = updatedForm.extra;
    } else {
      updatedForm[name] = value;
    }

    setFormData(updatedForm);

    Yup.reach(formSchema, name)
      .validate(value)
      .then((valid) => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  function handleSubmit(event) {
    console.log(formData);
    event.preventDefault();
    //formu sıfırlayacak
    setFormData(order);
    history.push("/siparis-alindi");
  }

  return (
    <form action="siparis-alindi" id="pizza-form" onSubmit={handleSubmit}>
      <div className="form-first-area">
        <div className="size">
          Boyut Seç<span>*</span>
          <div>
            <input
              id="small"
              name="size"
              type="radio"
              value="small"
              checked={formData.size === "small"}
              onChange={handleChange}
            />
            <label htmlFor="small">Küçük</label>
          </div>
          <div>
            <input
              id="medium"
              name="size"
              type="radio"
              value="medium"
              checked={formData.size === "medium"}
              onChange={handleChange}
            />
            <label htmlFor="medium">Orta</label>
          </div>
          <div>
            <input
              id="large"
              name="size"
              type="radio"
              value="large"
              checked={formData.size === "large"}
              onChange={handleChange}
            />
            <label htmlFor="large">Büyük</label>
          </div>
        </div>
        <div className="thickness">
          <label htmlFor="thickness">
            Hamur Seç<span>*</span>
          </label>
          <br />
          <select onChange={handleChange} name="thickness" id="thickness">
            <option value="">Hamur Kalınlığı</option>
            <option
              selected={formData.thickness === "standard"}
              value="standard"
            >
              Standart
            </option>
            <option selected={formData.thickness === "thin"} value="thin">
              İnce
            </option>
          </select>
        </div>
      </div>
      <div className="extra">
        <h4>Ek Malzemeler</h4>
        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        {extraProduct.map((evt, i) => (
          <div className="extra-details" key={i}>
            <input
              id={evt}
              name={evt}
              type="checkbox"
              value={evt}
              onChange={handleChange}
            />
            <label htmlFor={evt}>{evt}</label>
          </div>
        ))}
      </div>
      <div className="note">
        <label htmlFor="note">Sipariş Notu</label>
        <input
          id="note"
          name="note"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          type="text"
          value={formData.note}
          onChange={handleChange}
        />
      </div>
      <hr />
      <div className="end">
        <Piece />
        <div className="total-area">
          <h4>Sipariş Toplamı</h4>
          <div>
            <div className="chooses">
              <p>Seçimler</p>
              <p>{formData.extra.length * 5}</p>
            </div>
            <div className="total">
              <p>Toplam</p>
              <p>{formData.extra.length * 5 + 85.5}</p>
            </div>
          </div>

          <button
            data-cy="submit-form-button"
            disabled={!isValid}
            type="submit"
          >
            Sipariş Ver
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddOrder;
