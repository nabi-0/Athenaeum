import React, { useState, useEffect, useContext } from "react";
import BookService from "../Services/BookService";
import { AuthContext } from "../context/AuthContext";
import CTA from "../components/CTA";
import PageTitle from "../components/Typography/PageTitle";
import response from "../utils/demo/tableData";
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

      <div id="tableDiv">
        <PageTitle>Your Book List</PageTitle>
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Book Name</TableCell>
                <TableCell>Author(s)</TableCell>
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
