import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { SearchContext } from "../context/SearchContext";
import CTA from "../components/CTA";
import InfoCard from "../components/Cards/InfoCard";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
import response from "../utils/demo/tableData";
import BookService from "../Services/BookService";
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

function Dashboard(props) {
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

  const resultsPerPage = 25;
  const totalResults = search.length;

  // console.log(search);

  const [book, setBook] = useState({ title: "" });
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState(null);

  const addClick = (data) => {
    setBook({
      title: data.volumeInfo.title,
      authors: data.volumeInfo.authors[0],
      description: data.volumeInfo.description,
      thumbnail: data.volumeInfo.imageLinks.smallThumbnail,
    });
    // console.log(data.volumeInfo);
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

  const resetForm = () => {
    setBook({ title: "", authors: "", description: "", thumbnail: "" });
  };

  const thumbnailFunc = (data) => {
    if ("imageLinks" in data) {
      return data.imageLinks.smallThumbnail;
    }
  };

  return (
    <>
      <PageTitle>Dashboard </PageTitle>

      <CTA />

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Watched Authors" value="11">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Book Wishlist" value="21">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        {/* <InfoCard title="Cart" value="3">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard> */}

        <InfoCard title="Unread Messages" value="2">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
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
                      <p className="font-semibold">{data.volumeInfo.title}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {user.job}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {data.volumeInfo.authors.join(", ")}
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

      {/* <PageTitle>Account Data</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Traffic (marketplace views)">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div> */}
    </>
  );
}

export default Dashboard;
