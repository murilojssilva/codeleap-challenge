import { FormEvent, useEffect, useState } from "react";
import { AddItem } from "./components/AddItem";
import { IoTrashBinSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Modal from "react-modal";

Modal.setAppElement("#root");

import {
  ItemButtons,
  ItemContainer,
  ItemContent,
  ItemHeader,
  ItemTitle,
  MainContainer,
} from "./styles";
import { Textarea } from "../../components/Textarea";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface IMainProps {
  username: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function Main({ username, isOpen, onRequestClose }: IMainProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    console.log(username);
  }, []);

  function handleAddItem(event: FormEvent) {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: id + 1,
        createdAt: "10/09/2022",
        username: "murilojssilva",
        title,
        content,
      },
    ]);
    setTitle("");
    setContent("");
  }

  const [items, setItems] = useState([
    {
      id: 0,
      username: "murilojssilva",
      createdAt: "10/12/2022",
      title: "Teste",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dolorum culpa, eligendi eum distinctio ea perspiciatis atque recusandae, minus qui cumque, repellendus quas aspernatur explicabo eius! Facere distinctio a mollitia.",
    },
    {
      id: 1,
      username: "murilojssilva",
      createdAt: "10/12/2022",
      title: "Test 1",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dolorum culpa, eligendi eum distinctio ea perspiciatis atque recusandae, minus qui cumque, repellendus quas aspernatur explicabo eius! Facere distinctio a mollitia.",
    },
    {
      id: 2,
      username: "murilojssilva",
      createdAt: "10/12/2022",
      title: "Teste fdssdf",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dolorum culpa, eligendi eum distinctio ea perspiciatis atque recusandae, minus qui cumque, repellendus quas aspernatur explicabo eius! Facere distinctio a mollitia.",
    },
    {
      id: 3,
      username: "murilojssilva",
      createdAt: "10/12/2022",
      title: "Teste fdsfsf",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dolorum culpa, eligendi eum distinctio ea perspiciatis atque recusandae, minus qui cumque, repellendus quas aspernatur explicabo eius! Facere distinctio a mollitia.",
    },
  ]);

  function handleRemoveItem(id: number) {
    var answer = window.confirm("Are you sure you want to delete this item?");
    if (answer) {
      return items.map((item, index) => {
        if (item.id === id) {
          setItems([...items.slice(0, index), ...items.slice(index + 1)]);
        }
      });
    } else {
      return 0;
    }
  }

  const [id, setId] = useState(items.length);
  return (
    <MainContainer>
      <AddItem items={items} setItems={setItems} />
      {items.map((item) => (
        <ItemContainer key={item.id}>
          <ItemHeader>
            <h3>{item.title}</h3>
            {username === item.username && (
              <ItemButtons>
                <button onClick={() => handleRemoveItem(item.id)}>
                  <IoTrashBinSharp size={22} />
                </button>
                <button onClick={openModal}>
                  <FaEdit size={22} />
                </button>
              </ItemButtons>
            )}
          </ItemHeader>
          <ItemContent>
            <ItemTitle>
              <h3>@{item.username}</h3>
              <span>{item.createdAt}</span>
            </ItemTitle>
            <p>{item.content}</p>
          </ItemContent>
        </ItemContainer>
      ))}
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h2>Edit item</h2>
          <button onClick={closeModal}>
            <GrClose size={22} />
          </button>
        </div>
        <form onSubmit={handleAddItem}>
          <label htmlFor="title">Title</label>
          <Input
            placeholder="Hello world"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="content">Content</label>
          <Textarea
            placeholder="Content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <Button type="submit" text="CREATE" />
        </form>
      </Modal>
    </MainContainer>
  );
}
