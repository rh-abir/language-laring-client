const MyClassRow = ({ cls }) => {
  return (
    <>
      <tr>
        <td>1</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={cls.imageUrl} />
              </div>
            </div>
          </div>
        </td>
        <td>{cls?.title ? cls.title : "no title"}</td>
        <td className="text-center">{cls.enroll}</td>
        <th>
          <button className="btn btn-xs cursor-default">{cls.status}</button>
        </th>
        <th>
          <button className=" btn btn-xs btn-outline  btn-primar">Update</button>
        </th>
      
      </tr>
    </>
  );
};

export default MyClassRow;
