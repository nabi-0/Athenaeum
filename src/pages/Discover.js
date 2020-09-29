import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { SearchContext } from "../context/SearchContext";
import randomWords from "random-words";
import PageTitle from "../components/Typography/PageTitle";
import API from "../utils/API";
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
  Badge,
  Pagination,
} from "@windmill/react-ui";

function Discover(props) {
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

  // console.log(search);

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
  let randomQuery;

  const randomFunc = () => {
    randomQuery = `${randomWords()} ${randomWords()}`;
    console.log(randomQuery);
    setTimeout(() => {
      searchSubmitHandler();
    }, 500);
  };

  const searchSubmitHandler = () => {
    API.SearchBooks(randomQuery)
      .then((res) => {
        setSearch(res.data.items);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <PageTitle>Discover</PageTitle>
        <div
          style={{
            marginTop: "20px",
            marginLeft: "15px",
            width: "100%",
          }}
        >
          <button
            onClick={randomFunc}
            className="content-center bg-purple-500 hover:bg-blue-700 hover:bg-blue-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-blue-500 rounded"
          >
            Click to randomize results
          </button>
        </div>
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Book Cover</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Published Date</TableCell>
              <TableCell>Add to list(s)?</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {search.map((data, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <img
                      className="hidden mr-3 md:block"
                      src={thumbnailFunc(data.volumeInfo)}
                      alt=""
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <p className="font-semibold">{titleFunc(data.volumeInfo)}</p>
                  <p className="text-sm">{authorsFunc(data.volumeInfo)}</p>
                  <br />
                  <div style={{ width: "600px", whiteSpace: "pre-wrap" }}>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {data.volumeInfo.description?.slice(0, 500) +
                        (data.volumeInfo.description?.length >= 500
                          ? "..."
                          : " ")}
                    </p>
                  </div>
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

export default Discover;
