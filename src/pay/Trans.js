import React from "react";
import MUIDataTable from "mui-datatables";



const columns = [
  {
    name: "transaction",
    label: "TRANSACTION",
    options: {
     filter: true,
     sort: true,
    }
   },
 {
  name: "date & time",
  label: "DATE & TIME",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "amount",
  label: "AMOUNT",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "transaction id",
  label: "TRANSACTION ID",
  options: {
   filter: true,
   sort: false,
  }
 },

 
 {
  name: 'status',
  label: "STATUS",
  options: {
    filter: false,
    sort: false,
   
  },
  
 },
 
];


const options = {
  filterType: 'checkbox',
};
const data = [
    { no:"1",name: "Pooja Shetty", description: "Test Corp", respondant: "adv.abc", date: "3/1/202",comments:"hiring is on 3/1/2024",Status:" Inactive" },
    { no:"2",name: "Ram Sharma", description: "Test Desc", respondant: "adv.pqr", date: "27/7/2024",comments:"hiring is on 27/7/2024",Status:"Open " },
    
   ];
   

const Case = () => {


  return (
    <>
<MUIDataTable
  title={"CASES"} 
  data={data}
  columns={columns}
  options={options}
/> 

    </>
  );
};
  export default Case;