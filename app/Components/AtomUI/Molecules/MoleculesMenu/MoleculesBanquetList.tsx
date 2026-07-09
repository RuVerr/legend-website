import React from "react";
import AtomUl from "../../Atoms/AtomList/AtomUl";
import AtomLi from "../../Atoms/AtomList/AtomLi";
import AtomHeading from "../../Atoms/AtomTypography/AtomHeading";
import AtomParagraph from "../../Atoms/AtomTypography/AtomParagraph";

interface SubItem {
  subItem: string;
}

interface Item {
  itemTitle: string;
  subItems: SubItem[];
}

interface MenuInfo {
  mainTitle: string;
  items: Item[];
}

interface MoleculesBanquetListProps {
  menuInfo: MenuInfo[];
}

export default function MoleculesBanquetList({ menuInfo }: MoleculesBanquetListProps) {
  return (
    <>
      {menuInfo.map((category, catIndex) => (
        <div className="banquet_content_box flex flex-col items-center pt-[40px]" key={catIndex}>
          <AtomHeading
            level="h2"
            className="montserrat-m w-[80%] text-[#5a421f] text-[26px] py-[10px] my-[20px] uppercase text-center"
          >
            {category.mainTitle}
          </AtomHeading>
          <AtomUl className="flex max-w-[600px] flex-col justify-center items-center border-y-1 border-[#866a3f]">
            {category.items.map((subCategory, subCatIndex) => (
              <div className="w-full" key={subCatIndex}>
                <AtomHeading
                  level="h3"
                  className="montserrat-m text-[#5a421f] text-[26px] py-[10px] my-[20px] uppercase text-center border-y-1 border-[#866a3f]"
                >
                  {subCategory.itemTitle}
                </AtomHeading>
                {subCategory.subItems.map((subItem, subItemIndex) => (
                  <AtomLi key={subItemIndex} className="montserrat-b text-[#6f5229] py-[10px] text-[20px]">
                    <AtomHeading level="h4" className="text-center">
                      {subItem.subItem}
                    </AtomHeading>
                  </AtomLi>
                ))}
              </div>
            ))}
          </AtomUl>
        </div>
      ))}
    </>

    // <AtomUl>
    //   {banquetInfo.map((el) => (
    //     <AtomHeading level="h2">{el.mainTitle}</AtomHeading>
    //   ))}
    //   {banquetInfo.map((item, itemIndex) => (
    //     <AtomLi key={itemIndex}>
    //       {item.items.map((item) => (
    //         <AtomHeading level="h3">{item.itemTitle}</AtomHeading>
    //       ))}

    //       {item.items.map((subItem, subIndex) => (
    //         <AtomParagraph key={subIndex}>{subItem.subItems}</AtomParagraph>
    //       ))}

    //       {/* {item.items..map((subItem, subIndex) => (
    //       ))} */}
    //     </AtomLi>
    //   ))}
    // </AtomUl>
  );
}
