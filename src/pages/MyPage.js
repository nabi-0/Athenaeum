import React, { useState, useEffect, useContext } from "react";
import BookItem from "./BookItem";
import BookService from "../Services/BookService";
import { AuthContext } from "../context/AuthContext";
import CTA from "../components/CTA";
import InfoCard from "../components/Cards/InfoCard";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
import response from "../utils/demo/tableData";
import Message from "../components/Message";
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

function MyPage(props) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const [book, setBook] = useState({ name: "" });
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    BookService.getBooks().then((data) => {
      setBooks(data.books);
    });
  }, []);

  // pagination setup
  const resultsPerPage = 15;
  const totalResults = books.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  const onBookSubmit = (e) => {
    e.preventDefault();
    BookService.postBook(book).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        BookService.getBooks().then((getData) => {
          setBooks(getData.books);
          setMessage(message);
        });
      } else if (message.msgBody === "Unauthorized") {
        setMessage(message);
        authContext.setUser({ username: "", role: "" });
        authContext.setIsAuthenticated(false);
      } else {
        setMessage(message);
      }
    });
  };

  const onBookChange = (e) => {
    setBook({ title: e.target.value });
  };
  const onBookChangeAuthor = (e) => {
    setBook({ author: e.target.value });
  };

  const resetForm = () => {
    setBook({ title: "" });
  };

  const actionClick = (book) => {
    Swal.fire({
      title: "What would you like to do?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Sell book`,
      denyButtonText: `Remove from List`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Redirecting...",
        });
      } else if (result.isDenied) {
        Swal.fire({
          icon: "warning",
          title: "Are you sure?",
          text: "You cannot undo this action.",
          showConfirmButton: false,
          showDenyButton: true,
          showCancelButton: true,
          denyButtonText: `Continue`,
        }).then((result) => {
          if (result.isDenied) {
            deleteBookPls(book);
          } else {
            console.log("You didn't delete the book");
          }
        });
      }
    });
  };

  const deleteBookPls = (book) => {
    BookService.deleteBook(book._id);
    let timerID = setTimeout(() => {
      Swal.close();
      window.location.reload();
    }, 1000);
    Swal.fire({
      icon: "success",
      title: "Deleting book...",
      showConfirmButton: false,
    }).then(timerID);
  };

  return (
    <>
      <PageTitle>My Page</PageTitle>

      <CTA />

      {/* used for testing adding books to database */}
      {/* <div>
        <ul>
          {books.map((book) => {
            return <BookItem key={book._id} book={book} />;
          })}
        </ul>
        <br />
        <form onSubmit={onBookSubmit}>
          <label htmlFor="book">Enter Book</label> <br />
          <input
            type="text"
            name="book"
            value={book.title}
            onChange={onBookChange}
            className="form-control"
            placeholder="Book title"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        {message ? <Message message={message} /> : null}
      </div> */}

      <div id="tableDiv">
        <PageTitle>Your Book List</PageTitle>
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Book Name</TableCell>
                <TableCell>Author(s)</TableCell>
                {/* <TableCell>Published Date</TableCell> */}
                <TableCell>Actions</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {books.map((book, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <Avatar
                        className="hidden mr-3 md:block"
                        src={book.thumbnail}
                        alt="User image"
                      />
                      <div>
                        <p className="font-semibold">{book.title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {book.job}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{book.authors}</span>
                  </TableCell>
                  {/* <TableCell>
                    <Badge type={data.status}>{data.status}</Badge>
                  </TableCell> */}
                  <TableCell>
                    <button
                      className="bg-purple-400 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
                      onClick={() => {
                        actionClick(book);
                      }}
                    >
                      ...
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
      </div>
    </>
  );
}

export default MyPage;
