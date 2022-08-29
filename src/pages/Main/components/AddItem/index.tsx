import { FormEvent, ReactNode, useEffect, useState } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Textarea } from "../../../../components/Textarea";
import { AddItemContainer } from "./styles";

interface IAddItemProps {
  items: {
    id: number;
    createdAt: string;
    username: string;
    title: string;
    content: string;
  }[];
  setItems: any;
}

export function AddItem({ items, setItems }: IAddItemProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(items.length);

  useEffect(() => console.log(items.length), []);
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
    setId(id + 1);
    setTitle("");
    setContent("");
  }
  return (
    <AddItemContainer>
      <h1>What's on your mind?</h1>
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
    </AddItemContainer>
  );
}
