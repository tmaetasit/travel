import JungfrauImg from "./Images/switimg/jungfrau-cover.jpg";
import LakeImg from "./Images/switimg/lake-geneva-cover.jpg";
import LucerneImg from "./Images/switimg/lucerne-cover.jpg";


let SwitItem = [
  {
    id: 1,
    itemImage: JungfrauImg,
    itemTitle: "Jungfrau", 
    itemDescription:
      "สัมผัสความงามและท้าทายสภาพอากาศของยอดเขาจุงเฟราสวิตเซอร์แลนด์",
    linkPath: "../Components/JungFrauDetail/JungFrauDetail.jsx"
  },
  {
    id: 2,
    itemImage: LakeImg,
    itemTitle: "Lake Geneva", 
    itemDescription:
      "สัมผัสความสงบและล่องเรือที่ทะเลสาบเจนีวา สวิตเซอร์แลนด์",
    linkPath: "../Components/LakeGenevaDetail/LakeGenevaDetail.jsx"
  },
  {
    id: 3,
    itemImage: LucerneImg,
    itemTitle: "Lucerne", 
    itemDescription:
      "เยี่ยมชมเมืองลูเซิร์น เมืองแห่งความสวยงามและวัฒนธรรม",
    linkPath: "../Components/LucerneDetail/LucerneDetail.jsx"
  },
];

export default SwitItem;
