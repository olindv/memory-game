import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import "./Game.css";
import { prepareImages } from "../../utils/shuffle";
import { connect } from "react-redux";

const Game = ({ images }) => {
  const [imagesList, setImagesList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [matchedIds, setMatchedIds] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  
  const handleClick = (data) => {
    setClickCount(clickCount + 1);

    // Флипаем карточки
    const formattedList = imagesList.map((el) => {
      if (data.position === el.position && !el.isFlipped) {
        return {
          ...el,
          isFlipped: true,
        };
      }
      return el;
    });
    
    // Перезаписываем в локальном стейте массив с перевернутыми карточками
    setImagesList(formattedList);

    // Добавляем в локал стейт массив с совпадениями (массив будет пропущен в ребенка)
    if (selectedItem && selectedItem.id === data.id) {
      setMatchedIds([...matchedIds, data.id]);
      setClickCount(0);
    }

    // Проверяем совпадает ли пары выбранных карточек для матчинга,
    // если нет, то переворачиваем их
    if (selectedItem && selectedItem.id !== data.id) {
      const remainingList = imagesList.map((el, i) => {
        if(matchedIds.indexOf(el.id) === -1 && el.id !== matchedIds) {
          return {
            ...el,
            isFlipped: false,
          };
        }
        return el;
      });
      
      // setImagesList(remainingList)
      setTimeout(()=> {
        setImagesList(remainingList);
        setClickCount(0);
      }, 1500)
    }

    // Добавляем в локальный стейт id выбранного элемента, если в текущий момент там находится null
    setSelectedItem(!selectedItem ? data : null);
  };

  useEffect(() => {
    const currentImages = prepareImages(images);
    if (currentImages && currentImages.length > 0) {
      const formattedData = currentImages.map(
        ({ id, webformatURL }, index) => ({
          id,
          webformatURL,
          position: index,
          isFlipped: false,
        })
      );

      setImagesList(formattedData);
    }
  }, [images]);

  const renderCards = () => {
    return (
      <div className="board">
        <h2 className="title">Test task for front-end developer vacancy</h2>
        <div className="cards">
          {imagesList.map((item) => (
            <div className="card" key={item.position}>
              <Card
                handleClick={handleClick}
                itemData={item}
                matchedIds={matchedIds}
                counter={clickCount}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderLoader = () => {
    return <div>Is loading ...</div>;
  };

  return images && images.length ? renderCards() : renderLoader();
};

const mapStateToProps = (state) => {
  return {
    images: state.images,
  };
};

export default connect(mapStateToProps, null)(Game);
