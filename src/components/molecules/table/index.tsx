import { useUser } from "@contexts/users";
import { censorPhoneNo, signAtFormat } from "@utils/transforms";
import { useState } from "react";
import { Pagination, Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

export const UserTable = () => {
  const [activePage, setActivePage] = useState(1);
  const user = useUser();

  const data = user.paginate.data
    .sort((a, b) => {
      const aVal = a.signAt?.valueOf() || 0;
      const bVal = b.signAt?.valueOf() || 0;
      return bVal - aVal;
    })
    .map((item) => {
      return {
        ...item,
        phoneNo: censorPhoneNo(item.phoneNo),
        signAt: signAtFormat(item.signAt),
      };
    });

  const onChangeActivePage = (page: number) => {
    setActivePage(() => page);
    user.setPagination(page);
  };

  return (
    <div
      className="flex flex-col justify-between bg-white rounded-lg p-8"
      style={{ height: "666px" }}
    >
      <div className="block">
        <div className="flex flex-row justify-between items-center py-2">
          <h2 className="text-lg font-semibold">React Suite Table</h2>
          <p className="text-sm font-semibold">Total {user.paginate.total}</p>
        </div>
        <Table height={400} autoHeight width={960} data={data}>
          <Column width={60}>
            <HeaderCell>ID</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={200}>
            <HeaderCell>Firstname</HeaderCell>
            <Cell dataKey="firstname" />
          </Column>
          <Column width={200}>
            <HeaderCell>Lastname</HeaderCell>
            <Cell dataKey="lastname" />
          </Column>
          <Column width={200}>
            <HeaderCell>Phone Number</HeaderCell>
            <Cell dataKey="phoneNo" />
          </Column>
          <Column width={200}>
            <HeaderCell>Sign At</HeaderCell>
            <Cell dataKey="signAt" />
          </Column>

          <Column width={100}>
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
        activePage={activePage}
        onChangePage={onChangeActivePage}
        className="pt-8"
      />
    </div>
  );
};
