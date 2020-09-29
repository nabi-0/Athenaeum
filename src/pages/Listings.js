import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { SearchContext } from "../context/SearchContext";
import PageTitle from "../components/Typography/PageTitle";
import BookService from "../Services/BookService";
import Swal from "sweetalert2";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from "@windmill/react-ui";

function Listings(props) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  // pagination setup
  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  useEffect(() => {
    BookService.getBooks().then((data) => {
      setBooks(data.books);
    });
  }, []);

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(data.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  const { user, setUser } = useContext(AuthContext);

  const [search, setSearch] = useContext(SearchContext);

  const resultsPerPage = 15;
  const totalResults = search.length;

  const [book, setBook] = useState({ title: "" });
  const [books, setBooks] = useState([]);

  const addClick = (data) => {
    Swal.fire({
      icon: "success",
      title: "Book added to your list",
      text: "You can view your list at My Page",
      showConfirmButton: false,
    });
    setTimeout(() => {
      setBook({
        title: data.volumeInfo.title,
        authors: data.volumeInfo.authors.join(", "),
        description: data.volumeInfo.description,
        thumbnail: data.volumeInfo.imageLinks.smallThumbnail,
      });
      Swal.close();
    }, 1500);
  };

  useEffect(() => {
    console.log("new entry: ");
    console.log(book);
    if (book.title !== "") {
      onAdd(book);
    }
  }, [book]);

  const onAdd = () => {
    BookService.postBook(book);
  };

  const thumbnailFunc = (data) => {
    if ("imageLinks" in data) {
      return data.imageLinks.smallThumbnail;
    }
  };

  const authorsFunc = (data) => {
    if ("authors" in data) {
      if (data.authors.join(", ").length >= 40) {
        return data.authors.join(", ").slice(0, 40) + "...";
      }
      return data.authors.join(", ");
    }
  };

  const titleFunc = (data) => {
    if (data.title.length >= 60) {
      return data.title.slice(0, 60) + "...";
    }
    return data.title;
  };

  return (
    <>
      <PageTitle>Listings </PageTitle>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Book Name</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Published Date</TableCell>
              <TableCell>Add to list(s)?</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {search.map((data, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar
                      className="hidden mr-3 md:block"
                      src={thumbnailFunc(data.volumeInfo)}
                      alt=""
                    />
                    <div>
                      <p className="font-semibold">
                        {titleFunc(data.volumeInfo)}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {user.job}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {authorsFunc(data.volumeInfo)}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>
                    {data.volumeInfo.publishedDate}
                  </Badge>
                </TableCell>
                <TableCell>
                  <button
                    className="bg-purple-400 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
                    onClick={() => {
                      addClick(data);
                    }}
                  >
                    Add
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
    </>
  );
}

export default Listings;
