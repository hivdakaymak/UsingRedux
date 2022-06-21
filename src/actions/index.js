export const EKLE = "Ekle";
export const TEMIZLE = "Tenmizle";
export const ISARETLE = "İşaretle";

export const listeyeEkle = (text) => {
  return { type: EKLE, payload: text };
};

export const isaretle = (id) => {
  return { type: ISARETLE, payload: id };
};

export const temizle = (id) => {
  return { type: TEMIZLE, payload: id   };
};
