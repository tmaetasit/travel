import EiffelImg from "./Images/holiday-paris.jpg";  
import VersaillesImg from "./Images/franceimg/versailles-cover.jpg";    
import RivieraImg from "./Images/franceimg/Riviera-cover.jpg";    

let FranceItem = [
  {
    id: 1,
    itemImage: EiffelImg, 
    itemTitle: "Eiffel Tower", 
    itemDescription:
      "เยี่ยมชมสัญลักษณ์ของปารีสและฝรั่งเศส ที่สูงตระหง่านเป็นสัญลักษณ์ของเมืองที่ไม่เคยหลับใหล",
    linkPath: "../Components/EiffelDetail/EiffelDetail.jsx"
  },
  {
    id: 2,
    itemImage: VersaillesImg, 
    itemTitle: "Versailles",
    itemDescription:
      "สัมผัสความงามและความหรูหราของพระราชวังแวร์ซายส์ ที่ได้รับการขึ้นทะเบียนเป็นมรดกโลก",
    linkPath: "../Components/VersaillesDetail/VersaillesDetail.jsx"
  },
  {
    id: 3,
    itemImage: RivieraImg, 
    itemTitle: "French Riviera",
    itemDescription:
      "พักผ่อนที่ชายฝั่งทะเลที่สวยงามกับทิวทัศน์ของทะเลเมดิเตอร์เรเนียนและเมืองสุดหรูอย่าง Nice",
    linkPath: "../Components/RivieraDetail/RivieraDetail.jsx"
  },
];

export default FranceItem;
