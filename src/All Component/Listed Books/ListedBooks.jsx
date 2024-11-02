
import { useContext, useEffect, useState } from "react";
import LevelContext from "../../LevelContext";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedBooksCard from "./ListedBooksCard";
const ListedBooks = () => {

    const {readBook} = useContext(LevelContext)

  


    return (
        <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
    
        <TabPanel>
         {
             readBook.map(book => <ListedBooksCard book={book}></ListedBooksCard>)
         }
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    );
};

export default ListedBooks;