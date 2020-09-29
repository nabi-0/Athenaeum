import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { SearchContext } from "../context/SearchContext";
import randomWords from "random-words";
import CTA from "../components/CTA";
import InfoCard from "../components/Cards/InfoCard";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
import API from "../utils/API";
import response from "../utils/demo/tableData";
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

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from "../utils/demo/chartsData";
import { random } from "faker";

function Discover(props) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // console.log(data);
  // console.log("^^^^^^^");

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

  const {
    authContext,
    isAuthenticated,
    user,
    setIsAuthenticated,
    setUser,
  } = useContext(AuthContext);

  const [search, setSearch] = useContext(SearchContext);

  const resultsPerPage = 15;
  const totalResults = search.length;

  // console.log(search);

  const [book, setBook] = useState({ title: "" });
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState(null);

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

  const resetForm = () => {
    setBook({ title: "", authors: "", description: "", thumbnail: "" });
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
        // setTimeout(() => {
        //   addBook(res.data.items);
        // }, 500);
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
            // border: "black 1px solid",
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
                      src={
                        thumbnailFunc(data.volumeInfo)
                        // data.volumeInfo.imageLinks.smallThumbnail ||
                        // data.volumeInfo.imageLinks.thumbnail
                      }
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

export default Discover;
