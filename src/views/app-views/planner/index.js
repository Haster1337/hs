import { Card, Upload, Button } from "antd";
import { useState } from "react";
import {
  UploadOutlined,
  DownloadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const Img = ({ src, onDragStart, id, style, onClick, type }) => (
  <img
    src={src}
    id={id}
    alt={type}
    onDragStart={onDragStart}
    style={style}
    onClick={onClick}
  />
);

const Planner = () => {
  const [elems, setElems] = useState([]);
  const [activeElem, setActiveElem] = useState();
  const [activeDroppingElem, setActiveDroppingElem] = useState();
  const [activeDropElem, setActiveDropElem] = useState(null);

  let posX, posY;
  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dragLeaveHandler = (e) => {};

  const dragStartHandler = (e) => {
    setActiveElem(e.target.src);
  };

  const dragEndHandler = (e) => {};

  const dropHandler = (e) => {
    e.preventDefault();
    if (typeof activeDroppingElem === "string") {
      const dropContainer = e.target;
      const rect = dropContainer.getBoundingClientRect();
      posX = e.clientX;
      posY = e.clientY;
      const x = posX - rect.left;
      const y = posY - rect.top;
      setElems((prevState) => {
        const elem = prevState[+activeDroppingElem];
        elem.position = { x, y };
        return prevState;
      });
      setActiveDroppingElem();
      return;
    }
    const dropContainer = e.target;
    const rect = dropContainer.getBoundingClientRect();
    posX = e.clientX;
    posY = e.clientY;
    const x = posX - rect.left;
    const y = posY - rect.top;
    setElems((prevState) => [
      ...prevState,
      { id: prevState.length, src: activeElem, position: { x, y } },
    ]);
  };

  const onDragStartDroppingDiv = (e) => {
    setActiveDroppingElem(e.target.id);
  };

  const onClickHandler = (e) => {
    setActiveDropElem(e.target.id);
  };

  const deleteHandler = () => {
    setElems((prevState) => {
      return prevState.filter((_, index) => index !== +activeDropElem);
    });
    setActiveDropElem(null);
  };

  const saveToFile = () => {
    const jsonContent = JSON.stringify(Object(elems));
    const blob = new Blob([jsonContent], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "planner-layout.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const importFromFile = (e) => {
    const file = e.file.originFileObj;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      const data = JSON.parse(content);
      setElems(data);
    };
    reader.readAsText(file);
  };

  const uploadProps = {
    onChange: importFromFile,
    accept: ".json",
    type: "file",
    multiple: true,
  };

  return (
    <div
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragStart={(e) => dragStartHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      draggable={false}
    >
      <div style={{
        marginBottom: '2vh'
      }}>
        <Card>
          <Img src={`/img/planner/table.png`} type={"table"} />
          <Img src={`/img/planner/chair.png`} type={"chair"} />
          <Img src={`/img/planner/round-chair.png`} type={"round-chair"} />
          <Img src={`/img/planner/wood.png`} type={"wood"} />
        </Card>
        <Button
          icon={<DeleteOutlined />}
          onClick={deleteHandler}
          disabled={activeDropElem === null ? true : false}
          danger={true}
        >
          Удалить элемент
        </Button>
        <Button icon={<DownloadOutlined />} onClick={saveToFile}>
          Save
        </Button>
        <Upload {...uploadProps} onChange={importFromFile}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </div>
      <Card
        draggable={false}
        onDrop={dropHandler}
        style={{
          position: "relative",
          height: "50vh",
        }}
        
      >
        {elems.map((elem, index) => {
          return (
            <Img
              src={elem.src}
              onDragStart={onDragStartDroppingDiv}
              onClick={onClickHandler}
              id={index}
              key={index}
              style={{
                position: "absolute",
                left: elem.position.x,
                top: elem.position.y,
              }}
              alt={elem.alt}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Planner;
