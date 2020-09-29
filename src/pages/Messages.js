import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import CTA from "../components/CTA";
import PageTitle from "../components/Typography/PageTitle";
import response from "../utils/demo/tableData";
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

function Messages(props) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  // pagination setup
  const resultsPerPage = 10;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  const { user, setUser } = useContext(AuthContext);

  return (
    <>
      <PageTitle>Messages</PageTitle>

      <CTA />

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Message Title</TableCell>
              <TableCell></TableCell>
              <TableCell>Read/Unread</TableCell>
              <TableCell>Date Received</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold">
                      Re: About your limited edition copy of...
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      user3984
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <span className="text-sm font-semibold">Unread</span>
              </TableCell>
              <TableCell>
                <Badge type={user.status}>09/10/20</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold">Test message</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      tailwind3948
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <span className="text-sm font-semibold">Unread</span>
              </TableCell>
              <TableCell>
                <Badge type={user.status}>09/08/20</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold">
                      You've been added to the "Horror Lovers" reading group
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Athenaeum
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <span className="text-sm text-gray-400">Read</span>
              </TableCell>
              <TableCell>
                <Badge type={user.status}>09/09/20</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center text-sm">
                  <div>
                    <p className="font-semibold">
                      Generic title because my brain is tired
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      user8596
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <span className="text-sm text-gray-400">Read</span>
              </TableCell>
              <TableCell>
                <Badge type={user.status}>09/05/20</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults="4"
            resultsPerPage="10"
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
    </>
  );
}

export default Messages;
