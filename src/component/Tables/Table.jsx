import { Table } from "antd"
import { useContext, useState } from "react"
import ValidateEmailModal from "../Modals/ValidateEmailModal"
import { UserContext } from "../../context/UserContext"

const TableList = ({columns, dataSource, selection, width}) => {

// const [loading, setLoading] = useState(false)
const [page, setPage] = useState(1)
const [pageSize, setPageSize] = useState(10)
const [selectedRowKeys, setSelectedRowKeys] = useState([])
const [openModal, setOpenModal] = useState(false);

const {loading} = useContext(UserContext)

console.log(loading)
const validateEmail = (resp) => {
  resp ? setOpenModal(resp) : setOpenModal(resp); // resp = true || false
};

const onSelectChange = (newSelectedRowKeys) => {
  console.log('selectedRowKeys changed: ', newSelectedRowKeys);
  setSelectedRowKeys(newSelectedRowKeys);
};

  return (
    <div>
      {!loading && dataSource < 1 ?
        <div className="flex flex-col gap-10 justify-center items-center py-[10rem]">
        <p className="text-[16px] leading-[22px] text-grey-400 text-center w-[258px] font-[400]">You have not added any entries, Please click on the create entries button to start</p>
        <button
            onClick={validateEmail}
            className="bg-yellow-400 rounded-[8px] py-2 px-4 md:py-3 text-grey-900 font-medium text-sm leading-[20px]"
          >
            Create entries
          </button>
      </div> :
        <Table 
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        // sortDirections=[ascend, descend]
        showSorterTooltip={false}
        pagination={{
            current: page,
            pageSize:pageSize,
            position: 'bottomCenter',
            onChange:(page,pageSize)=>{
                setPage(page);
                setPageSize(pageSize)
            },
        }}
        className="table-wrapper"
        scroll={{
             x: true,
             scrollToFirstRowOnChange: true
            }}
            rowSelection={selection}
        /> }
        <ValidateEmailModal open={openModal} openFunction={validateEmail} />

    </div>
  )
}

export default TableList