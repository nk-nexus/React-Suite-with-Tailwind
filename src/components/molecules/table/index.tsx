import { useUser } from "@contexts/users";
import useBreakpoint from "@hooks/useBreakPoint";
import { censorPhoneNo, formatPhoneNo, signAtFormat } from "@utils/transforms";
import { useState } from "react";
import { Pagination, Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

export const UserTable = () => {
  const { isXL, isSM, isXS } = useBreakpoint();
  const user = useUser();

  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState(() => {
    if (isSM || isXS) {
      return {
        width: {
          table: 280,
          id: 60,
          text: 120,
          phone: 130,
          time: 160,
          active: 70,
        },
      };
    }
    return {
      width: isXL
        ? {
            table: 960,
            id: 60,
            text: 200,
            phone: 200,
            time: 200,
            active: 100,
          }
        : {
            table: 660,
            id: 60,
            text: 120,
            phone: 130,
            time: 160,
            active: 70,
          },
    };
  });

  const data = user.paginate.data.map((item) => {
    return {
      ...item,
      phoneNo: item.isAdmin
        ? formatPhoneNo(item.phoneNo)
        : censorPhoneNo(item.phoneNo),
      signAt: signAtFormat(item.signAt),
    };
  });

  const onChangeActivePage = (page: number) => {
    setTableData(() => ({
      ...tableData,
      page,
    }));
    user.setPagination(page);
  };

  const handleSortColumn = (sortColumn: any, sortType: any) => {
    setLoading(true);
    setTimeout(() => {
      user.sortData(sortColumn, sortType);

      setSortColumn(sortColumn);
      setSortType(sortType);
      setLoading(false);
    }, 500);
  };

  return (
    <div
      className="flex flex-col justify-between bg-white rounded-lg p-8"
      style={{ height: "666px" }}
    >
      <div className="block">
        <div className="flex flex-row justify-between items-center py-2">
          <h2 className="text-lg font-semibold">Users History</h2>
          <p className="text-sm font-semibold">Total {user.paginate.total}</p>
        </div>
        <Table
          height={400}
          autoHeight
          width={tableData.width.table}
          data={data}
          sortColumn={sortColumn}
          sortType={sortType}
          onSortColumn={handleSortColumn}
          loading={loading}
          className="xl:text-base text-sm"
        >
          <Column width={tableData.width.id} sortable>
            <HeaderCell>ID</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={tableData.width.text} sortable>
            <HeaderCell>Firstname</HeaderCell>
            <Cell dataKey="firstname" />
          </Column>
          <Column width={tableData.width.text} sortable>
            <HeaderCell>Lastname</HeaderCell>
            <Cell dataKey="lastname" />
          </Column>
          <Column width={tableData.width.phone} sortable>
            <HeaderCell>Phone Number</HeaderCell>
            <Cell dataKey="phoneNo" />
          </Column>
          <Column width={tableData.width.time} sortable>
            <HeaderCell>Sign At</HeaderCell>
            <Cell dataKey="signAt" />
          </Column>

          <Column width={tableData.width.active}>
            <HeaderCell>Active</HeaderCell>
            <Cell>
              {(rowData) =>
                rowData.isActive ? <span>✅</span> : <span>◻️</span>
              }
            </Cell>
          </Column>
        </Table>
      </div>

      <Pagination
        prev
        last
        next
        first
        size="xs"
        total={user.paginate.total}
        limit={user.paginate.limit}
        activePage={user.paginate.page}
        onChangePage={onChangeActivePage}
        className="pt-8"
      />
    </div>
  );
};
