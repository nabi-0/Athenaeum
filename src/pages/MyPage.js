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
  const totalResults = response.length;

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

  return (
    <>
      <PageTitle>My Page</PageTitle>

      <CTA />

      {/* used for testing adding books to database */}
      <div>
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
      </div>

      <div id="tableDiv">
        <PageTitle>Your Book List</PageTitle>
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Book Name</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Published Date</TableCell>
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
                  <TableCell>
                    <Badge type={data.status}>{data.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {new Date(data.date).toLocaleDateString()}
                    </span>
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
