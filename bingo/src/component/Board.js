import React, { Component, useState } from "react";
import styled from "styled-components";
import { useObserver } from "mobx-react";
import { Button } from "antd";
import useStores from "../hooks/useStores";
const Square = ({ data, index }) => {
  const { GameStore } = useStores();
  let [color, setColor] = useState(false);
  const [clickRow, setClickRow] = useState(0);
  const [clickColumn, setClickColumn] = useState(0);
  const findArrayIndex = (clickData) => {
    GameStore.getFirstArray().some((row, index) => {
      return row.some((column) => {
        if (column === clickData) {
          setClickRow(index);
          return column === clickData;
        }
      });
    });
  };
  const checkArray = () => {
    GameStore.setFirstVisited(clickRow, clickColumn, true);
  };
  const checkBingo = () => {
    if (GameStore.getAllCount() % 5 === 0) {
      //5번을 상대편과 내가 했다면 빙고 함수 실행
      console.log("실행");
    }
  };
  const handleClick = (data, index) => {
    color = color ? setColor(false) : setColor(true);
    let count = GameStore.getAllCount();
    findArrayIndex(data);
    setClickColumn(index);
    checkArray();
    GameStore.setAllCount(GameStore.getAllCount() + 1);
    checkBingo();
    console.log("으아아: ", clickRow, clickColumn);
  };
  return (
    <Buttons
      value={index}
      onClick={() => handleClick(data, index)}
      style={{ backgroundColor: color ? "blue" : "red" }}
    >
      {data}
    </Buttons>
  );
};
const BoardComponent = ({ square }) => {
  //   const handleClick = (column, index) => {
  //     console.log("ㅎㅇㅎㅇ: ", column, index);

  //   };
  return (
    <BoardCompoentLayout>
      {square.map((row, index) => {
        return (
          <div className="rowStyle">
            {row.map((column, index) => {
              return (
                <Square
                  data={column}
                  index={index}
                  //   handleClick={() => handleClick(column, index)}
                />
              );
            })}
          </div>
        );
      })}
    </BoardCompoentLayout>
  );
};
const Board = () => {
  const square = [
    [1, 2, 3, 4, 5],
    [11, 12, 13, 14, 15],
    [21, 22, 23, 24, 25],
    [31, 32, 33, 34, 35],
    [41, 42, 43, 44, 45],
  ];
  const { GameStore } = useStores();
  return useObserver(() => {
    return (
      <BoardMainLayout>
        <BoardComponent square={GameStore.getFirstArray()}></BoardComponent>
      </BoardMainLayout>
    );
  });
};
const BoardMainLayout = styled.div`
  display: flex;
`;
const BoardCompoentLayout = styled.div`
  width: 1000px;
  .rowStyle {
    padding: 10px;
  }
`;
const Buttons = styled(Button)`
  margin: 0rem 0rem 0rem 0.5rem;
  width: 3rem;
`;
export default Board;
