import { useState, useEffect, createContext } from "react";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import LeftMenueComponent from "./Components/LeftMenueComponent";
import HomeComponent from "./Components/HomeComponent";

const PostContext = createContext();
const ContactContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);

  const ContactsURL =
    "https://boolean-uk-api-server.fly.dev/victorscodeingcorner/contact";
  const PostURL =
    "https://boolean-uk-api-server.fly.dev/victorscodeingcorner/post";

  const fetchPosts = async () => {
    const response = await fetch(PostURL);
    const jsonData = await response.json();
    console.log(jsonData);
    setPosts(jsonData);
  };

  const fetchContacts = async () => {
    const response = await fetch(ContactsURL);
    const jsonData = await response.json();
    console.log(jsonData);
    setContacts(jsonData);
  };

  useEffect(() => {
    fetchPosts();
    fetchContacts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      <ContactContext.Provider value={{ contacts, setContacts }}>
        <div className="app-layout">
          <HeaderComponent />
          <LeftMenueComponent />
          <HomeComponent />
        </div>
      </ContactContext.Provider>
    </PostContext.Provider>
  );
}

export { App, PostContext, ContactContext };
