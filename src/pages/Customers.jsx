import React from "react";
import Header from "../components/Header";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Toolbar,
  Search,
  Selection,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
const Customer = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        editSettings={{ allowEditing: true, allowDeleting: true }}
        toolbar={["Delete"]}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((employee, index) => (
            <ColumnDirective key={index} {...employee} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Filter, Toolbar, Edit, Sort, Selection]} />
      </GridComponent>
    </div>
  );
};

export default Customer;
